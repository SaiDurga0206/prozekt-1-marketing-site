import { Box, Chip, IconButton, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import PeopleIcon from '@mui/icons-material/People'
import type { JSX } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { PageWrapper } from '@/components/layout'
import { BackToRecipeBook, PageContainer } from '@/components/ui'
import { BRAND_COLORS, RECIPE_BOOK_FONT, RECIPES } from '@/constants'
import type { RecipeCardData } from '@/types'

const recipe = RECIPES.find((r) => r.id === 'milky-mushroom-ghee-roast')!

function CardContent({ card }: { card: RecipeCardData }): JSX.Element {
  if (card.contentType === 'narrative' && card.narrative) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {card.narrative.map((para, i) => (
          <Typography
            key={i}
            variant="body2"
            sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, lineHeight: 1.85, fontSize: { xs: '1.125rem', md: '1.25rem' } }}
          >
            {para}
          </Typography>
        ))}
      </Box>
    )
  }

  if (card.contentType === 'steps' && card.items) {
    return (
      <Box component="ol" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {card.items.map((step, i) => (
          <Box component="li" key={i} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Typography
              variant="overline"
              sx={{ color: BRAND_COLORS.SOFT_GOLD, fontWeight: 400, minWidth: 24, lineHeight: 1.6, fontSize: '0.9rem', letterSpacing: '0.06em' }}
            >
              {String(i + 1).padStart(2, '0')}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, lineHeight: 1.7, fontSize: { xs: '1.125rem', md: '1.25rem' } }}
            >
              {step}
            </Typography>
          </Box>
        ))}
      </Box>
    )
  }

  if (card.contentType === 'ingredients' && card.items) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {card.items.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              py: 1,
              borderBottom: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.12)}`,
              '&:last-child': { borderBottom: 'none' },
            }}
          >
            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: BRAND_COLORS.SOFT_GOLD, flexShrink: 0 }} />
            <Typography
              variant="body2"
              sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, fontSize: { xs: '1.125rem', md: '1.25rem' } }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    )
  }

  if (card.items) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {card.items.map((item, i) => (
          <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: BRAND_COLORS.SOFT_GOLD, flexShrink: 0, mt: '0.45em' }} />
            <Typography
              variant="body2"
              sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontWeight: 400, lineHeight: 1.7, fontSize: { xs: '1.125rem', md: '1.25rem' } }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    )
  }

  return <></>
}

export function MilkyMushroomGheeRoastPage(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)
  const totalCards = recipe.cards.length

  const goTo = useCallback(
    (index: number) => {
      if (!scrollRef.current) return
      const clamped = Math.max(0, Math.min(index, totalCards - 1))
      scrollRef.current.scrollTo({ left: clamped * scrollRef.current.offsetWidth, behavior: 'smooth' })
      setActiveCard(clamped)
    },
    [totalCards],
  )

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return
    const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth)
    setActiveCard(index)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <PageWrapper>
      <PageContainer size="medium">
        <BackToRecipeBook />

        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', letterSpacing: '0.12em', display: 'block', mb: 0.5 }}
          >
            PROZEKT-1 RECIPES
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, fontFamily: RECIPE_BOOK_FONT, fontWeight: 400, mb: 2, lineHeight: 1.25 }}
          >
            {recipe.title}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
            <Chip
              label={recipe.primaryCategoryLabel}
              size="small"
              sx={{
                borderColor: BRAND_COLORS.SOFT_GOLD,
                color: BRAND_COLORS.DEEP_GRAPHITE,
                border: '1px solid',
                bgcolor: alpha(BRAND_COLORS.SOFT_GOLD, 0.12),
                fontWeight: 600,
                letterSpacing: '0.06em',
                fontSize: '0.7rem',
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTimeIcon sx={{ fontSize: 15, color: BRAND_COLORS.STEEL }} />
              <Typography variant="caption" sx={{ color: BRAND_COLORS.STEEL }}>{recipe.cookingTime}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PeopleIcon sx={{ fontSize: 15, color: BRAND_COLORS.STEEL }} />
              <Typography variant="caption" sx={{ color: BRAND_COLORS.STEEL }}>{recipe.serves}</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ '& .MuiTypography-root': { fontFamily: `${RECIPE_BOOK_FONT} !important` } }}>
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              borderRadius: 2,
            }}
          >
            {recipe.cards.map((card, i) => (
              <Box key={card.id} sx={{ minWidth: '100%', scrollSnapAlign: 'start' }}>
                <Box
                  sx={{
                    border: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.18)}`,
                    borderRadius: 2,
                    overflow: 'hidden',
                    bgcolor: BRAND_COLORS.PAPER_WHITE,
                  }}
                >
                  {card.imageSrc && (
                    <Box
                      component="img"
                      src={card.imageSrc}
                      alt={card.imageAlt ?? card.title}
                      sx={{
                        width: '100%',
                        height: { xs: 240, md: 320 },
                        objectFit: 'contain',
                        display: 'block',
                        bgcolor: '#F5F0EA',
                      }}
                    />
                  )}
                  <Box sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ mb: 2.5 }}>
                      <Typography
                        variant="overline"
                        sx={{ color: BRAND_COLORS.SOFT_GOLD, letterSpacing: '0.14em', display: 'block', mb: 0.25 }}
                      >
                        {String(i + 1).padStart(2, '0')} of {totalCards}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: BRAND_COLORS.DEEP_GRAPHITE,
                          fontFamily: RECIPE_BOOK_FONT,
                          fontWeight: 400,
                          lineHeight: 1.2,
                          fontSize: { xs: '1.5rem', md: '1.625rem' },
                        }}
                      >
                        {card.title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        maxHeight: { xs: 320, md: 'none' },
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': { width: 3 },
                        '&::-webkit-scrollbar-thumb': { bgcolor: alpha(BRAND_COLORS.STEEL, 0.30), borderRadius: 4 },
                        pr: { xs: 0.5, md: 0 },
                      }}
                    >
                      <CardContent card={card} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mt: 3 }}>
            <IconButton
              onClick={() => goTo(activeCard - 1)}
              disabled={activeCard === 0}
              size="small"
              sx={{
                color: BRAND_COLORS.STEEL,
                border: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.25)}`,
                '&:not(:disabled):hover': { borderColor: BRAND_COLORS.SOFT_GOLD, color: BRAND_COLORS.SOFT_GOLD },
              }}
            >
              <ChevronLeftIcon fontSize="small" />
            </IconButton>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {recipe.cards.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => goTo(i)}
                  sx={{
                    width: activeCard === i ? 20 : 8,
                    height: 8,
                    borderRadius: 4,
                    bgcolor: activeCard === i ? BRAND_COLORS.SOFT_GOLD : alpha(BRAND_COLORS.STEEL, 0.35),
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                />
              ))}
            </Box>
            <IconButton
              onClick={() => goTo(activeCard + 1)}
              disabled={activeCard === totalCards - 1}
              size="small"
              sx={{
                color: BRAND_COLORS.STEEL,
                border: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.25)}`,
                '&:not(:disabled):hover': { borderColor: BRAND_COLORS.SOFT_GOLD, color: BRAND_COLORS.SOFT_GOLD },
              }}
            >
              <ChevronRightIcon fontSize="small" />
            </IconButton>
          </Box>
          {activeCard === 0 && (
            <Typography
              variant="caption"
              sx={{ display: 'block', textAlign: 'center', mt: 1, color: alpha(BRAND_COLORS.STEEL, 0.6) }}
            >
              Swipe or use arrows to read
            </Typography>
          )}
        </Box>
      </PageContainer>
    </PageWrapper>
  )
}
