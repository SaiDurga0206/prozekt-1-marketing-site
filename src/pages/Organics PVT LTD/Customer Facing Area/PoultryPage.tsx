import type { JSX } from 'react'

import { PageWrapper } from '@/components/layout'
import {
  BackToOrganics,
  ContentSection,
  ContentStack,
  PageContainer,
  PageHeader,
  PageNavChip,
  PageNavChipRow,
} from '@/components/ui'
import { POULTRY_VARIETIES } from '@/constants'
import { useScrollToHash, scrollToSection } from '@/hooks'


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
