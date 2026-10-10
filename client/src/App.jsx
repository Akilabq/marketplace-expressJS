import { useState } from 'react'
import PromoBar from './components/macrocomps/PromoBar'
import TopBar from './components/macrocomps/TopBar'
import MainHeader from './components/macrocomps/MainHeader'
import NavBar from './components/macrocomps/NavBar'
import Footer from './components/macrocomps/Footer'
import HomePage from './pages/Homepage'
import LoginModal from './components/macrocomps/LoginModal'

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false)

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
