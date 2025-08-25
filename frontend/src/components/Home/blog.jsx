// src/components/BlogSection.jsx
import { FaCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    category: "Tax Planning",
    date: "September 13, 2024",
    title: "Tax Planning 101: Essential Steps to Take Before Year-End",
    desc: "Aliquam eros odio, mattis a lacus eget, finibus dignissim diam. Vivamus velit...",
    image: "/blog1.jpg",
  },
  {
    id: 2,
    category: "International Taxation",
    date: "September 13, 2024",
    title: "Best Tax Software For Small Business Of September 2024",
    desc: "Aliquam eros odio, mattis a lacus eget, finibus dignissim diam. Vivamus velit...",
    image: "/blog2.jpg",
  },
  {
    id: 3,
    category: "Tax Planning",
    date: "September 13, 2024",
    title: "Tax-Saving Strategies for Freelancers and Gig Workers",
    desc: "Aliquam eros odio, mattis a lacus eget, finibus dignissim diam. Vivamus velit...",
    image: "/blog1.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex justify-between items-center mb-12 flex-wrap">
          <div>
            <p className="uppercase text-red-700 font-semibold mb-2">Blog & News</p>
            <h2 className="text-4xl font-bold text-gray-900 leading-snug">
              Latest News and Blog from <span className="text-red-700">Ritaxes</span>
            </h2>
          </div>
          <button className="px-6 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition mt-6 md:mt-0">
            View More
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-red-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 hover:scale-104 hover:rotate-1 object-cover"
                />
                <span className="absolute top-4 left-4 bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2 text-red-600" />
                  {blog.date}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
