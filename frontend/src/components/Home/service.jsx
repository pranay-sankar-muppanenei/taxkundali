import React from "react";
import {
  FaBook,
  FaMoneyCheckAlt,
  FaFileInvoiceDollar,
  FaClipboardCheck,
  FaChartLine,
  FaLaptopCode,
  FaUsersCog,
  FaUserTie,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaBook className="text-4xl text-red-700" />,
      title: "Bookkeeping",
      desc: "Accurate and reliable bookkeeping to keep your finances organized and updated.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-4xl text-red-700" />,
      title: "Payroll Services",
      desc: "Seamless payroll processing ensuring timely salary disbursement and compliance.",
    },
    {
      icon: <FaFileInvoiceDollar className="text-4xl text-red-700" />,
      title: "Tax Planning",
      desc: "Strategic tax planning to minimize liabilities and maximize financial efficiency.",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-red-700" />,
      title: "Audit & Assurance",
      desc: "Comprehensive audits to build trust, transparency, and accountability.",
    },
    {
      icon: <FaChartLine className="text-4xl text-red-700" />,
      title: "Financial Statement",
      desc: "Detailed financial reports to help you analyze and make informed decisions.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-red-700" />,
      title: "Tech Consulting",
      desc: "Leveraging technology to improve financial processes and business growth.",
    },
    {
      icon: <FaUsersCog className="text-4xl text-red-700" />,
      title: "Business Advisory",
      desc: "Expert guidance to help businesses grow, adapt, and succeed sustainably.",
    },
    {
      icon: <FaUserTie className="text-4xl text-red-700" />,
      title: "Outsourced CFO",
      desc: "Professional CFO services to manage your finances without full-time costs.",
    },
  ];

  return (
    <section className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex justify-between items-center flex-wrap mb-12">
          <div>
            <p className="uppercase text-red-700 font-semibold mb-2">
              What We Offer
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Innovative Strategies for Tax Prosperity
            </h2>
            <p className="text-gray-600 max-w-xl">
              We provide a wide range of accounting, tax, and financial
              management services to help individuals and businesses achieve
              financial clarity and growth.
            </p>
          </div>
          <button className="px-6 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition mt-6 md:mt-0">
            View Services
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-red-100 rounded-full p-6">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <a
                href="#"
                className="text-red-700 font-semibold hover:underline flex items-center justify-center space-x-1"
              >
                <span>Learn More</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
