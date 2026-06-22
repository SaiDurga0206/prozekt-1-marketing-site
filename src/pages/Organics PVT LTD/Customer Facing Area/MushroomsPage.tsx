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
import { MUSHROOM_VARIETIES } from '@/constants'
import { useScrollToHash, scrollToSection } from '@/hooks'


export function MushroomsPage(): JSX.Element {
  useScrollToHash()

  return (
    <PageWrapper>
      <PageContainer size="medium">
        <BackToOrganics />

        <PageHeader
          overline="PROZEKT-1 ORGANICS"
          title="Specialty Mushrooms"
        >
          <PageNavChipRow size="medium">
            {MUSHROOM_VARIETIES.map((variety) => (
              <PageNavChip
                key={variety.id}
                label={variety.name}
                onClick={() => scrollToSection(variety.id)}
              />
            ))}
          </PageNavChipRow>
        </PageHeader>

        <ContentStack size="medium">
          {MUSHROOM_VARIETIES.map((variety) => (
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
