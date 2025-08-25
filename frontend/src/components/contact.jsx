import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ui/contactform";
import HowWeWork from "./ui/homewework";

const Contact = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden max-w-5xl mx-auto my-10">
      {/* Left Section */}
      <div className="bg-red-50 p-8 flex-1">
        <p className="text-red-700 uppercase font-semibold tracking-wide mb-2">
          Contact Us
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-6">
          Feel free to reach out to us for any queries or assistance.  
          We're here to help you.
        </p>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-700 text-white p-3 rounded-full">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Address</h4>
              <p className="text-gray-600 text-sm">
                Vatsalaya Homeland, Plot no. 18, Jaisinghpura, Bhankrota, Jaipur, 302026
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-700 text-white p-3 rounded-full">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Call Us</h4>
              <p className="text-gray-600 text-sm">+91 9828107380</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-700 text-white p-3 rounded-full">
              <FaEnvelope size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Send Message</h4>
              <p className="text-gray-600 text-sm">cavikashsaini@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="flex-1">
        <img
          src="/contact.jpg"
          alt="Contact"
          className="w-full h-[500px]  object-cover rounded-r-2xl"
        />
      </div>
    </div>
    <HowWeWork/>
    <ContactForm/>
    </>

  );
};

export default Contact;
