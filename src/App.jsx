import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout'

/* Pages */
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import ToolsLayout from './pages/tools/ToolsLayout'
import Tool1 from './pages/tools/Tool1'
import Tool2 from './pages/tools/Tool2'
import Tool3 from './pages/tools/Tool3'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'

/* Style */
import './App.css'


function App() {
  
  return (
    
    <BrowserRouter className="w3-content" style="max-width:1400px">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="herramientas" element={<ToolsLayout />} />
          <Route path="herramientas/herramienta-1" element={<Tool1 />} />
          <Route path="herramientas/herramienta-2" element={<Tool2 />} />
          <Route path="herramientas/herramienta-3" element={<Tool3 />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
