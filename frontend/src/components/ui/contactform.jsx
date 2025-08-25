import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      tempErrors.phone = "Enter a valid 10-digit phone number";

    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Enter a valid email address";

    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-10 bg-red-50 p-6 md:p-8 rounded-2xl shadow-md flex flex-col md:flex-row gap-6">
      
      {/* Left Side - Image */}
      <div className="md:w-1/2">
        <img
          src="/sample.jpg" // replace with your image
          alt="Contact Illustration"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6">Send a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:border-red-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:border-red-500"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="flex-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:border-red-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:border-red-500"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-white rounded-xl border border-gray-300 focus:outline-none focus:border-red-500"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-700 text-white p-3 rounded-full hover:bg-red-800 transition duration-200"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
