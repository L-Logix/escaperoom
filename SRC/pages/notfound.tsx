import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center bg-escape-light-gray">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in mb-6">
            <h1 className="text-9xl font-bold text-escape-dark mb-4">404</h1>
            <div className="h-2 w-24 bg-escape-accent mx-auto mb-8"></div>
          </div>

          <div className="animate-fade-in [animation-delay:300ms] max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-escape-dark mb-6">
              Escape Room Not Found
            </h2>
            <p className="text-xl text-escape-text/80 mb-8">
              Looks like you've wandered into an unsolved puzzle. The page you're looking for has either been moved, deleted, or never existed in the first place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary px-6 py-3">
                Return to Home
              </Link>
              <Link to="/rooms" className="btn-secondary px-6 py-3">
                Explore Escape Rooms
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
