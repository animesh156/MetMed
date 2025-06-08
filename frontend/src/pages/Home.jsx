import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  const doctors = [
    {
      name: "Dr. John Doe",
      specialty: "Cardiology",
      image:
        "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww",
      description: "Experienced cardiologist with over 10 years in the field.",
      rating: 4.8,
    },
    {
      name: "Dr. Jane Smith",
      specialty: "Dermatology",
      image:
        "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww",
      description:
        "Expert in skin conditions with a patient-centered approach.",
      rating: 4.7,
    },
    {
      name: "Dr. Emily Johnson",
      specialty: "Pediatrics",
      image:
        "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww",
      description: "Caring pediatrician dedicated to children's health.",
      rating: 4.9,
    },
  ];

  const services = [
    {
      title: "Cardiology",
      description:
        "Comprehensive heart care and cardiovascular treatments from our expert cardiologists.",
    },

    {
      title: "Dermatology",
      description:
        "Advanced skin care solutions for all dermatological conditions, provided by our skilled dermatologists.",
    },

    {
      title: "Pediatrics",
      description:
        "Compassionate pediatric care focusing on the health and well-being of children from infancy to adolescence.",
    },

    {
      title: "Neurology",
      description:
        "Specialized care for neurological disorders, ensuring accurate diagnosis and effective treatment plans.",
    },

    {
      title: "Orthopedics",
      description:
        "Expert orthopedic services for bone, joint, and muscle health, including surgical and non-surgical options.",
    },
    {
      title: "Gynecology",
      description:
        "Comprehensive gynecological care, including routine check-ups, prenatal care, and specialized treatments.",
    },
  ];

  const features = [
    {
      title: "Easy Appointment Booking",
      description:
        "Schedule appointments with just a few clicks, anytime, anywhere.",
    },
    {
      title: "Telemedicine Consultations",
      description:
        "Consult with certified doctors via secure video calls from the comfort of your home.",
    },
    {
      title: "Health Records Management",
      description:
        "Access and manage your health records securely and conveniently.",
    },
    {
      title: "24/7 Support",
      description:
        "Get assistance anytime with our dedicated support team available around the clock.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 py-12">
      <hero className="h-dvh m-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6">
          Welcome to <span className="text-blue-600">MetMed</span>
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl text-gray-300 mb-10">
         Experience world-class healthcare with our team of expert doctors. Book appointments online and get the care you deserve.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-14">
          <button
            onClick={() => navigate("/patient/dashboard")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
          >
            Patient Portal
          </button>
          <button
            onClick={() => navigate("/doctor/dashboard")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
          >
            Doctor Portal
          </button>
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
          >
            Admin Panel
          </button>
        </div>
      </hero>

      <div>
        <h1 className="text-center text-blue-600 font-bold text-4xl">
          Our Medical Services
        </h1>

        <p className="text-center mt-5 font-semibold text-2xl">
          We provide comprehensive healthcare services with state-of-the-art
          facilities and experienced medical professionals across various
          specialties.
        </p>

        <div className="flex flex-wrap gap-5  justify-center mt-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-neutral-800 rounded-lg shadow-xl w-80 m-4"
            >
              <div className="card-body">
                <h2 className="card-title text-blue-600">{service.title}</h2>
                <p>{service.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 mb-6 text-center">
        <h1 className="text-4xl text-blue-600 font-bold">
          Meet Our Expert Doctors
        </h1>

        <p className="mt-8 text-xl font-semibold">
          Our team of highly qualified doctors brings years of experience and
          dedication to providing exceptional healthcare services.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-neutral-800 w-80 p-6 rounded-lg shadow-md mt-8"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl text-blue-600 font-semibold mb-2">
                {doctor.name}
              </h3>
              <p className="text-gray-400 mb-2">{doctor.specialty}</p>
              <p className="text-gray-300 mb-4">{doctor.description}</p>
              <div className="flex items-center">
                <span className="text-yellow-400 font-bold mr-2">
                  {doctor.rating}
                </span>
                <span className="text-gray-500">★ ★ ★ ★ ★</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-20">
        <h1 className="text-5xl text-blue-600 font-bold">Ready to Book Your Appointment?</h1>
        <p className="text-xl mt-8 font-semibold">
          Take the first step towards better health. Our easy booking system
          lets you schedule <br></br> appointments with our expert doctors in just a few
          clicks.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-neutral-800 rounded-lg shadow-xl w-72 m-4"
            >
              <div className="card-body">
                <h2 className="card-title text-blue-600">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-md shadow-md transition mb-10">
            Book Your Appointment Now
        </button>
        
        <p className="text-sm md:text-base font-semibold">
        🚨 Emergency: <span className="underline">(555) 911-HELP</span> | Or call us at: <span className="underline">(555) 123-4567</span>
      </p>



      </div>

     

         <Footer />

   

       

    </div>
  );
}

export default Home;
