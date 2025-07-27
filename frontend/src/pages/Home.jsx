import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaRegHeart,
  FaVideo,
  FaPhoneAlt,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { PiBoneBold } from "react-icons/pi";
import { MdChildCare, MdOutlineSecurity } from "react-icons/md";
import { CiCalendar, CiStethoscope } from "react-icons/ci";
import { LuBrain } from "react-icons/lu";
import CountUp from "react-countup";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import Testimonials from "../components/Testiomonials";
import Navbar from "../components/Navbar";

function Home() {
 
  const navigate = useNavigate();

  const doctors = [
    {
      name: "Dr. John Doe",
      specialty: "Cardiology",
      image:
        "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000",
      description: "Experienced cardiologist with over 10 years in the field.",
      rating: 3.8,
    },
    {
      name: "Dr. Jane Smith",
      specialty: "Dermatology",
      image:
        "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000",
      description:
        "Expert in skin conditions with a patient-centered approach.",
      rating: 4.7,
    },
    {
      name: "Dr. Emily Johnson",
      specialty: "Pediatrics",
      image:
        "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000",
      description: "Caring pediatrician dedicated to children's health.",
      rating: 2.7,
    },
  ];

  const services = [
    {
      title: "Cardiology",
      description:
        "Comprehensive heart care and cardiovascular treatments from our expert cardiologists.",
      icon: <FaRegHeart className="text-red-600" />,
      color: "bg-red-600",
    },
    {
      title: "Ophthalmology",
      description:
        "Comprehensive eye care services, from routine vision correction to advanced eye surgeries.",
      icon: <FaRegEye className="text-green-600" />,
      color: "bg-green-600",
    },
    {
      title: "Pediatrics",
      description:
        "Compassionate pediatric care focusing on  health and well-being of children from infancy to adolescence.",
      icon: <MdChildCare className="text-yellow-600" />,
      color: "bg-yellow-600",
    },
    {
      title: "Neurology",
      description:
        "Specialized care for neurological disorders, ensuring accurate diagnosis and effective treatment plans.",
      icon: <LuBrain className="text-blue-600" />,
      color: "bg-blue-600",
    },
    {
      title: "Orthopedics",
      description:
        "Expert orthopedic services for bone, joint, and muscle health, including surgical and non-surgical options.",
      icon: <PiBoneBold className="text-orange-600" />,
      color: "bg-orange-600",
    },
    {
      title: "Gynecology",
      description:
        "Comprehensive gynecological care, including routine check-ups, prenatal care, and specialized treatments.",
      icon: <FaStethoscope className="text-purple-600" />,
      color: "bg-purple-600",
    },
  ];

  const features = [
    {
      title: "Easy Appointment Booking",
      description:
        "Schedule appointments with just a few clicks, anytime, anywhere.",
      icon: <CiCalendar className="text-blue-600" />,
      color: "bg-blue-600",
    },
    {
      title: "Video Consultations",
      description: "Consult doctors securely from home via video call.",
      icon: <FaVideo className="text-green-600" />,
      color: "bg-green-600",
    },
    {
      title: "Health Records Management",
      description:
        "Access and manage your health records securely and conveniently.",
      icon: <MdOutlineSecurity className="text-yellow-600" />,
      color: "bg-yellow-600",
    },
    {
      title: "24/7 Support",
      description: "Get help anytime from our 24/7 support team.",
      icon: <FaPhoneAlt className="text-red-600" />,
      color: "bg-red-600",
    },
    {
      title: "Review System",
      description:
        "Transparent rating and review system to build trust and improve care quality",
      icon: <FaStar className="text-yellow-500" />,
      color: "bg-yellow-500",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Create Account",
      description:
        "Sign up as a patient or doctor with our secure authentication system",
    },
    {
      id: 2,
      title: "Book or Accept",
      description:
        "Patients book appointments, doctors manage their availability and accept bookings",
    },
    {
      id: 3,
      title: "Connect & Care",
      description:
        "Join secure video consultations and provide or receive quality healthcare",
    },
  ];

  return (
    <div className=" dark:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-x-hidden">
     

      {/* Hero section */}
      <section className="h-dvh mt-12  flex flex-col items-center justify-center">
        <FadeIn direction="right">
          <h1 className="text-4xl md:text-6xl text-gray-100 font-bold tracking-tight text-center">
            Healthcare Made <span>Simple</span> &{" "}
            <span className="text-primary">Accessible</span>
          </h1>
        </FadeIn>

        <FadeIn direction="left">
          <p className="text-lg md:text-xl mt-7 text-center max-w-2xl text-gray-300 mb-10">
            Connect with verified doctors through secure video consultations.
            Book appointments, track earnings, and manage your healthcare
            journey all in one platform.
          </p>
        </FadeIn>

        <FadeIn direction="up">
          <div className="flex gap-5 justify-center mb-14">
            <button
              onClick={() => navigate("/login")}
              className="bg-gray-100 hover:bg-gray-200 active:scale-95 font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Book Consultation <CiCalendar className="text-xl" />
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-neutral-800 hover:bg-neutral-700 text-white active:scale-95 font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Join as Doctor <CiStethoscope className="text-xl" />
            </button>
          </div>
        </FadeIn>

        <FadeIn direction="up">
          <div className="flex flex-wrap justify-center gap-8 mt-4">
            <div className="bg-neutral-800 text-center rounded-lg px-6 py-5 shadow-md">
              <MdOutlineSecurity className="text-4xl text-blue-500 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white">
                <CountUp end={30} duration={2} />+
              </h3>
              <p className="text-gray-400">Certified Doctors</p>
            </div>

            <div className="bg-neutral-800 text-center rounded-lg px-6 py-5 shadow-md">
              <FaRegHeart className="text-4xl text-red-500 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white">
                <CountUp end={1200} duration={2} />+
              </h3>
              <p className="text-gray-400">Happy Patients</p>
            </div>

            <div className="bg-neutral-800 text-center rounded-lg px-6 py-5 shadow-md">
              <CiCalendar className="text-4xl text-green-500 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white">24/7</h3>
              <p className="text-gray-400">Availability</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Services */}
      <section className="mt-20" id="services">
        <FadeIn direction="left">
          <h2 className="text-center text-white font-bold text-5xl">
            Our Medical Services
          </h2>
          <p className="mx-auto max-w-[400px] text-gray-400 mt-5 font-semibold text-lg text-center">
            We provide comprehensive healthcare services with experienced
            professionals.
          </p>
        </FadeIn>

        <div className="flex flex-wrap justify-center mt-8 mb-12">
          {services.map((service, index) => (
            <FadeIn direction="left" key={index}>
              <div className="w-80 m-4 bg-neutral-900 rounded-lg shadow-xl overflow-hidden relative group">
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 ${service.color} transition-all duration-500 group-hover:w-full`}
                />
                <div className="relative z-10 p-6">
                  <div className="flex justify-center items-center mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-blue-400 text-center">
                    {service.title}
                  </h2>
                  <p className="text-white text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-neutral-900">
        <div className="container">
          {/* Heading */}
          <FadeIn direction="left" className="text-center space-y-4 mb-16">
            <h2 className="text-3xl text-white md:text-4xl font-bold">
              Simple Steps to Better Healthcare
            </h2>
            <p className="text-xl text-gray-400 text-muted-foreground max-w-[600px] mx-auto">
              Get started with our platform in just a few easy steps
            </p>
          </FadeIn>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <FadeIn
                direction="up"
                key={step.id}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl font-bold mx-auto">
                  {step.id}
                </div>
                <h3 className="text-xl text-white font-semibold">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="text-center mt-40" id="features">
        <FadeIn direction="right">
          <h2 className="text-4xl text-white font-bold">
            Everything You Need for Modern Healthcare
          </h2>
          <p className="text-xl mx-auto max-w-[600px] text-gray-400 mt-8 font-semibold">
            Our platform offers everything needed for seamless healthcare
            delivery.
          </p>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12">
          {features.map((feature, index) => (
            <FadeIn direction="right" key={index}>
              <div className="relative group w-80 m-4 bg-neutral-900 rounded-lg shadow-xl overflow-hidden">
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 ${feature.color} transition-all duration-500 group-hover:w-full`}
                />
                <div className="p-6">
                  <div className="flex justify-center items-start mb-4">
                    {feature.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h2>
                  <p className="text-gray-400 mt-2">{feature.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="right">
          <button
            onClick={() => navigate("/login")}
            className="bg-gray-100 mx-auto hover:bg-gray-200 font-semibold px-6 py-3 rounded-md shadow-md flex items-center gap-2"
          >
            Book Consultation <CiCalendar className="text-xl" />
          </button>
        </FadeIn>
      </section>

      {/* Doctors */}
      <section className="mt-32 mb-6 text-center">
        <FadeIn direction="left">
          <h1 className="text-4xl text-white font-bold">
            Meet Our Expert Doctors
          </h1>
          <p className="mt-6 text-gray-400 max-w-[600px] mx-auto text-xl font-semibold">
            Our team of doctors brings years of experience and care.
          </p>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {doctors.map((doctor, index) => (
            <FadeIn direction="left" key={index}>
              <div className="bg-neutral-800 w-80 p-6 rounded-lg shadow-md mt-8">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl text-white font-semibold mb-2">
                  {doctor.name}
                </h3>
                <p className="text-gray-200 text-sm mb-2">{doctor.specialty}</p>
                <p className="text-gray-400 mb-4">{doctor.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-yellow-500 font-bold mr-2">
                    {doctor.rating.toFixed(1)}
                  </span>
                  {[...Array(5)].map((_, i) =>
                    i < Math.round(doctor.rating) ? (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ) : (
                      <FaRegStar key={i} className="text-yellow-400 text-sm" />
                    )
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
