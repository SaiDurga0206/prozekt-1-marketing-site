export type RecipeCardType = 'nutrition' | 'ingredients' | 'steps' | 'narrative'

export interface RecipeCardData {
  id: string
  title: string
  imageSrc?: string
  imageAlt?: string
  contentType: RecipeCardType
  items?: string[]
  narrative?: string[]
}

export interface NutritionTableRow {
  label: string
  value: string
}

export interface NutritionProfile {
  product: string
  referenceProfile?: string
  servingReference?: string
  dataSource?: string
  note?: string
  nutrients: NutritionTableRow[]
  vitamins: NutritionTableRow[]
  minerals: NutritionTableRow[]
}

export interface RecipeData {
  id: string
  title: string
  bestWith?: string
  categoryIds: string[]
  primaryCategoryLabel: string
  cookingTime: string
  serves: string
  thumbnailSrc?: string
  nutritionProfiles?: NutritionProfile[]
  cards: RecipeCardData[]
}
