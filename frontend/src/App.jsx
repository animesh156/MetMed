import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import PatientDashBaord from "./pages/patient/DashBoard";
import AdminDashBaord from "./pages/admin/DashBoard";
import DoctorDashBaord from "./pages/doctor/DashBoard";
import PatientAppointment from "./pages/patient/Appointment";
import BookAppointment from "./pages/patient/BookAppointment";
import NotFound from "./pages/NotFound";
import PatientHistory from "./pages/patient/History";
import AvailableDoctors from "./pages/patient/Doctors";
import PatientSetting from "./pages/patient/PatientSetting";
import DoctorSchedule from "./pages/doctor/Schedule";
import DoctorAvailbility from "./pages/doctor/Availability";
import DoctorEarning from "./pages/doctor/EarningReport";
import DoctorHistory from './pages/doctor/History'
import DoctorVerify from './pages/admin/DoctorVerification';
import PatientList from "./pages/admin/PatientList";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient/dashboard" element={<PatientDashBaord />} />
        <Route path="/patient/appointment" element={<PatientAppointment />} />
        <Route path="/patient/book" element={<BookAppointment />} />
        <Route path="/patient/history" element={<PatientHistory />} />
        <Route path="/patient/doctors" element={<AvailableDoctors />} />
        <Route path="/patient/settings" element={<PatientSetting />} />

        <Route path="/admin/dashboard" element={<AdminDashBaord />} />
         <Route path="/admin/verify" element={<DoctorVerify />} />
          <Route path="/admin/patient-list" element={<PatientList />} />

        <Route path="/doctor/dashboard" element={<DoctorDashBaord />} />
        <Route path="/doctor/schedule" element={<DoctorSchedule />} />
        <Route path="/doctor/availability" element={<DoctorAvailbility />} />
         <Route path="/doctor/earning" element={<DoctorEarning />} />
          <Route path="/doctor/history" element={<DoctorHistory />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
