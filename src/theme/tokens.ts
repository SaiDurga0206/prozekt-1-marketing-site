import type { TypographyProps } from '@mui/material/Typography'

import { typographyTokens } from '@/theme/typography'
import type { ComponentSize } from '@/types/ui.types'

export const layoutTokens = {
  pageMaxWidth: {
    small: 960,
    medium: 1240,
    large: 1440,
  },
  proseMaxWidth: {
    small: 720,
    medium: 920,
    large: 1080,
  },
  imageMaxWidth: {
    small: 560,
    medium: 820,
    large: 1000,
  },
  imageHeight: {
    small: { xs: 160, sm: 200, md: 240 },
    medium: { xs: 210, sm: 265, md: 320 },
    large: { xs: 260, sm: 330, md: 400 },
  },
  pagePaddingX: {
    small: { xs: 2, sm: 2.5, md: 3 },
    medium: { xs: 2, sm: 3, md: 4, lg: 6 },
    large: { xs: 3, sm: 4, md: 5, lg: 8 },
  },
  pagePaddingY: {
    small: { xs: 3, sm: 3.5, md: 4 },
    medium: { xs: 4, sm: 4.5, md: 5 },
    large: { xs: 5, sm: 6, md: 7 },
  },
  cardPadding: {
    small: { xs: 1.75, sm: 1.875, md: 2 },
    medium: { xs: 2.25, sm: 2.5, md: 3 },
    large: { xs: 3, sm: 3.5, md: 4 },
  },
  sectionStackSpacing: {
    small: 2,
    medium: 3,
    large: 4,
  },
  contentStackSpacing: {
    small: 3,
    medium: 4,
    large: 5,
  },
  textStackSpacing: {
    small: 2,
    medium: 2.5,
    large: 3,
  },
  navChipGap: {
    small: 0.75,
    medium: 1,
    large: 1.25,
  },
  headerSpacing: {
    small: { overlineToTitle: 0.75, titleToBody: 1.5, bodyToNav: 2 },
    medium: { overlineToTitle: 1, titleToBody: 2, bodyToNav: 2.5 },
    large: { overlineToTitle: 1.25, titleToBody: 2.5, bodyToNav: 3 },
  },
  borderTransition: 'border-color 140ms ease',
  backLinkBottomSpacing: {
    small: 1.5,
    medium: 2,
    large: 2.5,
  },
  blockTitleToBodySpacing: {
    small: 1.25,
    medium: 1.5,
    large: 2,
  },
} as const

export type LayoutTokens = typeof layoutTokens

export function resolveSize<T extends Record<ComponentSize, unknown>>(
  map: T,
  size: ComponentSize = 'medium',
): T[ComponentSize] {
  return map[size]
}

export function resolveHeadingVariant(
  size: ComponentSize = 'large',
): NonNullable<TypographyProps['variant']> {
  return typographyTokens.headingVariant[size]
}

export function resolveSubHeadingVariant(
  size: ComponentSize = 'medium',
): NonNullable<TypographyProps['variant']> {
  return typographyTokens.headingVariant[size]
}

export function resolveTextVariant(
  size: ComponentSize = 'small',
): NonNullable<TypographyProps['variant']> {
  return typographyTokens.textVariant[size]
}
