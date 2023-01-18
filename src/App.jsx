import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React, { useState } from "react"
import Footer from "./layout/Footer"
import Navbar from "./layout/Navbar"
import Suitup from "./layout/pages/Suitup"
import Home from "./layout/pages/Home"
import SearchResult from "./layout/pages/SearchResult"
import UserProfile from "./layout/pages/UserProfile"
import Onboarding from "./layout/pages/Onboarding"
import {
  loginDefaultState,
  joinDefaultState,
  userDefaultState,
} from "./states/defaultStates"

const userData = [
  {
    email: "hajji@gmail.com",
    password: "123",
  },
  {
    email: "ann@gmail.com",
    password: "123",
  },
  {
    email: "nami@gmail.com",
    password: "123",
  },
]

function App() {
  const [loginState, setLoginState] = useState(loginDefaultState)
  const [joinState, setJoinState] = useState(joinDefaultState)
  const [userState, setUserState] = useState(userDefaultState)
  const [users, setUsers] = useState(userData)

  const states = {
    loginState,
    joinState,
    userState,
    users,
  }
  const stateDispatch = {
    setLoginState,
    setJoinState,
    setUserState,
    setUsers,
  }

  return (
    <Router>
      <Navbar states={states} dispatchers={stateDispatch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="suitup" element={<Suitup />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="searchresult" element={<SearchResult />} />
        <Route path="onboarding" element={<Onboarding />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
