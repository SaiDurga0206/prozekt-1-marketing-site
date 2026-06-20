import type { JSX } from 'react'

import { PageWrapper } from '@/components/layout/page-wrapper'
import { BackToOrganics } from '@/components/ui/back-link'
import { ContentSection } from '@/components/ui/content-section'
import { ContentStack } from '@/components/ui/content-stack'
import { PageContainer } from '@/components/ui/page-container'
import { PageHeader } from '@/components/ui/page-header'
import { PageNavChip, PageNavChipRow } from '@/components/ui/page-nav-chip'
import { POULTRY_VARIETIES } from '@/constants/POULTRY_VARIETIES_DATA'
import { useScrollToHash, scrollToSection } from '@/hooks/useScrollToHash'


export function PoultryPage(): JSX.Element {
  useScrollToHash()

  return (
    <PageWrapper>
      <PageContainer size="medium">
        <BackToOrganics />

        <PageHeader overline="PROZEKT-1 ORGANICS" title="Free Range Poultry">
          <PageNavChipRow size="medium">
            {POULTRY_VARIETIES.map((variety) => (
              <PageNavChip
                key={variety.id}
                label={variety.name}
                onClick={() => scrollToSection(variety.id)}
              />
            ))}
          </PageNavChipRow>
        </PageHeader>

        <ContentStack size="medium">
          {POULTRY_VARIETIES.map((variety) => (
            <ContentSection
              key={variety.id}
              id={variety.id}
              title={variety.name}
              imageSrc={variety.imageSrc}
              imageAlt={variety.imageAlt}
              description={variety.description}
              size="medium"
            />
          ))}
        </ContentStack>
      </PageContainer>
    </PageWrapper>
  )
}
