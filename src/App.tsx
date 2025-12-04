import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import './App.css'
import DeleteAccount from './pages/DeleteAccount'
import Terms from './pages/Terms'
import PrivacyPolicy from './pages/PrivacyPolicy'

function RedirectPage() {
  const [showFallback, setShowFallback] = useState(false)
  const [deepLink, setDeepLink] = useState('')
  const location = useLocation()

  useEffect(() => {
    // Don't redirect if we're on these pages
    if (location.pathname === '/delete-account' || 
        location.pathname === '/terms' || 
        location.pathname === '/privacy-policy') {
      return
    }

    const params = new URLSearchParams(window.location.search)
    const screen = params.get('screen') || 'home'
    const id = params.get('id')
    
    const APP_SCHEME = 'hypehaus'
    let link = ''
    
    switch (screen.toLowerCase()) {
      case 'event':
      case 'events':
        link = id 
          ? `${APP_SCHEME}://event-details?id=${encodeURIComponent(id)}`
          : `${APP_SCHEME}:///(tabs)`
        break
      case 'home':
        link = `${APP_SCHEME}:///(tabs)`
        break
      case 'profile':
        link = `${APP_SCHEME}:///(tabs)/profile`
        break
      case 'tickets':
        link = `${APP_SCHEME}:///(tabs)/tickets`
        break
      case 'wishlist':
        link = `${APP_SCHEME}:///(tabs)/wishlist`
        break
      case 'history':
        link = `${APP_SCHEME}:///(tabs)/history`
        break
      default:
        link = `${APP_SCHEME}:///(tabs)`
    }
    
    setDeepLink(link)
    
    // Try to open the app
    window.location.href = link
    
    // Fallback: if still here after 2 seconds, show install prompt
    const timeout = setTimeout(() => {
      setShowFallback(true)
    }, 2000)
    
    return () => clearTimeout(timeout)
  }, [location.pathname])

  const handleTryAgain = () => {
    if (deepLink) {
      window.location.href = deepLink
    }
  }

  if (showFallback) {
  return (
      <div className="container">
        <h2>HypeHaus</h2>
        <p>Don't have the app?</p>
        <p className="subtitle">Download HypeHaus to view this event</p>
        <a 
          href={deepLink} 
          onClick={(e) => {
            e.preventDefault()
            handleTryAgain()
          }}
          className="try-again-button"
        >
          Try Again
        </a>
        <div className="footer-links">
          <Link to="/delete-account" className="footer-link">Delete Account</Link>
          <span className="footer-separator">•</span>
          <Link to="/terms" className="footer-link">Terms & Conditions</Link>
          <span className="footer-separator">•</span>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="spinner"></div>
      <p>Opening HypeHaus...</p>
      <p className="fallback-text">
        If the app doesn't open,{' '}
        <a href={deepLink} className="fallback-link">
          click here
        </a>
      </p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
