import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from '@mui/material'
import { useEffect, useState, type JSX } from 'react'
import { Link } from 'react-router-dom'

import prozektLogo from '@/assets/prozekt1_logo_hd.png'
import { NAV_ITEMS } from '@/constants/BRAND_COPY'
import { BRAND_COLORS } from '@/constants/BRAND_COLORS'
import { ROUTES } from '@/routes'
import theme from '@/theme/theme'
import { resolveSize } from '@/theme/tokens'
import type { NavItem } from '@/types'

const DRAWER_WIDTH = 260

function HamburgerIcon(): JSX.Element {
  return (
    <Box
      component="svg"
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="currentColor"
      sx={{ display: 'block' }}
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </Box>
  )
}

function CloseIcon(): JSX.Element {
  return (
    <Box
      component="svg"
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="currentColor"
      sx={{ display: 'block' }}
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </Box>
  )
}

const navButtonSx = {
  border: 'none',
  minWidth: 0,
  color: BRAND_COLORS.DEEP_GRAPHITE,
  fontFamily: theme.typographyTokens.fontFamily,
  letterSpacing: '0.12em',
  fontSize: theme.typographyTokens.navFontSize.large,
  '&:hover': {
    border: 'none',
    backgroundColor: 'transparent',
    color: BRAND_COLORS.DEEP_GRAPHITE,
    opacity: 0.6,
  },
} as const

export function Header(): JSX.Element {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const closeDrawer = () => setDrawerOpen(false)

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        color="transparent"
        sx={{ backgroundColor: BRAND_COLORS.LIGHT_BROWN, borderBottom: '1px solid', borderColor: BRAND_COLORS.SOFT_GOLD }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 56, sm: 60, md: 64 },
            justifyContent: 'space-between',
            px: { xs: 2, sm: 3, md: 4, lg: 6 },
          }}
        >
          {/* Logo */}
          <Button
            component={Link}
            to={ROUTES.ABOUT}
            disableRipple
            sx={{
              border: 'none',
              p: 0,
              minWidth: 0,
              gap: 1.25,
              textTransform: 'none',
              '&:hover': { border: 'none', backgroundColor: 'transparent' },
            }}
          >
            <Box
              component="img"
              src={prozektLogo}
              alt="Prozekt-1 Organics logo"
              sx={{ height: { xs: 40, sm: 50, md: 60 }, width: 'auto', display: 'block' }}
            />
            <Typography
              variant="h6"
              component="span"
              sx={{
                color: BRAND_COLORS.DEEP_GRAPHITE,
                fontFamily: theme.typographyTokens.displayFontFamily,
                fontWeight: 600,
                fontSize: resolveSize(theme.typographyTokens.subHeadingFontSize, 'large'),
                letterSpacing: '0.005em',
                textTransform: 'none',
                display: 'inline',
              }}
            >
              PROZEKT-1
            </Typography>
          </Button>

          {/* Desktop nav — md and above */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { md: 1, lg: 2 } }}>
            {NAV_ITEMS.map((item: NavItem) => (
              <Button
                key={item.id}
                component={Link}
                to={item.to}
                variant="text"
                disableRipple
                startIcon={item.Icon ? <item.Icon sx={{ fontSize: '16px !important' }} /> : undefined}
                sx={navButtonSx}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Hamburger — xs and sm only */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: BRAND_COLORS.DEEP_GRAPHITE,
              p: 1,
            }}
          >
            <HamburgerIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        sx={{ display: { md: 'none' } }}
        slotProps={{
          paper: {
            sx: {
              width: DRAWER_WIDTH,
              backgroundColor: '#000000',
              borderLeft: '1px solid',
              borderColor: 'brandSteel',
            },
          },
        }}
      >
        {/* Drawer header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2.5,
            py: 1.5,
            borderBottom: '1px solid',
            borderColor: 'brandSteel',
            minHeight: { xs: 56, sm: 60 },
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: 'brandGold', letterSpacing: '0.14em' }}
          >
            Navigation
          </Typography>
          <IconButton
            onClick={closeDrawer}
            aria-label="Close navigation menu"
            sx={{ color: '#FFFFFF', p: 0.75 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Nav items */}
        <List disablePadding sx={{ pt: 1 }}>
          {NAV_ITEMS.map((item: NavItem) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                component={Link}
                to={item.to}
                onClick={closeDrawer}
                sx={{
                  px: 2.5,
                  py: 1.75,
                  fontFamily: theme.typographyTokens.fontFamily,
                  fontSize: theme.typographyTokens.navFontSize.large,
                  letterSpacing: '0.12em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'brandGold',
                  },
                }}
              >
                {item.Icon && <item.Icon sx={{ fontSize: 20, flexShrink: 0 }} />}
                {item.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ borderColor: 'brandSteel', mt: 1 }} />

        {/* About link */}
        <Box sx={{ px: 2.5, pt: 2 }}>
          <Button
            component={Link}
            to={ROUTES.ABOUT}
            onClick={closeDrawer}
            variant="text"
            disableRipple
            sx={{
              ...navButtonSx,
              fontSize: theme.typographyTokens.navFontSize.small,
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            ABOUT PROZEKT-1
          </Button>
        </Box>
      </Drawer>
    </>
  )
}
