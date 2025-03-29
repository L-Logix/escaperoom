import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import RoomCard from '@/components/RoomCard';

const rooms = [
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
  },
  {
    id: "bank-heist",
    title: "The Bank Heist",
    description: "Your team has been hired to break into the most secure bank in the city. Navigate the security systems, crack the vault, and escape with the loot before the authorities arrive.",
    difficulty: "Hard",
    duration: "60 minutes",
    capacity: "3-7 players",
    imageUrl: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "ancient-tomb",
    title: "The Ancient Tomb",
    description: "As archaeologists exploring an ancient tomb, you've accidentally triggered a trap that has sealed the entrance. Decipher the hieroglyphics and solve the ancient puzzles to find another way out.",
    difficulty: "Medium",
    duration: "60 minutes",
    capacity: "2-6 players",
    imageUrl: "https://images.unsplash.com/photo-1560152214-4e76ac488469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
  },
  {
    id: "space-station",
    title: "Space Station Alpha",
    description: "Your space station has experienced a critical system failure. Work together to fix the life support systems and restore communications before your oxygen runs out.",
    difficulty: "Expert",
    duration: "75 minutes",
    capacity: "4-8 players",
    imageUrl: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

const Rooms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <HeroSection 
        title="Escape Room Challenges"
        subtitle="Discover our collection of immersive and challenging escape room experiences."
        imageUrl="https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Rooms List Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-escape-dark">
              Our Escape Room Experiences
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-escape-text/80">
              Choose from our range of immersive escape room challenges. Each room is designed with unique puzzles, storylines, and themes to test your team's skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
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
        </div>
      </section>

      {/* Difficulty Legend Section */}
      <section className="py-12 bg-escape-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-6 text-escape-dark">
              Difficulty Levels Explained
            </h3>
            <p className="max-w-3xl mx-auto text-escape-text/80">
              Our escape rooms are categorized by difficulty level to help you choose the right challenge for your team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span className="font-bold text-escape-dark">Easy</span>
              </div>
              <p className="text-sm text-escape-text/80">
                Perfect for beginners. These rooms feature straightforward puzzles and plenty of hints to help you along the way.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                <span className="font-bold text-escape-dark">Medium</span>
              </div>
              <p className="text-sm text-escape-text/80">
                Suitable for teams with some escape room experience. These rooms feature more complex puzzles and storylines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 rounded-full bg-orange-500 mr-2"></div>
                <span className="font-bold text-escape-dark">Hard</span>
              </div>
              <p className="text-sm text-escape-text/80">
                Designed for experienced teams. These rooms feature challenging puzzles that will test your problem-solving skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                <span className="font-bold text-escape-dark">Expert</span>
              </div>
              <p className="text-sm text-escape-text/80">
                Our most challenging rooms. Designed for teams with significant escape room experience who want the ultimate test.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accept the Challenge?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8">
            Book your escape room experience today and see if you have what it takes to escape in time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="btn bg-white text-escape-dark hover:bg-white/90 px-6 py-3">
              Book Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
