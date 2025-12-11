"use client";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Icons, { Back } from "../components/icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="px-2 md:px-4 lg:px-8 flex justify-center align-center w-screen "
    >
      <div className="container mx-auto  sm:w-[calc(100%-20px)] md:w-5/6 h-[calc(100vh-105px)] overflow-y-auto  pb-4 px-4 lg:px-8 shadow-2xl shadow-black   z-50 rounded-lg">
        <h2
          className={`text-2xl lg:text-3xl md:text-4xl font-bold text-center mb-4 lg:mb-10 md:mt-2  ${
            theme === "light" ? "text-gray-800" : "text-white"
          } `}
        >
          Get In <span className="text-[var(--main-color)]">Touch</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 bg-[var(--dark-bg)] p-8 rounded-xl shadow-lg">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Contact Info
            </h3>

            <ContactInfoItem
              icon={
                <svg
                  className="w-6 h-6 text-[#6c63ff]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
              title="Email"
              value="mohamedalshaie925@gmail.com"
            />

            <ContactInfoItem
              icon={
                <svg
                  className="w-6 h-6 text-[#6c63ff]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
              title="Phone"
              value="+201032721974"
            />
            <ContactInfoItem
              icon={
                <svg
                  className="w-6 h-6 text-[#6c63ff]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
              title="Location"
              value="6th of October, Egypt"
            />
            <Icons />
          </div>

          <div className="lg:w-1/2 bg-[var(--dark-bg)]  p-8 rounded-xl shadow-lg">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-white">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6c63ff] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6c63ff] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6c63ff] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--main-color)] hover:bg-[var(--dark-bg)] text-white font-medium py-2 px-4 rounded-lg transition duration-300 hover:border-1 border-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="absolute bottom-5 left-1 md:left-30 ">
          <Back back="Projects" />
        </div>
      </div>
    </section>
  );
}

const ContactInfoItem = ({ icon, title, value }) => (
  <div className="flex items-start mb-8">
    <div className="bg-purple-100 dark:bg-gray-700 p-3 rounded-full mr-4">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-white">{title}</h4>
      <p className="text-gray-400">{value}</p>
    </div>
  </div>
);
