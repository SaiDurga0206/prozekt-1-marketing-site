export interface ContentSubsection {
  label?: string
  imageSrc: string
  imageAlt: string
  description: string
}

export interface MushroomVariety {
  id: string
  name: string
  imageSrc: string
  imageAlt: string
  description: string
}

export interface PoultryVariety {
  id: string
  name: string
  imageSrc: string
  imageAlt: string
  description: string
}

export interface SustainabilityFocusArea {
  id: string
  title: string
  imageSrc: string
  imageAlt: string
  description: string
}

export interface RecyclingFocusArea {
  id: string
  title: string
  imageSrc: string
  imageAlt: string
  description: string
}

export interface OperationalArea {
  id: string
  title: string
  description: string
}

export interface PageTag {
  id: string
  label: string
}

export interface OrganicsAreaSubsection extends ContentSubsection {}

export interface OrganicsArea {
  id: string
  name: string
  imageSrc?: string
  imageAlt?: string
  description?: string
  subsections?: OrganicsAreaSubsection[]
  detailLinkLabel?: string
}
