import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import RoomCard from '@/components/RoomCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const featuredRooms = [
  {
    id: "submarine-escape",
    title: "The Submerged Submarine",
    description: "You're trapped in a submarine that's quickly taking on water. Can you and your team solve the puzzles to stop the leaks and resurface before time runs out?",
    difficulty: "Medium",
    duration: "60 minutes",
    capacity: "2-6 players",
    imageUrl: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "laboratory-escape",
    title: "The Mad Scientist's Laboratory",
    description: "You've been locked in a mad scientist's laboratory where dangerous experiments are underway. Find the antidote and escape before you become the next test subject!",
    difficulty: "Hard",
    duration: "70 minutes",
    capacity: "3-8 players",
    imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
  },
  {
    id: "haunted-mansion",
    title: "The Haunted Mansion",
    description: "Legend has it that the old mansion on the hill is haunted. As paranormal investigators, you must uncover its secrets and escape before becoming permanent residents.",
    difficulty: "Expert",
    duration: "75 minutes",
    capacity: "4-8 players",
    imageUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <HeroSection 
        title="Can You Escape in Time?"
        subtitle="Challenge your mind, test your teamwork, and race against the clock in our immersive escape room experiences."
        primaryButtonText="Book Now"
        primaryButtonLink="/booking"
        secondaryButtonText="Explore Rooms"
        secondaryButtonLink="/rooms"
        imageUrl="https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-escape-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 bg-escape-accent/10 text-escape-accent rounded-full text-sm font-medium mb-6">
              Welcome to Escape Haven
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-escape-dark">
              Experience the Thrill of Escape
            </h2>
            <p className="text-lg text-escape-text/80 mb-8">
              At Escape Haven, we create immersive and challenging escape room experiences that will test your problem-solving skills, creativity, and teamwork. Each room is carefully designed with intricate puzzles, hidden clues, and surprising twists that will keep you engaged from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
              <Link to="/rooms" className="btn-secondary">
                See Our Escape Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-escape-dark/10 text-escape-dark rounded-full text-sm font-medium mb-6">
              Our Popular Experiences
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-escape-dark">
              Featured Escape Rooms
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-escape-text/80">
              Discover our most popular escape room challenges. Each room offers a unique theme, story, and set of puzzles to solve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard 
                key={room.id}
                id={room.id}
                title={room.title}
                description={room.description}
                difficulty={room.difficulty as any}
                duration={room.duration}
                capacity={room.capacity}
                imageUrl={room.imageUrl}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/rooms" className="btn-primary">
              View All Escape Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-6">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80">
              Our escape room experiences are designed to be challenging but accessible. Here's how to get started:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-16 h-16 bg-escape-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-4">Choose Your Room</h3>
              <p className="text-white/80">
                Browse our selection of immersive escape rooms and select the one that interests you the most.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-16 h-16 bg-escape-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-4">Book Your Experience</h3>
              <p className="text-white/80">
                Reserve your spot online by selecting your preferred date and time slot. Get ready for the challenge!
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-16 h-16 bg-escape-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-4">Solve & Escape</h3>
              <p className="text-white/80">
                Work together with your team to find clues, solve puzzles, and escape the room before time runs out!
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/booking" className="btn bg-white text-escape-dark hover:bg-white/90 px-6 py-3">
              Book Your Adventure Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-escape-dark/10 text-escape-dark rounded-full text-sm font-medium mb-6">
              What People Say
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-escape-dark">
              Customer Testimonials
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-escape-text/80">
              Don't just take our word for it. Here's what our customers have to say about their escape room experiences:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center text-escape-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-escape-text mb-6">
                "The Submerged Submarine was an incredible experience! The attention to detail in the room was amazing, and the puzzles were challenging but not impossible. Our group had a blast!"
              </p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-medium text-escape-dark">Jessica T.</p>
                  <p className="text-sm text-escape-text/70">Escaped with 10 minutes to spare</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center text-escape-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-escape-text mb-6">
                "We tried the Mad Scientist's Laboratory and it exceeded all our expectations. The storyline was engaging, the puzzles were creative, and the game master was fantastic. Can't wait to try another room!"
              </p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-medium text-escape-dark">Michael R.</p>
                  <p className="text-sm text-escape-text/70">Escaped with 5 minutes to spare</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center text-escape-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-escape-text mb-6">
                "The Haunted Mansion was terrifyingly good! The atmosphere was perfect, and the puzzles were well-integrated into the storyline. It was challenging but we managed to escape with just seconds left!"
              </p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-medium text-escape-dark">Sarah L.</p>
                  <p className="text-sm text-escape-text/70">Escaped with 30 seconds to spare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-escape-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for the Challenge?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8">
            Book your escape room experience today and put your team's skills to the test. Can you escape in time?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn-accent">
              Book Now
            </Link>
            <Link to="/rooms" className="btn bg-white text-escape-dark hover:bg-white/90">
              Explore Rooms
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
