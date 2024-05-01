import React from 'react'
import Basic_hooks from './Pages/Basic_hooks'
import CRUD from './Pages/CRUD'
import Data_display from './Pages/Data_display'
import Data_manipulation from './Pages/Data_manipulation'
import Data_selection from './Pages/Data_selection'
import Forms from './Pages/Forms'
import Image_handling from './Pages/Image_handling'
import Master_rrdom from './Pages/Master_rrdom'
import State_propagation from './Pages/State_propagation'
import Styling from './Pages/Styling'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <section>
      <Router>
        <Routes>
          <Route path ='/' element={<Layout/>}>
            <Route path ='/Hooks' element={<Basic_hooks/>}></Route>
            <Route path ='/Data-display' element={<Data_display/>}></Route>
            <Route path ='/Data-manipulation' element={<Data_manipulation/>}></Route>
            <Route path ='/Data-selection' element={<Data_selection/>}></Route>
            <Route path ='/Forms' element={<Forms/>}></Route>
            <Route path ='/Image-handling' element={<Image_handling/>}></Route>
            <Route path ='/Master-dom' element={<Master_rrdom/>}></Route>
            <Route path ='/State-propagation' element={<State_propagation/>}></Route>
            <Route path ='/Styling' element={<Styling/>}></Route>
            <Route path ='/CRUD' element={<CRUD/>}></Route>
          </Route>
        </Routes>
      </Router>
    </section>
  )
}

export default App