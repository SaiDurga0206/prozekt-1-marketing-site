import { createTheme } from '@mui/material/styles'

import { palette } from '@/theme/palette'
import { layoutTokens } from '@/theme/tokens'
import {
  BODY_FONT_FAMILY,
  DISPLAY_FONT_FAMILY,
  FONT_FAMILY,
  PAGE_HEADING_SIZE,
  PAGE_SUBHEADING_SIZE,
  PAGE_TEXT_SIZE,
  typography,
  typographyTokens,
} from '@/theme/typography'

declare module '@mui/material/styles' {
  interface Theme {
    layout: typeof layoutTokens
    typographyTokens: typeof typographyTokens
  }

  interface ThemeOptions {
    layout?: typeof layoutTokens
    typographyTokens?: typeof typographyTokens
  }
}

const theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 2,
  },
  layout: layoutTokens,
  typographyTokens,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          width: '100%',
          overflowX: 'hidden',
          overscrollBehaviorX: 'none',
        },
        body: {
          fontFamily: BODY_FONT_FAMILY,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          width: '100%',
          overflowX: 'hidden',
          overscrollBehaviorX: 'none',
          touchAction: 'pan-y',
        },
        '#root': {
          width: '100%',
          overflowX: 'hidden',
        },
      },
    },
  },
})

export {
  BODY_FONT_FAMILY,
  DISPLAY_FONT_FAMILY,
  FONT_FAMILY,
  PAGE_HEADING_SIZE,
  PAGE_SUBHEADING_SIZE,
  PAGE_TEXT_SIZE,
  typographyTokens,
}
export default theme
