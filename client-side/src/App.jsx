
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Auth from './Auth';
function App() {


  return (
   <Routes>
    <Route path='/auth' element={<Auth/>}/>
   </Routes>
  )
}

export default App
