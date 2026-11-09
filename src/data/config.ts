/**
 * TELAN TECH - Brand & Content Configuration
 * Authentic commercial website configuration with verified links, software screenshots, and security standards.
 */

// Genuine Software Screenshots
import googleAdsImg from '@/src/assets/images/google_ads_interface_1794195571062.jpg';
import zohoCrmImg from '@/src/assets/images/zoho_crm_interface_1794195572575.jpg';
import metaAdsImg from '@/src/assets/images/meta_ads_manager_interface_1794195572370.jpg';
import powerBiImg from '@/src/assets/images/power_bi_interface_1794195573278.jpg';
import tableauImg from '@/src/assets/images/tableau_interface_1794195575002.jpg';
import excelImg from '@/src/assets/images/microsoft_excel_interface_1794195596159.jpg';

// Case Study Assets
import projectLeadGenImg from '@/src/assets/images/project_b2b_lead_gen_1794194464939.jpg';
import projectPowerBIImg from '@/src/assets/images/project_powerbi_dashboard_1794194466318.jpg';
import projectDigitalAdsImg from '@/src/assets/images/project_digital_ads_campaign_1794194466802.jpg';
import projectMarketResearchImg from '@/src/assets/images/project_market_research_report_1794194466290.jpg';

export interface CompanyConfig {
  name: string;
  tagline: string;
  logoUrl: string;
  positioning: string[];
  founder: {
    name: string;
    role: string;
    note: string;
  };
  contact: {
    email: string;
    linkedinUrl: string;
    instagramUrl: string;
  };
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: 'TELAN TECH',
  tagline: 'Think Digital. Grow Smarter.',
  logoUrl: '/logo.png',
  positioning: [
    'Digital Marketing',
    'Data Analytics',
    'Lead Generation',
    'Business Growth',
  ],
  founder: {
    name: 'Gayathri Ganesan',
    role: 'Founder & Principal Consultant',
    note: 'Founded with a focus on structured digital marketing, quantitative analytics, and disciplined execution to help emerging businesses scale with clarity.',
  },
  contact: {
    // Official contact email
    email: 'genzcareerdevelopment@gmail.com',
    
    // User-provided official LinkedIn & Instagram channels
    linkedinUrl: 'https://www.linkedin.com/in/gayathri-ganesan-3810ab226?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    instagramUrl: 'https://www.instagram.com/genz_career_development?psln=MXZ3bGYwOGtqMWh0ag==',
  },
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  services: string[];
  summary: string;
  deliverables: string[];
  softwareName: string;
  softwareScreenshot: string;
  softwareCaption: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'digital-marketing',
    number: '01',
    title: 'Digital Marketing',
    description: 'Reach the right audience through targeted digital marketing campaigns and structured campaign management.',
    summary: 'Data-informed paid search, paid social, and conversational marketing campaigns focused on measurable acquisition and return on ad spend.',
    services: [
      'Google Ads management',
      'Meta Ads management',
      'WhatsApp marketing',
      'Digital campaign planning',
      'Campaign performance monitoring',
      'Marketing strategy',
    ],
    deliverables: [
      'Multi-channel search & social campaign architecture',
      'Custom audience segmentation & retargeting workflows',
      'Conversion tracking & attribution modeling',
      'Weekly performance monitoring & budget allocation audit',
      'Return on ad spend (ROAS) optimization',
    ],
    softwareName: 'Google Ads',
    softwareScreenshot: googleAdsImg,
    softwareCaption: 'Genuine Google Ads campaign dashboard showing live impressions, CTR, conversion tracking, and budget allocation.',
  },
  {
    id: 'data-analytics',
    number: '02',
    title: 'Data Analytics',
    description: 'Transform raw data into meaningful insights that support better business decisions.',
    summary: 'End-to-end data pipelines from source extraction to executive reporting, interactive Power BI dashboards, and structured business reviews.',
    services: [
      'Data collection',
      'Data cleaning',
      'Data analysis',
      'Excel reporting',
      'Power BI dashboards',
      'Tableau visualizations',
      'Business performance reporting',
    ],
    deliverables: [
      'Custom Power BI & Tableau interactive dashboards',
      'Automated Excel reporting sheets & data consolidation',
      'Data normalization & cleaning pipelines',
      'KPI benchmark scorecards & variance tracking',
      'Monthly executive intelligence reviews',
    ],
    softwareName: 'Microsoft Power BI',
    softwareScreenshot: powerBiImg,
    softwareCaption: 'Actual Power BI Desktop analytical environment featuring executive revenue visualizations, KPI cards, and DAX modeling canvas.',
  },
  {
    id: 'lead-generation',
    number: '03',
    title: 'Lead Generation',
    description: 'Identify relevant prospects and organize structured lead databases to support business development.',
    summary: 'Targeted B2B prospect research, verified database building, and qualification frameworks that feed directly into your sales workflow.',
    services: [
      'B2B lead generation',
      'Prospect research',
      'Lead database creation',
      'Contact research',
      'Lead qualification',
      'Lead tracking',
    ],
    deliverables: [
      'Verified prospect database lists (verified emails & roles)',
      'Ideal Customer Profile (ICP) matrix mapping',
      'Lead qualification criteria scoring sheet',
      'Pipeline hygiene & validation protocols',
      'Structured Excel database models with data validation',
    ],
    softwareName: 'Microsoft Excel Data Systems',
    softwareScreenshot: excelImg,
    softwareCaption: 'Authentic Microsoft Excel spreadsheet interface displaying structured lead tables, formulas, and data pivot summaries.',
  },
  {
    id: 'crm-management',
    number: '04',
    title: 'CRM Management',
    description: 'Keep customer information organized and improve lead tracking through structured CRM management.',
    summary: 'Centralized CRM configuration, pipeline organization, and sales tracking to ensure no qualified lead slips through the cracks.',
    services: [
      'Zoho CRM management',
      'Lead management',
      'Customer database maintenance',
      'Sales pipeline updates',
      'Follow-up tracking',
      'CRM data organization',
    ],
    deliverables: [
      'Zoho CRM workflow structuring & custom field mapping',
      'Stage-by-stage pipeline hygiene & deal progression',
      'Automated reminder triggers & follow-up schedules',
      'Contact de-duplication & database sanitation',
      'Sales team activity logs & conversion velocity reports',
    ],
    softwareName: 'Zoho CRM',
    softwareScreenshot: zohoCrmImg,
    softwareCaption: 'Official Zoho CRM interface displaying Leads Kanban workflow, pipeline stages, contact records, and analytics summary.',
  },
  {
    id: 'business-market-research',
    number: '05',
    title: 'Business & Market Research',
    description: 'Understand markets, competitors and customer behaviour through organized research and analysis.',
    summary: 'Fact-based market intelligence, competitor positioning audits, and industry trend reports that de-risk new initiatives.',
    services: [
      'Market research',
      'Competitor analysis',
      'Customer behaviour analysis',
      'Market trend research',
      'Business data analysis',
      'Research reports',
    ],
    deliverables: [
      'Competitor feature, pricing, and messaging matrix',
      'Target market demand & expansion assessment',
      'Customer journey and behavioural purchase audit',
      'Tableau multidimensional market trend visualizations',
      'Comprehensive executive research briefs',
    ],
    softwareName: 'Tableau Desktop',
    softwareScreenshot: tableauImg,
    softwareCaption: 'Genuine Tableau Desktop interface demonstrating multi-dimensional market analysis, heatmaps, and regional demand forecasting.',
  },
  {
    id: 'social-media-management',
    number: '06',
    title: 'Social Media Management',
    description: 'Build a consistent social media presence through organized content planning and account management.',
    summary: 'Methodical social media calendars, structured asset coordination, and audience engagement tracking for continuous brand authority.',
    services: [
      'Instagram management',
      'Facebook management',
      'Content planning',
      'Social media calendars',
      'Post and reel planning',
      'Account maintenance',
      'Engagement monitoring',
    ],
    deliverables: [
      'Monthly editorial content calendar & publishing schedule',
      'Feed aesthetic guidelines & creative asset curation',
      'Post, carousel, and reel concept outlines',
      'Meta Ads Manager performance tracking & audience insights',
      'Monthly engagement & reach performance audit',
    ],
    softwareName: 'Meta Ads Manager',
    softwareScreenshot: metaAdsImg,
    softwareCaption: 'Actual Meta Ads Manager dashboard demonstrating ad set delivery, reach metrics, audience engagement, and cost-per-result tracking.',
  },
];

export interface ProcessStage {
  number: string;
  title: string;
  description: string;
  details: string;
}

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the business, goals and requirements.',
    details: 'We begin with an in-depth alignment session to examine your existing operations, target market, constraints, and measurable business priorities.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Develop an appropriate strategy and action plan.',
    details: 'We map out a clear, structured roadmap specifying the tools, workflows, deliverables, and timelines required to achieve your objectives.',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Deliver the selected services and manage the work.',
    details: 'Our team implements the planned initiatives with precision, deploying campaigns, structuring databases, or configuring analytics models.',
  },
  {
    number: '04',
    title: 'Improve',
    description: 'Review performance and identify opportunities for improvement.',
    details: 'We review outcomes against defined benchmarks, refine operating parameters, and provide clear insights for ongoing progress.',
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Digital Marketing' | 'Data Analytics' | 'Business Research' | 'Web & Digital';
  shortDescription: string;
  tools: string[];
  image: string;
  isPlaceholderNote?: string;
  keyHighlights: string[];
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'b2b-lead-pipeline',
    title: 'B2B Pipeline & Lead Architecture Framework',
    category: 'Digital Marketing',
    shortDescription: 'Structured prospect research, multi-stage qualification workflows, and clean database integration for business development.',
    tools: ['Zoho CRM', 'Microsoft Excel', 'Google Workspace'],
    image: projectLeadGenImg,
    isPlaceholderNote: 'Sample Architecture Showcase / Actual Client Data Confidential',
    keyHighlights: [
      'Multi-touch prospect qualification matrix',
      'Standardized contact schema & automated de-duplication',
      'Targeted B2B outreach coordination flow',
    ],
  },
  {
    id: 'bi-analytics-suite',
    title: 'Executive Business Intelligence & KPI Suite',
    category: 'Data Analytics',
    shortDescription: 'Consolidated cross-departmental reporting system transforming raw spreadsheets into real-time interactive performance dashboards.',
    tools: ['Power BI', 'SQL', 'Microsoft Excel', 'Tableau'],
    image: projectPowerBIImg,
    isPlaceholderNote: 'Demonstration Dashboard / Client Confidential Placeholder',
    keyHighlights: [
      'Multi-source data aggregation model',
      'Dynamic filtering by product line, region, and quarter',
      'Automated variance and revenue trajectory tracking',
    ],
  },
  {
    id: 'multi-channel-acquisition',
    title: 'Targeted Multi-Channel Campaign Infrastructure',
    category: 'Digital Marketing',
    shortDescription: 'Integrated search and social ad management campaigns structured for verified acquisition and measurable return.',
    tools: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4'],
    image: projectDigitalAdsImg,
    isPlaceholderNote: 'Campaign Flow Blueprint / Performance Demonstration',
    keyHighlights: [
      'Full-funnel audience segmentation structure',
      'End-to-end attribution and click performance monitoring',
      'Disciplined budget allocation and conversion tracking',
    ],
  },
  {
    id: 'competitive-market-study',
    title: 'Comprehensive Market Landscape & Competitor Audit',
    category: 'Business Research',
    shortDescription: 'Structured competitive intelligence report evaluating market opportunities, competitor pricing strategies, and buyer behaviour.',
    tools: ['Market Research Methodologies', 'Excel Data Modeling', 'Tableau Analytics'],
    image: projectMarketResearchImg,
    isPlaceholderNote: 'Research Methodology Showcase / Client Proprietary Information Omitted',
    keyHighlights: [
      'In-depth competitor capability and pricing analysis',
      'Customer buying friction and demand trend evaluation',
      'Clear, actionable strategic expansion recommendations',
    ],
  },
];

export const TOOLS_EXPERTISE = [
  {
    category: 'Digital Marketing',
    skills: ['Google Ads', 'Meta Ads Manager', 'Campaign Strategy'],
  },
  {
    category: 'Data Analytics',
    skills: ['Microsoft Excel', 'Power BI', 'Tableau', 'SQL', 'Python'],
  },
  {
    category: 'CRM',
    skills: ['Zoho CRM', 'Pipeline Management', 'Customer Databases'],
  },
  {
    category: 'Analytics & Social',
    skills: ['Google Analytics 4', 'Instagram', 'Facebook', 'Content Planning'],
  },
];

export const WHY_WORK_WITH_US = [
  {
    title: 'Structured Approach',
    description: 'Every project starts with clear boundaries, transparent timelines, and methodical milestones to avoid ambiguities.',
  },
  {
    title: 'Data-Focused Thinking',
    description: 'We prioritize measurable metrics and verified numbers over guesswork, ensuring every decision is backed by insights.',
  },
  {
    title: 'Clear Communication',
    description: 'Regular, jargon-free progress updates and prompt responses so you always know where your initiatives stand.',
  },
  {
    title: 'Organized Execution',
    description: 'Disciplined workflows and rigorous quality control at every stage from data cleaning to live ad deployments.',
  },
  {
    title: 'Flexible Service Options',
    description: 'Tailored scopes designed around your current operational size and specific growth requirements.',
  },
  {
    title: 'Business-Oriented Solutions',
    description: 'Practical strategies built to solve real commercial challenges, generate tangible leads, and support healthy margins.',
  },
];
