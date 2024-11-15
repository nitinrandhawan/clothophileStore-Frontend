import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, like sending data to a backend server or an email
    console.log('Form Data:', formData);
    alert('Your message has been sent!');
  };

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-gray-700 text-center mb-8">
        Have a question, concern, or just want to say hi? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
