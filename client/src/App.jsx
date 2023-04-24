import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import IndexPage from './pages/Indexpage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App
