import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface RoomData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  difficulty: string;
  duration: string;
  capacity: string;
  imageUrl: string;
  features: string[];
  successRate: string;
}

const roomsData: RoomData[] = [
  {
    id: "submarine-escape",
    title: "The Submerged Submarine",
    description: "You're trapped in a submarine that's quickly taking on water. Can you and your team solve the puzzles to stop the leaks and resurface before time runs out?",
    longDescription: "As members of an elite underwater research team, you were exploring the depths of the ocean when your submarine malfunctioned. Now, you're trapped at the bottom of the sea with water slowly seeping in through damaged sections of the hull. Your oxygen is limited, and the pressure is increasing. You must work together to repair the critical systems, stop the leaks, and initiate the emergency resurfacing procedure before it's too late. Navigate through the confined quarters of the submarine, decode naval messages, manipulate complex machinery, and solve nautical puzzles to save yourselves and the valuable research data you've collected.",
    difficulty: "Medium",
    duration: "60 minutes",
    capacity: "2-6 players",
    imageUrl: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: [
      "Authentic submarine environment",
      "Water sound effects and atmospheric lighting",
      "Physical and mental challenges",
      "Realistic control panels and equipment",
      "Suitable for beginners and intermediate players"
    ],
    successRate: "42%"
  },
  {
    id: "laboratory-escape",
    title: "The Mad Scientist's Laboratory",
    description: "You've been locked in a mad scientist's laboratory where dangerous experiments are underway. Find the antidote and escape before you become the next test subject!",
    longDescription: "You wake up locked in the laboratory of Dr. Victor Strand, a brilliant but unethical scientist known for his controversial human experiments. As you explore the lab, you discover that you've been exposed to a slow-acting toxin that will take full effect in 70 minutes. Your only hope is to navigate through the scientist's twisted experiments, decipher his research notes, and create the antidote that will save your lives. But be careful—the laboratory is filled with puzzling contraptions, mysterious substances, and safeguards designed to protect the doctor's secrets. Can you master the science and escape before becoming another failed experiment?",
    difficulty: "Hard",
    duration: "70 minutes",
    capacity: "3-8 players",
    imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    features: [
      "Immersive laboratory setting",
      "Complex scientific puzzles",
      "Special effects and theatrical elements",
      "Interactive laboratory equipment",
      "Challenging for experienced players"
    ],
    successRate: "31%"
  },
  {
    id: "haunted-mansion",
    title: "The Haunted Mansion",
    description: "Legend has it that the old mansion on the hill is haunted. As paranormal investigators, you must uncover its secrets and escape before becoming permanent residents.",
    longDescription: "The Wellington Mansion has been abandoned for decades, with locals reporting strange sightings and sounds coming from within. As a team of paranormal investigators, you've been granted access to explore the mansion and document any supernatural phenomena. However, once inside, the doors mysteriously lock behind you, and you sense that you're not alone. The spirits of the mansion are restless, and they've trapped you inside their domain. You have 75 minutes to uncover the tragic history of the Wellington family, communicate with the spirits, and find a way to appease them so you can escape. Will you solve the mystery of the haunted mansion, or will you join its ghostly residents forever?",
    difficulty: "Expert",
    duration: "75 minutes",
    capacity: "4-8 players",
    imageUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
    features: [
      "Atmospheric haunted mansion setting",
      "Special lighting and sound effects",
      "Multiple rooms to explore",
      "Spine-chilling narrative",
      "Advanced puzzles for experienced teams"
    ],
    successRate: "22%"
  },
  {
    id: "bank-heist",
    title: "The Bank Heist",
    description: "Your team has been hired to break into the most secure bank in the city. Navigate the security systems, crack the vault, and escape with the loot before the authorities arrive.",
    longDescription: "Your team of master thieves has been hired for the ultimate job: breaking into the supposedly impenetrable vault of the Metropolitan Bank. Your mission is to bypass the sophisticated security systems, find your way into the main vault, and escape with valuable assets before the authorities arrive. But this is no ordinary bank—it's equipped with cutting-edge security technology, motion sensors, and a complex alarm system. You'll need to use specialized tools, decode security protocols, and work together flawlessly to execute the perfect heist. With 60 minutes on the clock and the pressure mounting, can you pull off the most daring robbery in history and make your escape before time runs out?",
    difficulty: "Hard",
    duration: "60 minutes",
    capacity: "3-7 players",
    imageUrl: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: [
      "Realistic bank environment",
      "High-tech puzzles and mechanisms",
      "Timed security challenges",
      "Interactive vault and security systems",
      "Ideal for strategy-oriented teams"
    ],
    successRate: "35%"
  },
  {
    id: "ancient-tomb",
    title: "The Ancient Tomb",
    description: "As archaeologists exploring an ancient tomb, you've accidentally triggered a trap that has sealed the entrance. Decipher the hieroglyphics and solve the ancient puzzles to find another way out.",
    longDescription: "Your archeological expedition has led you to an undiscovered tomb deep in the Egyptian desert. While exploring the ancient chambers, you accidentally trigger a mechanism that seals the entrance, trapping you inside. Now, surrounded by artifacts thousands of years old, you must decode hieroglyphics, solve ancient riddles, and navigate the tomb's elaborate traps to find an alternative escape route. Legend says the tomb contains not only treasure but also a curse that befalls those who disturb the resting place of the pharaoh. As the air grows thinner and sand begins to fill the chambers, you have 60 minutes to unravel the mysteries of the ancient civilization and find your way to freedom before you become a permanent part of the archaeological record.",
    difficulty: "Medium",
    duration: "60 minutes",
    capacity: "2-6 players",
    imageUrl: "https://images.unsplash.com/photo-1560152214-4e76ac488469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    features: [
      "Authentic Egyptian tomb setting",
      "Archaeological puzzles and ancient mechanisms",
      "Hieroglyphic decoding challenges",
      "Hidden chambers and secret passages",
      "Great for families and mixed skill levels"
    ],
    successRate: "48%"
  },
  {
    id: "space-station",
    title: "Space Station Alpha",
    description: "Your space station has experienced a critical system failure. Work together to fix the life support systems and restore communications before your oxygen runs out.",
    longDescription: "Aboard Space Station Alpha, orbiting 250 miles above Earth, a catastrophic system failure has compromised life support systems and cut off communication with mission control. As the crew of the station, you have just 75 minutes before oxygen levels become critical. Navigate through the damaged modules of the station, repair crucial systems, and restore communication with Earth to call for emergency evacuation. The fate of the mission—and your lives—depends on your ability to work together under pressure, solve complex technical problems, and make the right decisions in this hostile environment. With sophisticated technology failures, zero-gravity challenges, and the constant threat of depleting oxygen, this mission will test even the most experienced teams. Do you have what it takes to survive this space emergency?",
    difficulty: "Expert",
    duration: "75 minutes",
    capacity: "4-8 players",
    imageUrl: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: [
      "Futuristic space station environment",
      "Technical and scientific puzzles",
      "Emergency countdown sequence",
      "Interactive control panels and systems",
      "Challenging for expert escape room enthusiasts"
    ],
    successRate: "19%"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-500';
    case 'Medium':
      return 'bg-yellow-500';
    case 'Hard':
      return 'bg-orange-500';
    case 'Expert':
      return 'bg-red-500';
    default:
      return 'bg-blue-500';
  }
};

const RoomDetail = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [room, setRoom] = useState<RoomData | null>(null);

  useEffect(() => {
    // In a real application, you would fetch the room data from an API
    // For this example, we're using the static roomsData array
    const foundRoom = roomsData.find(r => r.id === roomId);
    if (foundRoom) {
      setRoom(foundRoom);
    }
  }, [roomId]);

  if (!room) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-escape-dark mb-4">Room Not Found</h2>
            <p className="text-escape-text/80 mb-6">
              Sorry, we couldn't find the escape room you're looking for.
            </p>
            <Link to="/rooms" className="btn-primary">
              View All Rooms
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <img 
          src={room.imageUrl} 
          alt={room.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="container mx-auto">
            <div className={`inline-block ${getDifficultyColor(room.difficulty)} text-white text-sm font-bold px-3 py-1 rounded-full mb-4`}>
              {room.difficulty}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {room.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              {room.description}
            </p>
          </div>
        </div>
      </div>

      {/* Room Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-escape-dark">
                The Experience
              </h2>

              <div className="prose max-w-none text-escape-text/90 mb-12">
                <p className="text-lg leading-relaxed mb-6">
                  {room.longDescription}
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-escape-dark">
                Room Features
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {room.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-escape-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-escape-text/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-subtle p-8 mb-8">
                <h3 className="text-xl font-bold mb-6 text-escape-dark">
                  Room Details
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-escape-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <p className="text-sm text-escape-text/70">Duration</p>
                      <p className="font-medium text-escape-dark">{room.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-escape-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <div>
                      <p className="text-sm text-escape-text/70">Capacity</p>
                      <p className="font-medium text-escape-dark">{room.capacity}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-escape-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <div>
                      <p className="text-sm text-escape-text/70">Difficulty</p>
                      <p className="font-medium text-escape-dark">{room.difficulty}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-escape-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <div>
                      <p className="text-sm text-escape-text/70">Success Rate</p>
                      <p className="font-medium text-escape-dark">{room.successRate}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link to="/booking" className="btn-primary w-full">
                    Book This Room
                  </Link>
                </div>
              </div>

              <div className="bg-escape-light/30 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-escape-dark">
                  Tips for Success
                </h3>

                <ul className="space-y-3 text-escape-text/90">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-escape-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    <span>Communicate clearly with your team</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-escape-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    <span>Look for patterns and connections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-escape-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <span>Share discoveries with your team</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-escape-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Don't overlook small details</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-escape-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Ask for hints if you're truly stuck</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Take on the Challenge?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8">
            Book your escape room adventure today and see if you can solve the puzzles in time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn bg-white text-escape-dark hover:bg-white/90 px-6 py-3">
              Book Now
            </Link>
            <Link to="/rooms" className="btn border border-white text-white hover:bg-white/10 px-6 py-3">
              Explore Other Rooms
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoomDetail;
