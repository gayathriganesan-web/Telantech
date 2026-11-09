/**
 * TELAN TECH - Google Analytics 4 (GA4) Integration Utility
 * 
 * Complies with strict privacy guidelines:
 * - Does not load or execute tracking scripts until user consent is granted.
 * - Respects visitor consent stored in localStorage ('granted' | 'denied').
 * - Gracefully operates in safe no-op mode if VITE_GA_MEASUREMENT_ID is missing or disabled.
 * - Supports DebugView when ?debug_ga=true or in localhost development.
 * - Never collects or transmits Personally Identifiable Information (PII).
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Measurement ID from environment variable
export const GA_MEASUREMENT_ID: string = (import.meta.env.VITE_GA_MEASUREMENT_ID || '').trim();

// Consent storage key
export const CONSENT_STORAGE_KEY = 'telan_tech_analytics_consent';

export type ConsentStatus = 'granted' | 'denied' | 'pending';

/**
 * Check the visitor's stored consent status
 */
export function getStoredConsent(): ConsentStatus {
  if (typeof window === 'undefined') return 'pending';
  try {
    const val = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (val === 'granted' || val === 'denied') {
      return val;
    }
  } catch {
    // LocalStorage might be restricted
  }
  return 'pending';
}

/**
 * Save user consent choice and initialize GA if granted
 */
export function setConsent(status: 'granted' | 'denied'): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, status);
  } catch {
    // Ignore storage errors
  }

  if (status === 'granted') {
    initGA();
    trackEvent('consent_update', { analytics_storage: 'granted' });
  } else {
    // User denied consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
    console.info('[TELAN TECH Analytics] User denied analytics consent. Tracking is disabled.');
  }
}

let isInitialized = false;

/**
 * Initializes the official Google tag (gtag.js) script dynamically if:
 * 1. A valid Measurement ID is configured.
 * 2. The user has granted consent.
 */
export function initGA(): void {
  if (typeof window === 'undefined' || isInitialized) return;

  const consent = getStoredConsent();
  if (consent !== 'granted') {
    // Consent not yet granted, do not inject tracking tag
    return;
  }

  if (!GA_MEASUREMENT_ID) {
    console.info(
      '[TELAN TECH Analytics] VITE_GA_MEASUREMENT_ID is not configured. Running in debug console mode.'
    );
    return;
  }

  try {
    // Create script element for gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());

    // Check if debug mode should be enabled (DebugView in GA4)
    const isDebug =
      window.location.search.includes('debug_ga=true') ||
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1';

    gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false, // We control page view firing to avoid duplicates
      anonymize_ip: true,
      debug_mode: isDebug,
    });

    isInitialized = true;
    console.info(`[TELAN TECH Analytics] GA4 initialized with ID: ${GA_MEASUREMENT_ID} (Debug: ${isDebug})`);

    // Fire initial page view
    trackPageView(window.location.pathname + window.location.hash, document.title);
  } catch (err) {
    console.warn('[TELAN TECH Analytics] Failed to initialize Google Analytics:', err);
  }
}

/**
 * Generic event tracker wrapper
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;

  const consent = getStoredConsent();
  if (consent !== 'granted') {
    return;
  }

  // Debug logging
  if (window.location.search.includes('debug_ga=true')) {
    console.log(`[GA4 Event] ${eventName}:`, params);
  }

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track page views (prevents duplicate triggers)
 */
let lastTrackedPath = '';
export function trackPageView(path: string = window.location.pathname, title: string = document.title): void {
  if (path === lastTrackedPath) return;
  lastTrackedPath = path;

  trackEvent('page_view', {
    page_location: window.location.href,
    page_path: path,
    page_title: title,
  });
}

/**
 * Track scroll depth percentage (25, 50, 75, 100)
 */
const trackedDepths = new Set<number>();
export function trackScrollDepth(percent: number): void {
  if (trackedDepths.has(percent)) return;
  trackedDepths.add(percent);

  trackEvent('scroll_depth', {
    percent_scrolled: percent,
    page_location: window.location.href,
  });
}

/**
 * Track outbound external links
 */
export function trackOutboundLink(url: string, label: string): void {
  trackEvent('outbound_link_click', {
    link_url: url,
    link_text: label,
  });
}

/**
 * Track WhatsApp button clicks
 */
export function trackWhatsAppClick(sourceLocation: string): void {
  trackEvent('whatsapp_click', {
    event_category: 'Business Interaction',
    source_location: sourceLocation,
  });
}

/**
 * Track Email link clicks
 */
export function trackEmailClick(sourceLocation: string): void {
  trackEvent('email_click', {
    event_category: 'Business Interaction',
    source_location: sourceLocation,
  });
}

/**
 * Track LinkedIn profile clicks
 */
export function trackLinkedInClick(sourceLocation: string = 'general'): void {
  trackEvent('linkedin_click', {
    event_category: 'Social Interaction',
    source_location: sourceLocation,
  });
}

/**
 * Track Instagram profile clicks
 */
export function trackInstagramClick(sourceLocation: string = 'general'): void {
  trackEvent('instagram_click', {
    event_category: 'Social Interaction',
    source_location: sourceLocation,
  });
}

/**
 * Track Portfolio project view / modal inspection
 */
export function trackPortfolioView(projectId: string, projectTitle: string): void {
  trackEvent('portfolio_view', {
    event_category: 'Portfolio',
    project_id: projectId,
    project_title: projectTitle,
  });
}

/**
 * Track Service item view / modal inspection
 */
export function trackServiceView(serviceId: string, serviceTitle: string): void {
  trackEvent('service_view', {
    event_category: 'Services',
    service_id: serviceId,
    service_title: serviceTitle,
  });
}

/**
 * Track resume / brochure / rate card download
 */
export function trackResumeDownload(documentName: string): void {
  trackEvent('resume_download', {
    event_category: 'Documents',
    document_name: documentName,
  });
}

/**
 * Track primary contact CTA clicks
 */
export function trackContactCtaClick(ctaLocation: string): void {
  trackEvent('contact_cta_click', {
    event_category: 'Conversion',
    cta_location: ctaLocation,
  });
}
