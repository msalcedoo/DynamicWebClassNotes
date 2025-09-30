import { Routes, Route } from 'react-router-dom'

import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<ButtonPage />} />
            <Route path="/accordian" element={<AccordionPage />} />
            <Route path="/dropdown" element={<DropdownPage />} />
          </Routes>
      </div>
    </div>
  )
}

export default App
