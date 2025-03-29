import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { toast } from '@/components/ui/use-toast';

const rooms = [
  {
    id: "submarine-escape",
    title: "The Submerged Submarine",
    difficulty: "Medium",
    duration: "60 minutes",
    capacity: "2-6 players",
  },
  {
    id: "laboratory-escape",
    title: "The Mad Scientist's Laboratory",
    difficulty: "Hard",
    duration: "70 minutes",
    capacity: "3-8 players",
  },
  {
    id: "haunted-mansion",
    title: "The Haunted Mansion",
    difficulty: "Expert",
    duration: "75 minutes",
    capacity: "4-8 players",
  },
  {
    id: "bank-heist",
    title: "The Bank Heist",
    difficulty: "Hard",
    duration: "60 minutes",
    capacity: "3-7 players",
  },
  {
    id: "ancient-tomb",
    title: "The Ancient Tomb",
    difficulty: "Medium",
    duration: "60 minutes",
    capacity: "2-6 players",
  },
  {
    id: "space-station",
    title: "Space Station Alpha",
    difficulty: "Expert",
    duration: "75 minutes",
    capacity: "4-8 players",
  }
];

const timeSlots = [
  "10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", 
  "4:00 PM", "5:30 PM", "7:00 PM", "8:30 PM"
];

const Booking = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [participants, setParticipants] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedRoom || !selectedDate || !selectedTime || !participants || 
        !contactInfo.name || !contactInfo.email || !contactInfo.phone) {
      toast({
        title: "Booking Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically submit the booking data to your backend
    console.log({
      room: selectedRoom,
      date: selectedDate,
      time: selectedTime,
      participants,
      contactInfo
    });

    toast({
      title: "Booking Submitted!",
      description: "Thank you for your booking. We'll contact you shortly to confirm your reservation.",
    });

    // Reset form
    setSelectedRoom('');
    setSelectedDate('');
    setSelectedTime('');
    setParticipants('');
    setContactInfo({
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <HeroSection 
        title="Book Your Escape"
        subtitle="Reserve your spot and prepare for an unforgettable escape room experience."
        imageUrl="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
      />

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-escape-dark">
                Book Your Escape Room Experience
              </h2>
              <p className="text-lg text-escape-text/80">
                Complete the form below to reserve your spot. We'll contact you to confirm your booking.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-subtle p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Room Selection */}
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-escape-dark font-medium mb-2">
                      Select an Escape Room *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {rooms.map(room => (
                        <div 
                          key={room.id}
                          className={`cursor-pointer border rounded-lg p-4 transition-all ${
                            selectedRoom === room.id 
                              ? 'border-escape-accent bg-escape-accent/5' 
                              : 'border-gray-200 hover:border-escape-accent/50'
                          }`}
                          onClick={() => setSelectedRoom(room.id)}
                        >
                          <h4 className="font-medium text-escape-dark mb-1">{room.title}</h4>
                          <div className="flex flex-col text-sm text-escape-text/70">
                            <span>{room.difficulty} • {room.duration}</span>
                            <span>{room.capacity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label htmlFor="date" className="block text-escape-dark font-medium mb-2">
                      Select a Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-escape-accent"
                      required
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-escape-dark font-medium mb-2">
                      Select a Time Slot *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timeSlots.map(time => (
                        <div 
                          key={time}
                          className={`cursor-pointer border rounded-lg p-2 text-center text-sm transition-all ${
                            selectedTime === time 
                              ? 'border-escape-accent bg-escape-accent/5 text-escape-accent' 
                              : 'border-gray-200 hover:border-escape-accent/50'
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Number of Participants */}
                  <div>
                    <label htmlFor="participants" className="block text-escape-dark font-medium mb-2">
                      Number of Participants *
                    </label>
                    <input
                      type="number"
                      id="participants"
                      min="2"
                      max="8"
                      value={participants}
                      onChange={(e) => setParticipants(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-escape-accent"
                      required
                    />
                  </div>

                  {/* Contact Information */}
                  <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-bold mb-4 text-escape-dark">Contact Information</h3>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-escape-dark font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactInfo.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-escape-accent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-escape-dark font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactInfo.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-escape-accent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-escape-dark font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactInfo.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-escape-accent"
                      required
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn-primary w-full md:w-auto px-8 py-3"
                  >
                    Complete Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Information Section */}
      <section className="py-16 bg-escape-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-escape-dark">
                Booking Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-escape-dark">Cancellation Policy</h3>
                <p className="text-escape-text/80">
                  Cancellations made at least 48 hours in advance will receive a full refund. Cancellations within 48 hours of booking are non-refundable.
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

export default Booking;
