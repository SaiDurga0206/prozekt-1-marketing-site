import { Box, Divider, Stack, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import EmailIcon from '@mui/icons-material/Email'
import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import type { JSX } from 'react'

import { PageWrapper } from '@/components/layout/page-wrapper'
import { BackToHome } from '@/components/ui/back-link'
import { BRAND_COLORS, PAGE_HERO_GRADIENT } from '@/constants/BRAND_COLORS'

const WHATSAPP_CHANNEL = 'https://whatsapp.com/channel/0029Vb7ZrHSBFLgcRRI8xk3m'
const INSTAGRAM_URL = 'https://www.instagram.com/prozekt1_organics?igsh=MTNmMTBwcnIyMWdvaQ=='
const PHONE = '+919014521115'
const PHONE_DISPLAY = '+91 90145 21115'
const EMAIL = 'prozekt1organics@gmail.com'

interface ContactItemProps {
  icon: JSX.Element
  label: string
  value: string
  href: string
  subtext?: string
}

function ContactItem({ icon, label, value, href, subtext }: ContactItemProps): JSX.Element {
  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2.5,
        p: 3,
        border: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.20)}`,
        borderRadius: 1,
        background: alpha(BRAND_COLORS.BONE_WHITE, 0.5),
        textDecoration: 'none',
        transition: 'border-color 0.2s ease, background 0.2s ease',
        '&:hover': {
          borderColor: alpha(BRAND_COLORS.SOFT_GOLD, 0.50),
          background: BRAND_COLORS.BONE_WHITE,
        },
      }}
    >
      <Box sx={{ color: BRAND_COLORS.SOFT_GOLD, mt: 0.25, flexShrink: 0 }}>
        {icon}
      </Box>
      <Box>
        <Typography
          variant="overline"
          sx={{ color: BRAND_COLORS.STEEL, display: 'block', mb: 0.5 }}
        >
          {label}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 500 }}
        >
          {value}
        </Typography>
        {subtext && (
          <Typography variant="body2" sx={{ color: BRAND_COLORS.STEEL, mt: 0.5 }}>
            {subtext}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export function ContactPage(): JSX.Element {
  return (
    <PageWrapper>
      <Box sx={{ px: { xs: 3, md: 6 }, pt: { xs: 2.5, md: 3 } }}>
        <BackToHome />
      </Box>

      {/* Hero */}
      <Box
        sx={{
          textAlign: 'center',
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 8 },
          px: { xs: 3, md: 6 },
          background: PAGE_HERO_GRADIENT,
          borderBottom: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.13)}`,
        }}
      >
        <Typography variant="overline" sx={{ color: BRAND_COLORS.SOFT_GOLD, mb: 1.5, display: 'block' }}>
          Get in Touch
        </Typography>
        <Typography variant="h1" sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, mb: 2 }}>
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: BRAND_COLORS.STEEL, maxWidth: 480, mx: 'auto' }}
        >
          Reach out to Prozekt-1 via WhatsApp, Instagram, phone, or email. We're here to connect.
        </Typography>
      </Box>

      {/* Contact items */}
      <Box sx={{ maxWidth: 680, mx: 'auto', px: { xs: 3, md: 6 }, py: { xs: 6, md: 8 } }}>
        <Stack spacing={3}>

          {/* WhatsApp */}
          <Box>
            <Typography variant="overline" sx={{ color: BRAND_COLORS.SOFT_GOLD, display: 'block', mb: 2 }}>
              Social &amp; Messaging
            </Typography>
            <Stack spacing={2}>
              <ContactItem
                icon={<WhatsAppIcon sx={{ fontSize: 28 }} />}
                label="WhatsApp Channel"
                value="Follow PROZEKT-1 on WhatsApp"
                href={WHATSAPP_CHANNEL}
                subtext="Tap to open and follow our channel"
              />
              <ContactItem
                icon={<InstagramIcon sx={{ fontSize: 28 }} />}
                label="Instagram"
                value="@prozekt1_organics"
                href={INSTAGRAM_URL}
                subtext="Do follow us on Instagram"
              />
            </Stack>
          </Box>

          <Divider sx={{ borderColor: alpha(BRAND_COLORS.STEEL, 0.20) }} />

          {/* Phone & Email */}
          <Box>
            <Typography variant="overline" sx={{ color: BRAND_COLORS.SOFT_GOLD, display: 'block', mb: 2 }}>
              Direct Contact
            </Typography>
            <Stack spacing={2}>
              <ContactItem
                icon={<PhoneIcon sx={{ fontSize: 28 }} />}
                label="Phone"
                value={PHONE_DISPLAY}
                href={`tel:${PHONE}`}
                subtext="Call or WhatsApp us directly"
              />
              <ContactItem
                icon={<EmailIcon sx={{ fontSize: 28 }} />}
                label="Email"
                value={EMAIL}
                href={`mailto:${EMAIL}`}
                subtext="We'll respond within 24 hours"
              />
            </Stack>
          </Box>

        </Stack>
      </Box>
    </PageWrapper>
  )
}
