import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from "./layout/Footer"
import Navbar from "./layout/Navbar"
import Suitup from "./layout/pages/Suitup"
import Home from "./layout/pages/Home"
import SearchResult from "./layout/pages/SearchResult"
import UserProfile from "./layout/pages/UserProfile"
import Onboarding from "./layout/pages/Onboarding"
import Overview from "./layout/pages/Overview"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="suitup" element={<Suitup />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="searchresult" element={<SearchResult />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="overview" element={<Overview />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
