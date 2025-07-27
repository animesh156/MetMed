import { FaQuoteLeft } from "react-icons/fa";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Ananya Sharma",
    feedback:
      "This platform made it so easy to book a consultation. The doctor was professional and kind. Highly recommend!",
    role: "Patient",
  },
  {
    name: "Dr. Rajeev Mehta",
    feedback:
      "Managing appointments is now seamless. The platform helps me focus more on my patients.",
    role: "Cardiologist",
  },
  {
    name: "Rohan Kapoor",
    feedback:
      "Very user-friendly and fast. Got my appointment confirmed within minutes.",
    role: "Patient",
  },
];

export default function Testimonials() {
  return (
    <section className="mt-24 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn direction="down">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-white">
            What Our Users Say
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Hear from doctors and patients who trust our platform
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <FadeIn
              key={index}
              direction="up"
              className="h-full"
              distance={40}
            >
              <div className="bg-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all h-full">
                <FaQuoteLeft className="text-yellow-400 text-2xl mb-4" />
                <p className="text-gray-400 mb-4">"{item.feedback}"</p>
                <div className="font-semibold text-white">{item.name}</div>
                <div className="text-sm text-gray-300">{item.role}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
