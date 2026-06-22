import type { JSX } from 'react'

import { PageWrapper } from '@/components/layout'
import { MarketingShowcase } from '@/components/sections'

export function HomePage(): JSX.Element {
  return (
    <PageWrapper>
      <MarketingShowcase />
    </PageWrapper>
  )
}
