import React from 'react'
import Navbar from './components/Navbar'
import LP from './components/LoginPage'
import Hero from './components/Hero'
import Food from './components/Food'
import SignupPage from './components/SignupPage'


export default function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Food/>
      <LP/>
      <SignupPage/>
    </div>
  )
}


