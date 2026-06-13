import type { JSX } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Header } from '@/components/layout/header'
import { AboutPage } from '@/pages/AboutPage'
import { HomePage } from '@/pages/HomePage'
import { LaunchingSoonPage } from '@/pages/LaunchingSoonPage'
import { MushroomsPage } from '@/pages/MushroomsPage'
import { OrganicsPage } from '@/pages/OrganicsPage'
import { PoultryPage } from '@/pages/PoultryPage'
import { RecyclingPage } from '@/pages/RecyclingPage'
import { SustainabilityPage } from '@/pages/SustainabilityPage'
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
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </>
  )
}

export default App
