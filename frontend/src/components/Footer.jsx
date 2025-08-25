// src/components/Footer.jsx
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a0d0d] text-white py-12 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="mb-3">
            <img
              src="/logo.png"
              alt="Tax Kundali Logo"
              className="h-20 w-auto"
            />
          </div>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/cavikashsaini?igsh=MWQ5a2Iydzg5ZXV4aw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-red-700 rounded-full hover:bg-red-800 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/17DPhjmXqA/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-red-700 rounded-full hover:bg-red-800 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-red-700 rounded-full hover:bg-red-800 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com/@cavikashsaini?si=vCgFblpBg8WGvx_2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-red-700 rounded-full hover:bg-red-800 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Address & Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Head Office</h3>
          <p className="text-gray-400">
            Vatsalaya Homeland, Plot no. 18, <br />
            Jaisinghpura, Bhankrota, Jaipur, 302026
          </p>
          <h3 className="font-semibold text-lg mt-4 mb-2">Contact</h3>
          <p className="text-gray-400 flex items-center space-x-2">
            <FaPhoneAlt /> <span>9828107380</span>
          </p>
          <p className="text-gray-400 flex items-center space-x-2">
            <FaEnvelope /> <span>cavikashsaini@gmail.com</span>
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Insurance Tax</li>
            <li>Strategic Planning</li>
            <li>Audit & Assurance</li>
            <li>Financial Planning</li>
            <li>Tax Management</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Career</li>
            <li>Help Center</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm text-center gap-3">
        <p>
          © 2024 All Rights Reserved <span className="text-white font-semibold">Tax Kundali</span>
        </p>
        <p>
          Designed by <span className="text-red-500 font-semibold">Tax Kundali</span>
        </p>
      </div>
    </footer>
  );
}
