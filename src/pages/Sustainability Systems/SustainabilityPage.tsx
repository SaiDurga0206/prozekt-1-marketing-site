import { Box, Chip, Stack, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import type { JSX } from 'react'

import { PageWrapper } from '@/components/layout/page-wrapper'
import { BackToHome } from '@/components/ui/back-link'
import { ContentCard } from '@/components/ui/content-card'
import { ContentSection } from '@/components/ui/content-section'
import { ContentStack } from '@/components/ui/content-stack'
import { PageContainer } from '@/components/ui/page-container'
import { PageHeader } from '@/components/ui/page-header'
import { PageNavChip, PageNavChipRow } from '@/components/ui/page-nav-chip'
import { SUSTAINABILITY_FOCUS_AREAS } from '@/constants/SUSTAINABILITY_FOCUS_AREAS_DATA'
import { useScrollToHash, scrollToSection } from '@/hooks/useScrollToHash'
import { PAGE_SUBHEADING_SIZE, PAGE_TEXT_SIZE } from '@/theme/theme'
import { resolveSize, resolveSubHeadingVariant, resolveTextVariant } from '@/theme/tokens'

export function SustainabilityPage(): JSX.Element {
  const theme = useTheme()
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
            <Chip
              label="Under Development"
              sx={{
                alignSelf: 'flex-start',
                border: '1px solid',
                borderColor: 'brandGold',
                bgcolor: (theme) => alpha(theme.palette.brandGold, 0.16),
                color: 'brandGraphite',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            />
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
          <ContentCard size="medium">
            <Typography variant="overline" sx={{ color: 'brandGold', letterSpacing: '0.14em' }}>
              Our Goal
            </Typography>
            <Typography
              variant={resolveSubHeadingVariant(PAGE_SUBHEADING_SIZE)}
              sx={{ mt: 1, color: 'brandGraphite' }}
            >
              Responsible operations without compromising project requirements.
            </Typography>
            <Typography
              variant={resolveTextVariant(PAGE_TEXT_SIZE)}
              sx={{
                mt: 2,
                color: 'text.primary',
                maxWidth: resolveSize(theme.layout.proseMaxWidth, 'medium'),
              }}
            >
              To develop practical sustainability systems that help organizations reduce environmental impact,
              improve resource efficiency, and operate more responsibly without compromising operational requirements.
            </Typography>
          </ContentCard>
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
