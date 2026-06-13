export interface OperationalArea {
  id: string
  title: string
  description: string
}

export const OPERATIONAL_AREAS: OperationalArea[] = [
  {
    id: 'biological-production',
    title: 'Biological Production Systems',
    description:
      'Controlled-environment agriculture, mushroom cultivation, hydroponics, aeroponics, microgreens, and sustainable food production systems.',
  },
  {
    id: 'functional-food',
    title: 'Functional Food & Fresh Produce Systems',
    description:
      'Development and supply of nutrient-focused fresh produce, ready-to-eat foods, biological food products, and controlled cold-chain compatible products.',
  },
  {
    id: 'environmental-sustainability',
    title: 'Environmental & Sustainability Systems',
    description:
      'Environmental planning, sustainability implementation, ecological impact reduction, and operational resource optimization systems.',
  },
  {
    id: 'ethical-production',
    title: 'Ethical Production & Animal Welfare Systems',
    description:
      'Ethical animal handling, production-site supervision, environmental coordination, and welfare-focused operational management for productions and large-scale activities.',
  },
  {
    id: 'sustainable-events',
    title: 'Sustainable Event & Production Infrastructure',
    description:
      'Operational sustainability systems for films, public gatherings, outdoor productions, temporary infrastructure environments, and environmentally sensitive locations.',
  },
  {
    id: 'circular-resource',
    title: 'Circular Resource & Waste Recovery Systems',
    description:
      'Waste segregation, recycling operations, material recovery, repurposing systems, and circular-use infrastructure development.',
  },
  {
    id: 'controlled-cultivation',
    title: 'Controlled Cultivation Infrastructure',
    description:
      'Design and operation of precision-controlled cultivation environments optimized for biological consistency, resource efficiency, and scalable agricultural output.',
  },
  {
    id: 'resource-optimization',
    title: 'Resource Optimization & Environmental Integration',
    description:
      'Systems focused on reducing operational inefficiencies, improving material utilization, and integrating environmentally responsible alternatives into real-world operations.',
  },
]
