import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WikiPage from './pages/WikiPage'
import EditPage from './pages/EditPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wiki/:pageTitle" element={<WikiPage />} />
      <Route path="/edit/:pageTitle" element={<EditPage />} />
    </Routes>
  )
}

export default App