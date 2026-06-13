import type { ThemeOptions } from '@mui/material/styles'
import type { TypographyProps } from '@mui/material/Typography'

import type { ComponentSize } from '@/types/ui.types'

export const DISPLAY_FONT_FAMILY = 'Arial, "Helvetica Neue", sans-serif'
export const BODY_FONT_FAMILY = 'Arial, "Helvetica Neue", sans-serif'

/** Default stack; kept for backward-compatible imports */
export const FONT_FAMILY = BODY_FONT_FAMILY

/** Page-level size constants — consumed by components via resolveSize / resolveHeadingVariant */
export const PAGE_HEADING_SIZE = 'medium' as const satisfies ComponentSize
export const PAGE_SUBHEADING_SIZE = 'medium' as const satisfies ComponentSize
export const PAGE_TEXT_SIZE = 'small' as const satisfies ComponentSize

/**
 * Typography design tokens — single source of truth for font sizes across the project.
 * Components should reference these values (or PAGE_*_SIZE constants) instead of
 * hard-coding raw rem values in page files.
 */
export const typographyTokens = {
  fontFamily: BODY_FONT_FAMILY,
  displayFontFamily: DISPLAY_FONT_FAMILY,
  headingVariant: {
    small: 'h6',
    medium: 'h4',
    large: 'h2',
  },
  textVariant: {
    small: 'body2',
    medium: 'body1',
    large: 'body1',
  },
  headingFontSize: {
    small: '0.75rem',
    medium: '1rem',   // header medium — used for all heading variants
    large: '1rem',    // compressed to match medium; avoids oversized hero text
  },
  subHeadingFontSize: {
    small: '0.75rem',
    medium: '1rem',
    large: '1.25rem',
  },
  navFontSize: {
    small: '0.6875rem',
    medium: '0.75rem',
    large: '0.9375rem',
  },
  textFontSize: {
    small: '0.8125rem',
    medium: '0.9375rem',
    large: '1rem',
  },
  displayFontSize: { xs: '2.5rem', sm: '4rem', md: '6rem' },
} as const satisfies {
  fontFamily: string
  displayFontFamily: string
  headingVariant: Record<ComponentSize, NonNullable<TypographyProps['variant']>>
  textVariant: Record<ComponentSize, NonNullable<TypographyProps['variant']>>
  headingFontSize: Record<ComponentSize, string | Record<string, string>>
  subHeadingFontSize: Record<ComponentSize, string>
  navFontSize: Record<ComponentSize, string>
  textFontSize: Record<ComponentSize, string>
  displayFontSize: Record<string, string>
}

/**
 * MUI theme typography — applies Arial bold globally.
 * Heading variants use headingFontSize.medium (1rem).
 * Body variants use textFontSize.small (0.75rem).
 * No page or component should override fontSize with raw values.
 */
export const typography: NonNullable<ThemeOptions['typography']> = {
  fontFamily: BODY_FONT_FAMILY,
  h1: {
    fontFamily: DISPLAY_FONT_FAMILY,
    fontSize: typographyTokens.headingFontSize.medium,
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '0.01em',
  },
  h2: {
    fontFamily: DISPLAY_FONT_FAMILY,
    fontSize: typographyTokens.headingFontSize.medium,
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '0.01em',
  },
  h3: {
    fontFamily: DISPLAY_FONT_FAMILY,
    fontSize: typographyTokens.headingFontSize.medium,
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h4: {
    fontFamily: DISPLAY_FONT_FAMILY,
    fontSize: typographyTokens.headingFontSize.medium,
    fontWeight: 700,
    lineHeight: 1.25,
  },
  h5: {
    fontFamily: DISPLAY_FONT_FAMILY,
    fontSize: typographyTokens.headingFontSize.small,
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h6: {
    fontFamily: DISPLAY_FONT_FAMILY,
    fontSize: typographyTokens.headingFontSize.small,
    fontWeight: 700,
    lineHeight: 1.35,
  },
  body1: {
    fontFamily: BODY_FONT_FAMILY,
    fontSize: typographyTokens.textFontSize.small,
    fontWeight: 700,
    lineHeight: 1.65,
  },
  body2: {
    fontFamily: BODY_FONT_FAMILY,
    fontSize: typographyTokens.textFontSize.small,
    fontWeight: 700,
    lineHeight: 1.65,
  },
  button: {
    fontFamily: BODY_FONT_FAMILY,
    fontWeight: 700,
    fontSize: typographyTokens.textFontSize.small,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  overline: {
    fontFamily: BODY_FONT_FAMILY,
    fontWeight: 700,
    fontSize: typographyTokens.navFontSize.medium,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
}
