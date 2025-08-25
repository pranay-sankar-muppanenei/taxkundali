// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1727] text-white py-14 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div>
          <div className="mb-4">
            <img
              src="/logo.png"
              alt="Tax Kundali Logo"
              className="h-20 w-20"
            />
          </div>
          <p className="text-gray-400 leading-relaxed mb-5">
            Empowering individuals and businesses with smart financial solutions and expert tax guidance.
          </p>
          <div className="flex space-x-3">
            {[
              { icon: <FaInstagram />, link: "https://www.instagram.com/cavikashsaini?igsh=MWQ5a2Iydzg5ZXV4aw==" },
              { icon: <FaFacebookF />, link: "https://www.facebook.com/share/17DPhjmXqA/" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaYoutube />, link: "https://youtube.com/@cavikashsaini?si=vCgFblpBg8WGvx_2" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-[#0089FF] to-[#005FCC] hover:scale-110 transition-transform"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Address & Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Head Office</h3>
          <p className="text-gray-400 leading-relaxed">
            Vatsalaya Homeland, Plot no. 18, <br />
            Jaisinghpura, Bhankrota, Jaipur, 302026
          </p>
          <h3 className="font-semibold text-lg mt-6 mb-3 text-white">Contact</h3>
          <p className="text-gray-400 flex items-center gap-2">
            <FaPhoneAlt className="text-[#0089FF]" /> 9828107380
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <FaEnvelope className="text-[#0089FF]" /> cavikashsaini@gmail.com
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition">Insurance Tax</li>
            <li className="hover:text-white transition">Strategic Planning</li>
            <li className="hover:text-white transition">Audit & Assurance</li>
            <li className="hover:text-white transition">Financial Planning</li>
            <li className="hover:text-white transition">Tax Management</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Contact Us</li>
            <li className="hover:text-white transition">Career</li>
            <li className="hover:text-white transition">Help Center</li>
            <li className="hover:text-white transition">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 pt-6 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm text-center gap-3">
        <p>
          © 2024 All Rights Reserved <span className="text-white font-semibold">Tax Kundali</span>
        </p>
        <p>
          Designed by <span className="text-[#0089FF] font-semibold">Tax Kundali</span>
        </p>
      </div>
    </footer>
  );
}
