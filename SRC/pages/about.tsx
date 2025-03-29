import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <HeroSection 
        title="About Escape Haven"
        subtitle="Meet the founders behind your favorite escape room experiences."
        imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Our Story */}
            <div className="mb-20">
              <div className="inline-block px-3 py-1 bg-escape-accent/10 text-escape-accent rounded-full text-sm font-medium mb-6">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-escape-dark">
                How Escape Haven Began
              </h2>

              <div className="prose max-w-none text-escape-text/90">
                <p className="text-lg mb-6">
                  Escape Haven was founded in 2017 by Chur and Risk, two puzzle enthusiasts and game designers who shared a passion for creating immersive, challenging experiences.
                </p>
                <p className="text-lg mb-6">
                  Our founders first experienced an escape room during a trip abroad and were immediately captivated by the concept. Upon returning home, they realized that there was an opportunity to bring this exciting form of entertainment to their community, but with a focus on high-quality, immersive experiences that would truly transport participants into another world.
                </p>
                <p className="text-lg">
                  Today, Escape Haven features six uniquely themed rooms, each meticulously designed to provide an unforgettable adventure. Chur and Risk personally oversee all aspects of the business, from puzzle design to customer experience, ensuring that every detail meets their high standards.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="mb-20">
              <div className="inline-block px-3 py-1 bg-escape-dark/10 text-escape-dark rounded-full text-sm font-medium mb-6">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-escape-dark">
                Why We Do What We Do
              </h2>

              <div className="prose max-w-none text-escape-text/90">
                <p className="text-lg mb-6">
                  At Escape Haven, our mission is to create unforgettable experiences that challenge, entertain, and bring people together. We believe in the power of shared experiences and the joy that comes from solving problems as a team.
                </p>
                <p className="text-lg mb-6">
                  We design our escape rooms to be more than just a series of puzzles. Each room tells a story and immerses participants in a unique world where they become the protagonists. Our goal is to create moments of excitement, discovery, and triumph that participants will talk about long after they leave.
                </p>
                <p className="text-lg">
                  We're committed to continuous innovation and regularly update our rooms and create new experiences to ensure that there's always something fresh and exciting for both first-time visitors and returning escape artists.
                </p>
              </div>
            </div>

            {/* Meet the Founders */}
            <div>
              <div className="inline-block px-3 py-1 bg-escape-accent/10 text-escape-accent rounded-full text-sm font-medium mb-6">
                Our Founders
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-escape-dark">
                The Minds Behind the Puzzles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Founder 1 - Chur */}
                <div className="text-center">
                  <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="Chur" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-escape-dark mb-2">Chur</h3>
                  <p className="text-escape-accent mb-4">Co-Founder & Creative Director</p>
                  <p className="text-escape-text/80 text-sm max-w-md mx-auto">
                    Chur leads the creative vision for Escape Haven, designing intricate puzzles and immersive storylines that challenge and delight our guests. With a background in game design and theatrical production, Chur ensures that each room delivers a unique and captivating experience.
                  </p>
                </div>

                {/* Founder 2 - Risk */}
                <div className="text-center">
                  <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" 
                      alt="Risk" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-escape-dark mb-2">Risk</h3>
                  <p className="text-escape-accent mb-4">Co-Founder & Operations Manager</p>
                  <p className="text-escape-text/80 text-sm max-w-md mx-auto">
                    Risk handles the business side of Escape Haven, ensuring that everything runs smoothly and that our customers receive exceptional service. With a keen eye for detail and a commitment to excellence, Risk works behind the scenes to create the perfect environment for immersive escape room adventures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Challenge?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8">
            Book your escape room adventure today and see what makes Escape Haven the top-rated escape room destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="btn bg-white text-escape-dark hover:bg-white/90 px-6 py-3">
              Book Now
            </a>
            <a href="/contact" className="btn border border-white text-white hover:bg-white/10 px-6 py-3">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
