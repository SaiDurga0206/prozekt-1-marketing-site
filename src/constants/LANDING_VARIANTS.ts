import mushroomsHero from '@/assets/Home/prozekt1_background_art.svg'
import type { LandingVariant } from '@/types'

export const LANDING_SECTION_LABEL = 'HUMAN IMPACT LANDING LAYOUT'
export const SELECTED_LANDING_VARIANT_ID = 'human-impact'

export const LANDING_VARIANTS: LandingVariant[] = [
  {
    id: 'precision-grid',
    name: 'Design 01 / Precision Grid',
    eyebrow: 'INDUSTRIAL MINIMALISM',
    headline: 'Sustainable systems engineered with measurable precision.',
    subheadline:
      'A clean, geometry-forward layout that frames the group as a systems architect for circular growth.',
    primaryCta: 'Explore Divisions',
    secondaryCta: 'View Impact',
    heroImageUrl:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1800&q=80',
    highlightTitle: 'Operations Intelligence',
    highlightBody:
      'Unified planning for organics, ethical systems, and material repurposing across industrial partners.',
    stats: [
      { id: 's1', label: 'ACTIVE NETWORKS', value: '42' },
      { id: 's2', label: 'MATERIAL RECOVERY', value: '87%' },
      { id: 's3', label: 'PARTNER FACILITIES', value: '18' },
    ],
  },
  {
    id: 'editorial-hero',
    name: 'Design 02 / Editorial Hero',
    eyebrow: 'MARKETING NARRATIVE',
    headline: 'From resource stream to regenerative value chain.',
    subheadline:
      'Story-led messaging with strong imagery and concise metrics for campaign and investor pages.',
    primaryCta: 'Read Story',
    secondaryCta: 'See Programs',
    heroImageUrl:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1800&q=80',
    highlightTitle: 'Narrative-Led Positioning',
    highlightBody:
      'Designed for trust-building: clear outcomes, transparent process, and future-focused sustainability messaging.',
    stats: [
      { id: 's1', label: 'CAMPAIGN REACH', value: '2.4M' },
      { id: 's2', label: 'SUPPLIER TRACEABILITY', value: '96%' },
      { id: 's3', label: 'CERTIFIED PROGRAMS', value: '11' },
    ],
  },
  {
    id: 'dark-systems',
    name: 'Design 03 / Dark Systems',
    eyebrow: 'TECHNICAL AUTHORITY',
    headline: 'Built for data-backed sustainability execution.',
    subheadline:
      'A high-contrast, premium direction that emphasizes control, governance, and operations reliability.',
    primaryCta: 'Open Dashboard',
    secondaryCta: 'Download Brief',
    heroImageUrl:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=80',
    highlightTitle: 'Control Tower Experience',
    highlightBody:
      'Designed for enterprise stakeholders who need confidence in compliance, consistency, and audit-readiness.',
    stats: [
      { id: 's1', label: 'AUDIT READINESS', value: '100%' },
      { id: 's2', label: 'PROCESS COMPLIANCE', value: '98.7%' },
      { id: 's3', label: 'TRACKED NODES', value: '1,280' },
    ],
  },
  {
    id: 'human-impact',
    name: 'Design 04 / Human Impact',
    eyebrow: 'GROUP OVERVIEW',
    headline: 'Ecosystem Architecture: Organics, Sustainability Systems, Recycling & Repurposing.',
    subheadline:
      'A multidisciplinary sustainability-focused group operating across biological production systems, ethical sustainability management, and circular resource infrastructure.',
    primaryCta: 'Explore Divisions',
    secondaryCta: 'View Operational Areas',
    heroImageUrl: mushroomsHero,
    highlightTitle: 'Integrated Sustainability Systems',
    highlightBody:
      'Building sustainable systems through biological intelligence, ethical infrastructure, and circular resource engineering.',
    stats: [
      { id: 's1', label: 'CORE DIVISIONS', value: '03' },
      { id: 's2', label: 'BRAND POSITIONING PILLARS', value: '05' },
      { id: 's3', label: 'CONNECTED OPERATIONAL ECOSYSTEM', value: '01' },
    ],
  },
  {
    id: 'campaign-conversion',
    name: 'Design 05 / Campaign Conversion',
    eyebrow: 'LEAD GENERATION',
    headline: 'A conversion-focused landing page for growth campaigns.',
    subheadline:
      'Focused on marketing outcomes with visual proof, concise value props, and stronger call-to-action emphasis.',
    primaryCta: 'Book Consultation',
    secondaryCta: 'Request Deck',
    heroImageUrl:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=80',
    highlightTitle: 'Performance-First Structure',
    highlightBody:
      'Built to convert stakeholder interest into qualified inquiries for partnerships, strategy, and deployment.',
    stats: [
      { id: 's1', label: 'INBOUND LEADS', value: '+48%' },
      { id: 's2', label: 'CTA ENGAGEMENT', value: '22.4%' },
      { id: 's3', label: 'CONVERSION TIME', value: '-35%' },
    ],
  },
]
