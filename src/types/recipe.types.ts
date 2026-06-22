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

export interface RecipeData {
  id: string
  title: string
  categoryIds: string[]
  primaryCategoryLabel: string
  cookingTime: string
  serves: string
  thumbnailSrc: string
  cards: RecipeCardData[]
}
