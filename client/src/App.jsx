import { useState } from 'react'
import PromoBar from './components/macrocomps/PromoBar'
import TopBar from './components/macrocomps/TopBar'
import MainHeader from './components/macrocomps/MainHeader'
import NavBar from './components/macrocomps/NavBar'
import Footer from './components/macrocomps/Footer'
import HomePage from './pages/Homepage'
import NotFoundPage from './pages/NotFoundPage'
import LoginModal from './components/macrocomps/LoginModal'

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false)
  const isNotFound = window.location.pathname !== '/'

  if (isNotFound) return <NotFoundPage />

  return (
    <>
      <PromoBar />
      <TopBar />
      <MainHeader onAccountClick={() => setLoginOpen(true)} />
      <NavBar />
      <HomePage />
      <Footer />
      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </>
  )
}
