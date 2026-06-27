import { Box, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleIcon from '@mui/icons-material/People'
import SearchIcon from '@mui/icons-material/Search'
import type { JSX } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { PageWrapper } from '@/components/layout'
import {
  BackToHome,
  PageContainer,
  PageHeader,
  PageNavChip,
  PageNavChipRow,
} from '@/components/ui'
import { BRAND_COLORS, RECIPE_BOOK_FONT, RECIPE_TAGS, RECIPES } from '@/constants'
import { ROUTES } from '@/routes'
import type { RecipeData } from '@/types'

function RecipeCard({ recipe }: { recipe: RecipeData }): JSX.Element {
  const legacyRouteMap: Record<string, string> = {
    'pink-oyster-65': ROUTES.PINK_OYSTER_65,
    'milky-mushroom-masala-curry': ROUTES.MILKY_MUSHROOM_MASALA_CURRY,
    'milky-mushroom-ghee-roast': ROUTES.MILKY_MUSHROOM_GHEE_ROAST,
  }
  const detailRoute = legacyRouteMap[recipe.id] ?? `/recipe-book/${recipe.id}`

  return (
    <Box
      component={Link}
      to={detailRoute}
      sx={{
        display: 'block',
        textDecoration: 'none',
        border: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.18)}`,
        borderRadius: 2,
        overflow: 'hidden',
        bgcolor: BRAND_COLORS.PAPER_WHITE,
        transition: 'border-color 0.2s, box-shadow 0.2s',
        '&:hover': {
          borderColor: alpha(BRAND_COLORS.SOFT_GOLD, 0.5),
          boxShadow: `0 4px 20px ${alpha(BRAND_COLORS.SOFT_GOLD, 0.1)}`,
        },
      }}
    >
      {recipe.thumbnailSrc ? (
        <Box
          component="img"
          src={recipe.thumbnailSrc}
          alt={recipe.title}
          sx={{
            width: '100%',
            height: { xs: 200, md: 220 },
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: { xs: 120, md: 140 },
            bgcolor: alpha(BRAND_COLORS.BONE_WHITE, 0.8),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: `1px solid ${alpha(BRAND_COLORS.STEEL, 0.1)}`,
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: alpha(BRAND_COLORS.STEEL, 0.5), letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.65rem' }}
          >
            Image coming soon
          </Typography>
        </Box>
      )}
      <Box sx={{ p: { xs: 2.5, md: 3 } }}>
        <Typography
          variant="overline"
          sx={{ color: BRAND_COLORS.SOFT_GOLD, letterSpacing: '0.12em', display: 'block', mb: 0.5, fontSize: '0.68rem' }}
        >
          {recipe.primaryCategoryLabel}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: BRAND_COLORS.DEEP_GRAPHITE,
            fontWeight: 700,
            lineHeight: 1.25,
            mb: 1.5,
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          {recipe.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon sx={{ fontSize: 14, color: BRAND_COLORS.STEEL }} />
            <Typography variant="caption" sx={{ color: BRAND_COLORS.STEEL }}>
              {recipe.cookingTime}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <PeopleIcon sx={{ fontSize: 14, color: BRAND_COLORS.STEEL }} />
            <Typography variant="caption" sx={{ color: BRAND_COLORS.STEEL }}>
              {recipe.serves}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export function RecipeBookPage(): JSX.Element {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRecipes = RECIPES.filter((recipe) => {
    const matchesTag = !activeTag || recipe.categoryIds.includes(activeTag)
    const matchesSearch =
      !searchQuery || recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTag && matchesSearch
  })

  return (
    <PageWrapper>
      <PageContainer size="medium">
        <BackToHome />

        <PageHeader
          overline="PROZEKT-1 RECIPES"
          title="Recipe Book"
          description="Explore recipes crafted around fresh organic produce — from farm-grown mushrooms and microgreens to wholesome everyday meals and catering ideas."
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Search bar */}
            <Box sx={{ maxWidth: 480 }}>
              <OutlinedInput
                fullWidth
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: BRAND_COLORS.STEEL, fontSize: 18 }} />
                  </InputAdornment>
                }
                sx={{
                  height: 32,
                  borderRadius: '16px',
                  backgroundColor: alpha(BRAND_COLORS.BONE_WHITE, 0.6),
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: alpha(BRAND_COLORS.STEEL, 0.30),
                    borderRadius: '16px',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: alpha(BRAND_COLORS.SOFT_GOLD, 0.50),
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: BRAND_COLORS.SOFT_GOLD,
                    borderWidth: 1,
                  },
                  input: {
                    color: BRAND_COLORS.DEEP_GRAPHITE,
                    fontSize: '0.875rem',
                    py: 0,
                    '&::placeholder': { color: BRAND_COLORS.STEEL, opacity: 1 },
                  },
                }}
              />
            </Box>

            {/* Tags */}
            <PageNavChipRow size="medium">
              {RECIPE_TAGS.map((tag) => (
                <PageNavChip
                  key={tag.id}
                  label={tag.label}
                  onClick={() => setActiveTag(activeTag === tag.id ? null : tag.id)}
                />
              ))}
            </PageNavChipRow>
          </Box>
        </PageHeader>

        {/* Recipe grid */}
        <Box sx={{ mt: { xs: 5, md: 6 }, '& .MuiTypography-root': { fontFamily: `${RECIPE_BOOK_FONT} !important` } }}>
          {filteredRecipes.length > 0 ? (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: { xs: 2.5, md: 3 },
              }}
            >
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                py: { xs: 8, md: 10 },
                textAlign: 'center',
                border: `1px dashed ${alpha(BRAND_COLORS.STEEL, 0.25)}`,
                borderRadius: 2,
              }}
            >
              <Typography variant="overline" sx={{ color: BRAND_COLORS.SOFT_GOLD, letterSpacing: '0.14em' }}>
                Coming Soon
              </Typography>
              <Typography variant="h6" sx={{ color: BRAND_COLORS.DEEP_GRAPHITE, mt: 1.5, mb: 1, fontWeight: 600 }}>
                No recipes in this category yet
              </Typography>
              <Typography variant="body2" sx={{ color: BRAND_COLORS.STEEL, maxWidth: 340, mx: 'auto' }}>
                We're building a full collection. Check back soon or explore another category.
              </Typography>
            </Box>
          )}
        </Box>
      </PageContainer>
    </PageWrapper>
  )
}
