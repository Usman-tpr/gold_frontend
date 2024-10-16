import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SellPage from './pages/SellPage'
import SellPageAttributes from './pages/SellPageAttributes'
import SignupPage from './pages/SignupPage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <HomePage />} />
      <Route path='/sell' element = { <SellPage />} />
      <Route path='/sell/form' element = { <SellPageAttributes />} />
      <Route path='/signup' element = { <SignupPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App