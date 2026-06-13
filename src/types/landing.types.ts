export interface LandingStat {
  id: string
  label: string
  value: string
}

export interface LandingVariant {
  id: string
  name: string
  eyebrow: string
  headline: string
  subheadline: string
  primaryCta: string
  secondaryCta: string
  heroImageUrl: string
  highlightTitle: string
  highlightBody: string
  stats: LandingStat[]
}
