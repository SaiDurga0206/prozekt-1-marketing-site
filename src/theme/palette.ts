import type { PaletteOptions } from '@mui/material/styles'

import { BRAND_COLORS } from '@/constants/BRAND_COLORS'

declare module '@mui/material/styles' {
  interface Palette {
    brandGraphite: string
    brandGold: string
    brandSteel: string
    brandBone: string
  }

  interface PaletteOptions {
    brandGraphite?: string
    brandGold?: string
    brandSteel?: string
    brandBone?: string
  }
}

export const palette: PaletteOptions = {
  primary: {
    main: BRAND_COLORS.SAGE_GREEN,
  },
  secondary: {
    main: BRAND_COLORS.SOFT_GOLD,
  },
  background: {
    default: 'transparent',
    paper: BRAND_COLORS.BONE_WHITE,
  },
  text: {
    primary: BRAND_COLORS.DEEP_GRAPHITE,
    secondary: BRAND_COLORS.STEEL,
  },
  brandGraphite: BRAND_COLORS.DEEP_GRAPHITE,
  brandGold: BRAND_COLORS.SOFT_GOLD,
  brandSteel: BRAND_COLORS.STEEL,
  brandBone: BRAND_COLORS.BONE_WHITE,
}
