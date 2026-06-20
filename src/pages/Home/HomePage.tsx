import type { JSX } from 'react'

import { PageWrapper } from '@/components/layout/page-wrapper'
import { MarketingShowcase } from '@/components/sections/marketing-showcase'

export function HomePage(): JSX.Element {
  return (
    <PageWrapper>
      <MarketingShowcase />
    </PageWrapper>
  )
}
