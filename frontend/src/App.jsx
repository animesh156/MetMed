import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import PatientDashBaord from './pages/patient/DashBoard'
import AdminDashBaord from './pages/admin/DashBoard'
import DoctorDashBaord from './pages/doctor/DashBoard'

function App() {
 

  return (
   <Router>

    <Routes>
      <Route path="/patient/dashboard" element={<PatientDashBaord />} />
      <Route path="/admin/dashboard" element={<AdminDashBaord />} />
       <Route path="/doctor/dashboard" element={<DoctorDashBaord />} />
    </Routes>

    </Router>
  )
}

export default App
