export interface RecyclingFocusArea {
  id: string
  title: string
  imageSrc: string
  imageAlt: string
  description: string
}

export const RECYCLING_FOCUS_AREAS: RecyclingFocusArea[] = [
  {
    id: 'material-recovery',
    title: 'Material Recovery',
    imageSrc:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Sorted recyclable materials prepared for recovery',
    description:
      'Collection and processing of recoverable materials for reuse, recycling, or value-added applications.',
  },
  {
    id: 'waste-segregation-systems',
    title: 'Waste Segregation Systems',
    imageSrc:
      'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Structured recycling bins for waste segregation',
    description:
      'Development of structured waste handling systems that improve recovery rates and reduce unnecessary disposal.',
  },
  {
    id: 'resource-repurposing',
    title: 'Resource Repurposing',
    imageSrc:
      'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Repurposed materials arranged for reuse',
    description:
      'Identification of opportunities to convert discarded materials into useful products, inputs, or functional resources.',
  },
  {
    id: 'agricultural-by-product-utilization',
    title: 'Agricultural By-Product Utilization',
    imageSrc:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Agricultural residues in a field ready for value recovery',
    description:
      'Exploration of practical uses for agricultural residues and biological waste streams through value recovery approaches.',
  },
  {
    id: 'circular-resource-integration',
    title: 'Circular Resource Integration',
    imageSrc:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Renewable infrastructure representing circular resource integration',
    description:
      'Supporting the transition from linear consumption models toward more resource-efficient operational systems.',
  },
]
