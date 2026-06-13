import { Box, Chip, Divider, Stack, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import type { JSX } from 'react'

import prozektLogo from '@/assets/prozekt1_logo_hd.png'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { BackToHome } from '@/components/ui/back-link'
import { BRAND_COLORS, PAGE_HERO_GRADIENT } from '@/constants/BRAND_COLORS'

const credentials = [
  {
    label: 'Corporate Identity Number',
    value: 'U01113AP2026PTC124700',
    authority: 'Ministry of Corporate Affairs, Govt. of India',
  },
  {
    label: 'MSME Udyam Registration',
    value: 'UDYAM-AP-12-0114480',
    authority: 'Ministry of MSME, Govt. of India',
  },
  {
    label: 'Date of Incorporation',
    value: '15 March 2026',
    authority: 'Companies Act, 2013 (18 of 2013)',
  },
  {
    label: 'Enterprise Classification',
    value: 'Micro Enterprise — Manufacturing',
    authority: 'MSME Classification, 26 March 2026',
  },
  {
    label: 'Registered State',
    value: 'Andhra Pradesh',
    authority: 'Central Registration Centre, Manesar',
  },
  {
    label: 'Permanent Account Number',
    value: 'AAQCP8378R',
    authority: 'Income Tax Department, Govt. of India',
  },
]

export function AboutPage(): JSX.Element {
  return (
    <PageWrapper>
      <Box sx={{ px: { xs: 3, md: 6 }, pt: { xs: 2.5, md: 3 } }}>
        <BackToHome />
      </Box>

      {/* Hero */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 8 },
          px: { xs: 3, md: 6 },
          background: PAGE_HERO_GRADIENT,
          borderBottom: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.13)}`,
        }}
      >
        <Box
          component="img"
          src={prozektLogo}
          alt="Prozekt-1 Organics logo"
          sx={{
            width: { xs: 160, sm: 200, md: 260 },
            height: 'auto',
            mb: { xs: 4, md: 5 },
            filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.10))',
          }}
        />

        <Typography variant="overline" sx={{ color: BRAND_COLORS.SOFT_GOLD, mb: 1.5 }}>
          Officially Registered &amp; Government Approved
        </Typography>

        <Typography variant="h1" sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, mb: 0.5 }}>
          Prozekt-1 Organics
        </Typography>

        <Typography variant="h6" component="p" sx={{ color: BRAND_COLORS.STEEL, fontWeight: 400, mb: 3 }}>
          Private Limited
        </Typography>

        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          <Chip
            label="Companies Act, 2013"
            size="small"
            sx={{
              backgroundColor: alpha(BRAND_COLORS.SAGE_GREEN, 0.09),
              color: BRAND_COLORS.SAGE_GREEN,
              border: `1px solid ${alpha(BRAND_COLORS.SAGE_GREEN, 0.27)}`,
              height: 26,
            }}
          />
          <Chip
            label="MSME Registered"
            size="small"
            sx={{
              backgroundColor: alpha(BRAND_COLORS.SOFT_GOLD, 0.09),
              color: BRAND_COLORS.SOFT_GOLD,
              border: `1px solid ${alpha(BRAND_COLORS.SOFT_GOLD, 0.27)}`,
              height: 26,
            }}
          />
          <Chip
            label="Andhra Pradesh"
            size="small"
            sx={{
              backgroundColor: alpha(BRAND_COLORS.STEEL, 0.09),
              color: BRAND_COLORS.DEEP_GRAPHITE,
              border: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.27)}`,
              height: 26,
            }}
          />
        </Stack>
      </Box>

      {/* Description */}
      <Box sx={{ maxWidth: 800, mx: 'auto', px: { xs: 3, md: 6 }, py: { xs: 6, md: 8 } }}>
        <Stack spacing={4}>
          <Box>
            <Typography variant="overline" sx={{ color: BRAND_COLORS.SOFT_GOLD, display: 'block', mb: 1.5 }}>
              About the Company
            </Typography>
            <Typography variant="h3" sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, mb: 3 }}>
              Rooted in Purpose, Recognised by the Nation
            </Typography>

            <Stack spacing={2.5}>
              <Typography variant="body1" sx={{ color: BRAND_COLORS.DEEP_GRAPHITE }}>
                Prozekt-1 Organics Private Limited was incorporated on{' '}
                <Box component="strong">15 March 2026</Box>{' '}
                under the{' '}
                <Box component="strong">Companies Act, 2013 (18 of 2013)</Box>
                , duly registered by the Central Registration Centre of the{' '}
                <Box component="strong">Ministry of Corporate Affairs, Government of India</Box>
                . The company is incorporated as a Company Limited by Shares, with its registered office in
                the State of Andhra Pradesh, carrying Corporate Identity Number{' '}
                <Box component="strong">U01113AP2026PTC124700</Box>.
              </Typography>

              <Typography variant="body1" sx={{ color: BRAND_COLORS.DEEP_GRAPHITE }}>
                The company was founded to advance India's organic food ecosystem — engaged in the{' '}
                <Box component="strong">growing of cereals, the processing and preserving of fruit and vegetables</Box>
                , and the wholesale of food products. Operating from West Godavari, Andhra Pradesh,
                Prozekt-1 Organics combines modern agri-technology with India's farming heritage to deliver
                responsibly sourced, high-quality organic produce.
              </Typography>

              <Typography variant="body1" sx={{ color: BRAND_COLORS.DEEP_GRAPHITE }}>
                Recognised by the{' '}
                <Box component="strong">
                  Ministry of Micro, Small and Medium Enterprises (MSME), Government of India
                </Box>
                , Prozekt-1 Organics holds Udyam Registration Number{' '}
                <Box component="strong">UDYAM-AP-12-0114480</Box>
                , classified as a{' '}
                <Box component="strong">Micro Enterprise in the Manufacturing sector</Box>{' '}
                (effective 26 March 2026). This recognition places the company under the full protection and
                support of India's MSME framework — ensuring regulatory compliance, structured growth, and
                accountability at every stage of operations.
              </Typography>

              <Typography variant="body1" sx={{ color: BRAND_COLORS.DEEP_GRAPHITE }}>
                Prozekt-1 is built on the conviction that premium organics, advanced cultivation techniques —
                spanning microgreens, hydroponics, aeroponics, and functional foods — and sustainable practices
                are not competing interests but a single, unified mission. Every product carries the weight of
                legal standing, institutional trust, and a commitment to the communities it serves.
              </Typography>
            </Stack>
          </Box>

          <Divider sx={{ borderColor: alpha(BRAND_COLORS.STEEL, 0.27) }} />

          {/* Registration Credentials */}
          <Box>
            <Typography variant="overline" sx={{ color: BRAND_COLORS.SOFT_GOLD, display: 'block', mb: 2.5 }}>
              Legal &amp; Government Registrations
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2,
              }}
            >
              {credentials.map((cred) => (
                <Box
                  key={cred.label}
                  sx={{
                    p: 2.5,
                    border: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.20)}`,
                    borderRadius: 1,
                    background: alpha(BRAND_COLORS.BONE_WHITE, 0.53),
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                    '&:hover': {
                      borderColor: alpha(BRAND_COLORS.SOFT_GOLD, 0.40),
                      background: BRAND_COLORS.BONE_WHITE,
                    },
                  }}
                >
                  <Typography variant="overline" sx={{ color: BRAND_COLORS.STEEL, display: 'block', mb: 0.5 }}>
                    {cred.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, mb: 0.5 }}>
                    {cred.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: BRAND_COLORS.STEEL }}>
                    {cred.authority}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Divider sx={{ borderColor: alpha(BRAND_COLORS.STEEL, 0.27) }} />

          {/* Registered Address */}
          <Box sx={{ pb: { xs: 2, md: 4 } }}>
            <Typography variant="overline" sx={{ color: BRAND_COLORS.SOFT_GOLD, display: 'block', mb: 1.5 }}>
              Registered Address
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, lineHeight: 2 }}>
              22-1-2A, Laxmi Nagar, Palakol,
              <br />
              Palakol Mandal, West Godavari — 534260
              <br />
              Andhra Pradesh, India
            </Typography>
          </Box>
        </Stack>
      </Box>
    </PageWrapper>
  )
}
