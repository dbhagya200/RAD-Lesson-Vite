import { useState } from 'react'
import { Navbar } from './view/common/Navbar/Navbar'
import { MainContent } from './view/common/MainContent/MainContent'
import { Footer } from './view/common/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Navbar/>
    <MainContent/>
    <Footer/>
    </>
  )
}

export default App
