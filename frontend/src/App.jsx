import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import PatientDashBaord from './pages/patient/DashBoard'
import AdminDashBaord from './pages/admin/DashBoard'
import DoctorDashBaord from './pages/doctor/DashBoard'
import PatientAppointment from './pages/patient/Appointment'
import BookAppointment from "./pages/patient/BookAppointment";
import NotFound from "./pages/NotFound";
import PatientHistory from './pages/patient/History'
import AvailableDoctors from './pages/patient/Doctors'
import PatientSetting from "./pages/patient/PatientSetting";

function App() {
 

  return (
   <Router>

    <Routes>
      <Route path="/patient/dashboard" element={<PatientDashBaord />} />
       <Route path="/patient/appointment" element={<PatientAppointment />} />
        <Route path="/patient/book" element={<BookAppointment />} />
         <Route path="/patient/history" element={<PatientHistory />} />
          <Route path="/patient/doctors" element={<AvailableDoctors />} />
          <Route path="/patient/settings" element={<PatientSetting />} />


      <Route path="/admin/dashboard" element={<AdminDashBaord />} />
       <Route path="/doctor/dashboard" element={<DoctorDashBaord />} />

       <Route path="*" element={<NotFound />} />
    </Routes>

    </Router>
  )
}

export default App
