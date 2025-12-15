import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/RegisterPage'
import Login from './components/LoginPage'
import NavBarcomp from './components/NavBarcomp'

function App() {
  return (
    <Router>
      <div>
        <NavBarcomp />
        <div className="container" style={{ marginTop: '80px' }}>
          <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App