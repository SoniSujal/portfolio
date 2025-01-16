import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Allow only numeric values
      if (!/^\d*$/.test(value)) return; // Reject non-numeric input
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Form submitted successfully!');

    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-700 dark:text-gray-300">
        Get In Touch
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg relative overflow-hidden"
      >
        {/* Floating Circles for Decoration */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-400 opacity-20 rounded-full animate-pulse"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black">
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
            />
          </div>

          <div className="relative text-black">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="relative mt-6 text-black">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
          />
        </div>

        <div className="relative mt-6 text-black">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full mt-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all shadow-md"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
