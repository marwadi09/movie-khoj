import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GengreMovieList from './components/GenreMovieList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Slider/>
        {/* <ProductionHouse/> */}
        <GengreMovieList/>
      </div>
    </>
  )
}

export default App
