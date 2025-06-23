import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { PiBoneBold } from "react-icons/pi";
import { MdChildCare } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import CountUp from "react-countup";

import Footer from "../components/Footer";
import { LuBrain } from "react-icons/lu";

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
      icon: <FaRegHeart className=" text-red-600" />,
      color: "bg-red-600",
    },

    {
      title: "Ophthalmology",
      description:
        "Complete eye care services including vision correction and eye surgery.",
      icon: <FaRegEye className=" text-green-600" />,
      color: "bg-green-600",
    },

    {
      title: "Pediatrics",
      description:
        "Compassionate pediatric care focusing on the health and well-being of children from infancy to adolescence.",
      icon: <MdChildCare className=" text-yellow-600" />,
      color: "bg-yellow-600",
    },

    {
      title: "Neurology",
      description:
        "Specialized care for neurological disorders, ensuring accurate diagnosis and effective treatment plans.",
      icon: <LuBrain className=" text-blue-600" />,
      color: "bg-blue-600",
    },

    {
      title: "Orthopedics",
      description:
        "Expert orthopedic services for bone, joint, and muscle health, including surgical and non-surgical options.",
      icon: <PiBoneBold className=" text-orange-600" />,
      color: "bg-orange-600",
    },
    {
      title: "Gynecology",
      description:
        "Comprehensive gynecological care, including routine check-ups, prenatal care, and specialized treatments.",
      icon: <FaStethoscope className=" text-purple-600" />,
      color: "bg-purple-600",
    },
  ];

  const features = [
    {
      title: "Easy Appointment Booking",
      description:
        "Schedule appointments with just a few clicks, anytime, anywhere.",
      icon: <CiCalendar className=" text-blue-600" />,
      color: "bg-blue-600",
    },
    {
      title: "Telemedicine Consultations",
      description:
        "Consult with certified doctors via secure video calls from the comfort of your home.",
      icon: <IoMdTime className=" text-green-600" />,
      color: "bg-green-600",
    },
    {
      title: "Health Records Management",
      description:
        "Access and manage your health records securely and conveniently.",
      icon: <MdOutlineSecurity className=" text-yellow-600" />,
      color: "bg-yellow-600",
    },
    {
      title: "24/7 Support",
      description:
        "Get assistance anytime with our dedicated support team available around the clock.",
      icon: <FaPhoneAlt className=" text-red-600" />,
      color: "bg-red-600",
    },
  ];

  return (
    <div className="min-h-screen  dark:text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="h-dvh m-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-white font-extrabold text-center mb-6">
          Welcome to <span className="text-blue-600">MetMed</span>
        </h1>

        <p className="text-lg md:text-xl text-center max-w-2xl text-gray-300 mb-10">
          Experience world-class healthcare with our team of expert doctors.
          Book appointments online and get the care you deserve.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
          >
            Book an Appointment
          </button>
        
        </div>

        {/* Stats with Icons */}
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          <div className=" bg-neutral-800 text-center rounded-lg px-6 py-5 shadow-md">
            <MdOutlineSecurity className="text-4xl text-blue-500 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white">
              <CountUp end={25} duration={2} />+
            </h3>
            <p className="dark:text-gray-400">Certified Doctors</p>
          </div>

          <div className="bg-neutral-800 text-center rounded-lg px-6 py-5 shadow-md">
            <FaRegHeart className="text-4xl text-red-500 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white">
              <CountUp end={1200} duration={2} />+
            </h3>
            <p className="dark:text-gray-400">Happy Patients</p>
          </div>

          <div className="bg-neutral-800 text-center rounded-lg px-6 py-5 shadow-md">
            <CiCalendar className="text-4xl text-green-500 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white">24/7</h3>
            <p className="dark:text-gray-400">Availability</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-center text-blue-600 font-bold text-4xl">
          Our Medical Services
        </h1>

        <p className="text-center text-white mt-5 font-semibold text-2xl">
          We provide comprehensive healthcare services with state-of-the-art
          facilities and experienced medical professionals across various
          specialties.
        </p>

        <div className="flex flex-wrap gap-5 justify-center mt-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group w-80 m-4 bg-neutral-900 rounded-lg shadow-xl overflow-hidden"
            >
              {/* Fill bar at the bottom */}
              <div
                className={`
        absolute bottom-0 left-0 h-1 w-0 
        ${service.color}
        transition-all duration-500 ease-in-out 
        group-hover:w-full`}
              />

              <div className="relative z-10 p-6">
                <div className="flex justify-center items-center mb-4">
                  <span className="text-3xl text-blue-300 mr-2">
                    {service.icon}
                  </span>
                </div>
                <h2 className="text-center text-xl font-semibold text-blue-400">
                  {service.title}
                </h2>
                <p className="text-white">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 mb-6 text-center">
        <h1 className="text-4xl text-blue-600 font-bold">
          Meet Our Expert Doctors
        </h1>

        <p className="mt-8 text-white text-xl font-semibold">
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
              <p className=" mb-2">{doctor.specialty}</p>
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

      <div className="text-center mt-40">
        <h1 className="text-5xl text-blue-600 font-bold">
          Ready to Book Your Appointment?
        </h1>
        <p className="text-xl text-white mt-8 font-semibold">
          Take the first step towards better health. Our easy booking system
          lets you schedule <br></br> appointments with our expert doctors in
          just a few clicks.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group w-72 m-4 bg-neutral-900 rounded-lg shadow-xl overflow-hidden"
            >
              {/* Bottom fill animation bar */}
              <div
                className={
`  absolute bottom-0 left-0 h-1 w-0 
        ${feature.color}
        transition-all duration-500 ease-in-out 
        group-hover:w-full`
                }
      
      
              />

              {/* Content goes above the animated bar */}
              <div className="relative z-10 p-6">
                <div className="flex justify-center items-center mb-4">
                  <span className="text-3xl text-blue-600 mr-2">
                    {feature.icon}
                  </span>
                </div>
                <h2 className="text-center text-xl font-semibold text-blue-600">
                  {feature.title}
                </h2>
                <p className="text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-md shadow-md transition mb-10">
          Book Your Appointment Now
        </button>

        <p className="text-sm text-white md:text-base font-semibold">
          🚨 Emergency: <span className="underline">(555) 911-HELP</span> | Or
          call us at: <span className="underline">(555) 123-4567</span>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
