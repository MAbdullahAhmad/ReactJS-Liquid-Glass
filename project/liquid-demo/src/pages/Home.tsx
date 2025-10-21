import { useRef } from "react";
import Header from "../components/Header";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="font-sans bg-gray-950 text-gray-100" ref={containerRef}>
      <Header containerRef={containerRef} />


      {/* Hero */}
      <section className="pt-40 bg-gray-900 py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg mb-6 text-gray-300">
            We build modern digital experiences that make a difference.
          </p>
          <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-800 text-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Design", "Development", "Marketing"].map((item) => (
              <div
                key={item}
                className="p-6 border border-gray-700 rounded-lg bg-gray-900 shadow hover:shadow-gray-700"
              >
                <h3 className="text-xl font-bold mb-2">{item}</h3>
                <p className="text-gray-400">
                  High-quality {item.toLowerCase()} solutions tailored for your business.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-950 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            We’re a passionate team delivering creative and technical excellence across all our projects.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-gray-900 text-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-lg overflow-hidden shadow-lg shadow-gray-800"
              >
                <img
                  src={`https://picsum.photos/400/250?random=${n}`}
                  alt="Portfolio"
                  className="w-full opacity-90 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-800 text-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
          <ul className="space-y-4 text-gray-300">
            <li>⚡ Lightning Fast</li>
            <li>🔒 Secure & Reliable</li>
            <li>📱 Responsive Design</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-950 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">What Clients Say</h2>
          <blockquote className="max-w-2xl mx-auto italic text-gray-400">
            “Amazing experience working with this team!”
          </blockquote>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-900 text-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Basic", "Pro", "Enterprise"].map((plan) => (
              <div
                key={plan}
                className="p-6 border border-gray-700 rounded-lg bg-gray-800 hover:bg-gray-700"
              >
                <h3 className="text-xl font-bold mb-2">{plan}</h3>
                <p className="mb-4 text-gray-400">$99/month</p>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-200">
                  Choose
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-gray-950 text-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">From Our Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700"
              >
                <h3 className="text-xl font-bold mb-2">Article {n}</h3>
                <p className="text-gray-400">
                  Read insights about web design, development, and digital trends.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-6 text-gray-300">
            We’d love to hear from you! Get in touch today.
          </p>
          <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-200">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
