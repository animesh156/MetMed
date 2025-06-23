import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

import PatientDashBaord from "./pages/patient/DashBoard";
import AdminDashBaord from "./pages/admin/DashBoard";
import DoctorDashBaord from "./pages/doctor/DashBoard";

import BookAppointment from "./pages/patient/BookAppointment";
import NotFound from "./pages/NotFound";
import PatientHistory from "./pages/patient/History";
import AvailableDoctors from "./pages/patient/Doctors";
import PatientSetting from "./pages/patient/PatientSetting";
import DoctorSchedule from "./pages/doctor/Schedule";
import DoctorAvailbility from "./pages/doctor/Availability";
import DoctorEarning from "./pages/doctor/EarningReport";
import DoctorHistory from "./pages/doctor/History";
import DoctorVerify from "./pages/admin/DoctorVerification";
import PatientList from "./pages/admin/PatientList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DoctorSettings from "./pages/doctor/DoctorSettings";
import DoctorProfile from "./pages/doctor/Profile";
import Payment from "./pages/patient/Payment";
import AppointmentSuccess from "./pages/patient/AppointmentSuccess";
import UpcomingAppointment from "./pages/patient/UpcomingAppointment";

function App() {
  return (
    <Router>
      {/* toast for notifcation */}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/patient/dashboard" element={<PatientDashBaord />} />
        <Route path="/patient/book" element={<BookAppointment />} />
        <Route path="/patient/history" element={<PatientHistory />} />
        <Route path="/patient/doctors" element={<AvailableDoctors />} />
        <Route path="/patient/settings" element={<PatientSetting />} />
         <Route path="/patient/payment" element={<Payment />} />
          <Route path="/patient/success" element={<AppointmentSuccess />} />
             <Route path="/patient/appointments" element={<UpcomingAppointment />} />

        <Route path="/admin/dashboard" element={<AdminDashBaord />} />
        <Route path="/admin/verify" element={<DoctorVerify />} />
        <Route path="/admin/patient-list" element={<PatientList />} />

        <Route path="/doctor/dashboard" element={<DoctorDashBaord />} />
        <Route path="/doctor/schedule" element={<DoctorSchedule />} />
        <Route path="/doctor/availability" element={<DoctorAvailbility />} />
        <Route path="/doctor/earning" element={<DoctorEarning />} />
        <Route path="/doctor/history" element={<DoctorHistory />} />
        <Route path="/doctor/settings" element={<DoctorSettings />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
