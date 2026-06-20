import type { JSX } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Header } from '@/components/layout/header'
import { AboutPage } from '@/pages/About/AboutPage'
import { HomePage } from '@/pages/Home/HomePage'
import { LaunchingSoonPage } from '@/pages/LaunchingPage/LaunchingSoonPage'
import { MushroomsPage } from '@/pages/Organics PVT LTD/Customer Facing Area/MushroomsPage'
import { OrganicsPage } from '@/pages/Organics PVT LTD/OrganicsPage'
import { PoultryPage } from '@/pages/Organics PVT LTD/Customer Facing Area/PoultryPage'
import { ContactPage } from '@/pages/Contact/ContactPage'
import { RecyclingPage } from '@/pages/Recycling&Repurposing/RecyclingPage'
import { SustainabilityPage } from '@/pages/Sustainability Systems/SustainabilityPage'
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
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </>
  )
}

export default App
