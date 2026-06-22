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
import { SUSTAINABILITY_FOCUS_AREAS } from '@/constants'
import { useScrollToHash, scrollToSection } from '@/hooks'
import { PAGE_SUBHEADING_SIZE } from '@/theme/theme'
import { resolveSubHeadingVariant } from '@/theme/tokens'

export function SustainabilityPage(): JSX.Element {
  useScrollToHash()

  return (
    <PageWrapper>
      <PageContainer size="medium">
        <BackToHome />

        <PageHeader
          overline="PROZEKT-1 SUSTAINABILITY SYSTEMS"
          title="Practical Sustainability Systems"
          description="Prozekt-1 Sustainability Systems is focused on developing practical environmental management and sustainability solutions for productions, events, agricultural operations, and other resource-intensive activities. The division is being structured to support organizations in reducing environmental impact while maintaining operational efficiency and project objectives."
        >
          <Stack spacing={2}>
            <UnderDevelopmentChip />
            <PageNavChipRow size="medium">
              {SUSTAINABILITY_FOCUS_AREAS.map((area) => (
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
            heading="Responsible operations without compromising project requirements."
            body="To develop practical sustainability systems that help organizations reduce environmental impact, improve resource efficiency, and operate more responsibly without compromising operational requirements."
          />
        </Box>

        <Typography
          variant={resolveSubHeadingVariant(PAGE_SUBHEADING_SIZE)}
          sx={{ mb: 2, color: 'brandGraphite' }}
        >
          Operational Focus Areas
        </Typography>

        <ContentStack size="medium">
          {SUSTAINABILITY_FOCUS_AREAS.map((area) => (
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
