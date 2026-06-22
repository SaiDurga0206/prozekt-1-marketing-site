import { Box, Stack, Typography } from '@mui/material'
import type { JSX } from 'react'

import { PageWrapper } from '@/components/layout'
import {
  BackToHome,
  ContentSection,
  ContentStack,
  GoalCard,
  PageContainer,
  PageHeader,
  PageNavChip,
  PageNavChipRow,
  UnderDevelopmentChip,
} from '@/components/ui'
import { RECYCLING_FOCUS_AREAS } from '@/constants'
import { useScrollToHash, scrollToSection } from '@/hooks'
import { PAGE_SUBHEADING_SIZE } from '@/theme/theme'
import { resolveSubHeadingVariant } from '@/theme/tokens'

export function RecyclingPage(): JSX.Element {
  useScrollToHash()

  return (
    <PageWrapper>
      <PageContainer size="medium">
        <BackToHome />

        <PageHeader
          overline="PROZEKT-1 RECYCLING & REPURPOSING"
          title="Waste Recovery, Reuse, and Resource Reintegration"
          description="Prozekt-1 Recycling & Repurposing is focused on developing waste recovery, material reuse, and resource reintegration systems aimed at reducing landfill dependency and extending the useful life of materials through practical recycling and repurposing applications."
        >
          <Stack spacing={2}>
            <UnderDevelopmentChip />
            <PageNavChipRow size="medium">
              {RECYCLING_FOCUS_AREAS.map((area) => (
                <PageNavChip
                  key={area.id}
                  label={area.title}
                  onClick={() => scrollToSection(area.id)}
                />
              ))}
            </PageNavChipRow>
          </Stack>
        </PageHeader>

        <Box sx={{ my: { xs: 4, md: 5 } }}>
          <GoalCard
            heading="Recover, repurpose, and reintegrate useful resources."
            body="To create practical pathways for recovering, repurposing, and reintegrating resources that would otherwise become waste, supporting more efficient and sustainable material use."
          />
        </Box>

        <Typography
          variant={resolveSubHeadingVariant(PAGE_SUBHEADING_SIZE)}
          sx={{ mb: 2, color: 'brandGraphite' }}
        >
          Operational Focus Areas
        </Typography>

        <ContentStack size="medium">
          {RECYCLING_FOCUS_AREAS.map((area) => (
            <ContentSection
              key={area.id}
              id={area.id}
              title={area.title}
              imageSrc={area.imageSrc}
              imageAlt={area.imageAlt}
              description={area.description}
              size="medium"
            />
          ))}
        </ContentStack>
      </PageContainer>
    </PageWrapper>
  )
}
