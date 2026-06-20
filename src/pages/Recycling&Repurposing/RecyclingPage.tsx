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
import { RECYCLING_FOCUS_AREAS } from '@/constants/RECYCLING_FOCUS_AREAS_DATA'
import { useScrollToHash, scrollToSection } from '@/hooks/useScrollToHash'
import { PAGE_SUBHEADING_SIZE, PAGE_TEXT_SIZE } from '@/theme/theme'
import { resolveSize, resolveSubHeadingVariant, resolveTextVariant } from '@/theme/tokens'

export function RecyclingPage(): JSX.Element {
  const theme = useTheme()
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
          <ContentCard size="medium">
            <Typography variant="overline" sx={{ color: 'brandGold', letterSpacing: '0.14em' }}>
              Our Goal
            </Typography>
            <Typography
              variant={resolveSubHeadingVariant(PAGE_SUBHEADING_SIZE)}
              sx={{ mt: 1, color: 'brandGraphite' }}
            >
              Recover, repurpose, and reintegrate useful resources.
            </Typography>
            <Typography
              variant={resolveTextVariant(PAGE_TEXT_SIZE)}
              sx={{
                mt: 2,
                color: 'text.primary',
                maxWidth: resolveSize(theme.layout.proseMaxWidth, 'medium'),
              }}
            >
              To create practical pathways for recovering, repurposing, and reintegrating resources that would
              otherwise become waste, supporting more efficient and sustainable material use.
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
