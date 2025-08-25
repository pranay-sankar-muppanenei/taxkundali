import React from "react";

const CaseStudies = () => {
  const cases = [
    {
      category: "GST Case Study",
      title: "GST Compliance Rescue for a Retail Business",
      desc: "A growing retail company faced penalties due to irregular GST filings. We streamlined their return process, rectified past errors, and set up a monthly compliance system — saving them from ₹3.5 lakh in potential fines.",
      image: "/case1.jpg",
    },
    {
      category: "International Taxation Case Study",
      title: "Double Taxation Avoided for an NRI Consultant",
      desc: "An NRI consultant was being taxed in both India and the UK. We analyzed DTAA provisions and structured his income to ensure taxation in only one jurisdiction, legally saving over ₹5 lakh in taxes.",
      image: "/case2.jpg",
    },
  
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex justify-between items-center flex-wrap mb-12">
          <div>
            <p className="uppercase text-red-700 font-semibold mb-2">
              Case Studies
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Navigating Taxes, Shaping Success
            </h2>
            <p className="text-gray-600 max-w-xl">
              Real-world solutions where we helped businesses and individuals
              overcome tax and compliance challenges successfully.
            </p>
          </div>
          <button className="px-6 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition mt-6 md:mt-0">
            View All Cases
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="relative hover:scale-102 hover:rotate-1 rounded-2xl overflow-hidden shadow-md group h-72 flex items-end"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay Card */}
              <div className="w-full bg-black/60 p-6 backdrop-blur-sm">
                <p className="text-sm uppercase text-gray-200 font-semibold tracking-wide mb-2">
                  {item.category}
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
