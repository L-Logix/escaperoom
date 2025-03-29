import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-escape-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block text-2xl font-bold">
              <span className="text-escape-accent">Escape</span>Haven
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Immersive escape room experiences that challenge your mind and test your teamwork.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-escape-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-300 hover:text-escape-accent transition-colors">
                  Escape Rooms
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-escape-accent transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-escape-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Escape Street</li>
              <li>Mystery City, MC 10101</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@escapehaven.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Monday - Thursday: 4pm - 10pm</li>
              <li>Friday: 2pm - 12am</li>
              <li>Saturday: 10am - 12am</li>
              <li>Sunday: 10am - 8pm</li>
            </ul>
            <div className="mt-6">
              <Link to="/booking" className="btn-accent">
                Book Your Experience
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} EscapeHaven. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-escape-accent">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-escape-accent">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
