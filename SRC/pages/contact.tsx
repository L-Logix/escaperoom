import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Form Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically submit the form data to your backend
    console.log(formData);

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <HeroSection 
        title="Contact Us"
        subtitle="Have questions or need assistance? We're here to help."
        imageUrl="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <div className="mb-12">
                  <div className="inline-block px-3 py-1 bg-escape-accent/10 text-escape-accent rounded-full text-sm font-medium mb-6">
                    Get In Touch
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-escape-dark">
                    Contact Information
                  </h2>
                  <p className="text-lg text-escape-text/80 mb-8">
                    We're here to answer any questions you may have about our escape rooms. Reach out to us and we'll respond as soon as we can.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Location */}
                  <div className="flex">
                    <div className="flex-shrink-0 p-4 bg-escape-light rounded-lg mr-4">
                      <svg className="w-6 h-6 text-escape-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-escape-dark mb-1">Our Location</h3>
                      <p className="text-escape-text/80">
                        123 Escape Street<br />
                        Mystery City, MC 10101
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex">
                    <div className="flex-shrink-0 p-4 bg-escape-light rounded-lg mr-4">
                      <svg className="w-6 h-6 text-escape-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-escape-dark mb-1">Phone</h3>
                      <p className="text-escape-text/80">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex">
                    <div className="flex-shrink-0 p-4 bg-escape-light rounded-lg mr-4">
                      <svg className="w-6 h-6 text-escape-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-escape-dark mb-1">Email</h3>
                      <p className="text-escape-text/80">
                        info@escapehaven.com
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex">
                    <div className="flex-shrink-0 p-4 bg-escape-light rounded-lg mr-4">
                      <svg className="w-6 h-6 text-escape-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-escape-dark mb-1">Hours</h3>
                      <p className="text-escape-text/80">
                        Monday - Thursday: 4pm - 10pm<br />
                        Friday: 2pm - 12am<br />
                        Saturday: 10am - 12am<br />
                        Sunday: 10am - 8pm
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-12 rounded-lg overflow-hidden h-[300px] bg-escape-light-gray">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-escape-text/70 text-center px-4">
                      Interactive map would be embedded here in a production environment.<br />
                      For security and performance reasons, it's not loaded in this demo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-xl shadow-subtle p-8">
                  <h3 className="text-2xl font-bold mb-6 text-escape-dark">
                    Send Us a Message
                  </h3>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-escape-dark font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-escape-accent"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-escape-dark font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-escape-accent"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-escape-dark font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-escape-accent"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-escape-dark font-medium mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-escape-accent"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Booking Question">Booking Question</option>
                          <option value="Group Booking">Group Booking</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-escape-dark font-medium mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-escape-accent resize-none"
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary w-full px-6 py-3"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-escape-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 bg-escape-dark/10 text-escape-dark rounded-full text-sm font-medium mb-6">
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-escape-dark">
                Common Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-escape-dark">
                  Do I need to book in advance?
                </h3>
                <p className="text-escape-text/80">
                  Yes, we recommend booking at least 48 hours in advance, especially for weekend slots which tend to fill up quickly. You can book online through our website or by calling us.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-escape-dark">
                  What if we don't escape in time?
                </h3>
                <p className="text-escape-text/80">
                  That's perfectly okay! Many groups don't escape on their first attempt. The goal is to have fun and challenge yourselves. Our game masters will help you exit the room when time is up and can walk you through any puzzles you didn't solve.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-escape-dark">
                  How many people can play at once?
                </h3>
                <p className="text-escape-text/80">
                  Each escape room has different capacity limits, typically ranging from 2-8 players. The recommended team size is indicated on each room's description. For larger groups, we can arrange sequential or parallel bookings.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-escape-dark">
                  Are your escape rooms scary?
                </h3>
                <p className="text-escape-text/80">
                  Some of our rooms, like "The Haunted Mansion," have spooky themes and may include atmospheric lighting and sound effects. However, they are not designed to be frightening like a haunted house attraction. Each room description indicates the theme and intensity level.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-escape-dark">
                  Do you offer gift certificates?
                </h3>
                <p className="text-escape-text/80">
                  Yes, we offer gift certificates that can be purchased online or at our location. These make great presents for birthdays, holidays, or any special occasion. Gift certificates are valid for one year from the date of purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
