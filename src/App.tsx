import type { JSX } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Header } from '@/components/layout'
import { AboutPage } from '@/pages/About'
import { ContactPage } from '@/pages/Contact'
import { HomePage } from '@/pages/Home'
import { LaunchingSoonPage } from '@/pages/LaunchingPage'
import { OrganicsPage, MushroomsPage, PoultryPage } from '@/pages/Organics PVT LTD'
import { MilkyMushroomGheeRoastPage, MilkyMushroomMasalaCurryPage, PinkOyster65Page, RecipeBookPage, RecipeDetailPage } from '@/pages/RecipeBook'
import { RecyclingPage } from '@/pages/Recycling&Repurposing'
import { SustainabilityPage } from '@/pages/Sustainability Systems'
import { ROUTES } from '@/routes'

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.ORGANICS} element={<OrganicsPage />} />
        <Route path={ROUTES.SUSTAINABILITY} element={<SustainabilityPage />} />
        <Route path={ROUTES.RECYCLING} element={<RecyclingPage />} />
        <Route path={ROUTES.MUSHROOMS} element={<MushroomsPage />} />
        <Route path={ROUTES.POULTRY} element={<PoultryPage />} />
        <Route path={ROUTES.MICROGREENS} element={<LaunchingSoonPage title="Microgreens" />} />
        <Route path={ROUTES.HYDRO_AERO} element={<LaunchingSoonPage title="Hydro / Aeroponics" />} />
        <Route path={ROUTES.FUNCTIONAL_FOODS} element={<LaunchingSoonPage title="Functional Foods" />} />
        <Route path={ROUTES.RECIPE_BOOK} element={<RecipeBookPage />} />
        <Route path={ROUTES.RECIPE_DETAIL} element={<RecipeDetailPage />} />
        <Route path={ROUTES.PINK_OYSTER_65} element={<PinkOyster65Page />} />
        <Route path={ROUTES.MILKY_MUSHROOM_MASALA_CURRY} element={<MilkyMushroomMasalaCurryPage />} />
        <Route path={ROUTES.MILKY_MUSHROOM_GHEE_ROAST} element={<MilkyMushroomGheeRoastPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </>
  )
}

export default App
