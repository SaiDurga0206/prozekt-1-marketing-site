import type { JSX } from 'react'
import { useNavigate } from 'react-router-dom'

import { PageWrapper } from '@/components/layout/page-wrapper'
import { BackToHome } from '@/components/ui/back-link'
import { ContentSection } from '@/components/ui/content-section'
import { ContentStack } from '@/components/ui/content-stack'
import { PageContainer } from '@/components/ui/page-container'
import { PageHeader } from '@/components/ui/page-header'
import { PageNavChip, PageNavChipRow } from '@/components/ui/page-nav-chip'
import { ORGANICS_AREA_ROUTES, ORGANICS_AREAS } from '@/constants/ORGANICS_AREAS_DATA'
import { useScrollToHash, scrollToSection } from '@/hooks/useScrollToHash'


export function OrganicsPage(): JSX.Element {
  const navigate = useNavigate()
  useScrollToHash()

  return (
    <PageWrapper>
      <PageContainer size="medium">
        <BackToHome />

        <PageHeader
          overline="PROZEKT-1 ORGANICS"
          title="Customer-Facing Areas"
        >
          <PageNavChipRow size="medium">
            {ORGANICS_AREAS.map((area) => (
              <PageNavChip
                key={area.id}
                label={area.name}
                onClick={() => scrollToSection(area.id)}
              />
            ))}
          </PageNavChipRow>
        </PageHeader>

        <ContentStack size="medium">
          {ORGANICS_AREAS.map((area) => {
            const detailRoute = ORGANICS_AREA_ROUTES[area.id]

            return (
              <ContentSection
                key={area.id}
                id={area.id}
                title={area.name}
                imageSrc={area.imageSrc}
                imageAlt={area.imageAlt}
                description={area.description}
                subsections={area.subsections}
                size="medium"
                detailRoute={detailRoute}
                detailLinkLabel={area.detailLinkLabel}
                onNavigate={detailRoute ? () => navigate(detailRoute) : undefined}
              />
            )
          })}
        </ContentStack>
      </PageContainer>
    </PageWrapper>
  )
}
