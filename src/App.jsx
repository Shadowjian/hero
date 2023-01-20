import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import React, { useState, useEffect } from "react"

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
  gigsDefaultState
} from "./states/defaultStates"

function App() {
  const [loginState, setLoginState] = useState(loginDefaultState)
  const [joinState, setJoinState] = useState(joinDefaultState)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(userDefaultState)
  const [gigs, setGigs] = useState([])
  const [searchInput, setSearchInput] = useState("")

  // GET USERS

  useEffect(() => {
    getUsers()
  }, [searchInput])

  useEffect(() => {
    !searchInput && setGigs(gigsDefaultState)
  }, [searchInput])

  const getUsers = async () => {
    const res = await fetch("http://localhost:5000/api/users")
    const data = await res.json()
    setUsers(data)
  }

  // NEW USER
  const addUser = async () => {
    const res = await fetch("http://localhost:5000/api/users/join", {
      method: "POST",
      body: JSON.stringify(joinState),
      headers: {
        "Content-type": "application/json"
      }
    })
    const data = await res.json()
    setUsers([...users, data])
  }

  const states = {
    loginState,
    joinState,
    user,
    users,
    gigs,
    searchInput
  }

  const dispatchers = {
    setLoginState,
    setJoinState,
    setUser,
    setUsers,
    setGigs,
    setSearchInput
  }


import Overview from "./layout/pages/Overview"



  return (
    <Router>
      <Navbar states={states} dispatchers={dispatchers} addUser={addUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="suitup" element={<Suitup />} />

        <Route
          path="profile"
          element={<UserProfile states={states} dispatchers={dispatchers} />}
        />
        <Route
          path="searchresult"
          element={<SearchResult states={states} dispatchers={dispatchers} />}
        />
        <Route path="onboarding" element={<Onboarding />} />

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
