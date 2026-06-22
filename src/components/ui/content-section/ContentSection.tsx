import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { JSX } from 'react'

import { ContentCard } from '@/components/ui/content-card'
import { ContentImage } from '@/components/ui/content-image'
import { DetailLink } from '@/components/ui/detail-link'
import { PAGE_SUBHEADING_SIZE, PAGE_TEXT_SIZE } from '@/theme/theme'
import { resolveSize, resolveSubHeadingVariant, resolveTextVariant } from '@/theme/tokens'
import type { ComponentSize } from '@/types'

interface ContentSectionSubsection {
  label?: string
  imageSrc: string
  imageAlt: string
  description: string
}

interface ContentSectionProps {
  id: string
  title: string
  imageSrc?: string
  imageAlt?: string
  description?: string
  subsections?: ContentSectionSubsection[]
  size?: ComponentSize
  detailRoute?: string
  detailLinkLabel?: string
  onNavigate?: () => void
}

function ContentSectionBody({
  imageSrc,
  imageAlt,
  description,
  label,
  size,
  isFirst = false,
}: ContentSectionSubsection & { size: ComponentSize; isFirst?: boolean }): JSX.Element {
  const theme = useTheme()

  return (
    <Box sx={{ mt: isFirst ? 0 : 4 }}>
      {label ? (
        <Typography variant={resolveSubHeadingVariant(PAGE_SUBHEADING_SIZE)} sx={{ color: 'brandGraphite' }}>
          {label}
        </Typography>
      ) : null}
      <ContentImage src={imageSrc} alt={imageAlt} size={size} />
      <Typography
        variant={resolveTextVariant(PAGE_TEXT_SIZE)}
        sx={{
          mt: 2,
          color: 'text.primary',
          maxWidth: resolveSize(theme.layout.proseMaxWidth, size),
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}

export function ContentSection({
  id,
  title,
  imageSrc,
  imageAlt,
  description,
  subsections,
  size = 'medium',
  detailRoute,
  detailLinkLabel,
  onNavigate,
}: ContentSectionProps): JSX.Element {
  const interactive = Boolean(detailRoute && onNavigate)

  return (
    <ContentCard id={id} size={size} interactive={interactive} onActivate={onNavigate}>
      <Typography variant={resolveSubHeadingVariant(PAGE_SUBHEADING_SIZE)} sx={{ color: 'brandGraphite' }}>
        {title}
      </Typography>
      {subsections ? (
        subsections.map((subsection, index) => (
          <ContentSectionBody
            key={subsection.label ?? subsection.imageSrc}
            size={size}
            isFirst={index === 0}
            {...subsection}
          />
        ))
      ) : (
        <ContentSectionBody
          size={size}
          imageSrc={imageSrc ?? ''}
          imageAlt={imageAlt ?? ''}
          description={description ?? ''}
        />
      )}
      {detailRoute && detailLinkLabel ? (
        <DetailLink
          to={detailRoute}
          onClick={(event) => event.stopPropagation()}
        >
          {detailLinkLabel}
        </DetailLink>
      ) : null}
    </ContentCard>
  )
}
