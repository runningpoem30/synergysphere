import { Routes, Route } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}
