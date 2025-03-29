import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface RoomCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  duration: string;
  capacity: string;
  imageUrl: string;
  className?: string;
}

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

const RoomCard: React.FC<RoomCardProps> = ({
  id,
  title,
  description,
  difficulty,
  duration,
  capacity,
  imageUrl,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group room-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className={`absolute top-4 right-4 ${getDifficultyColor(difficulty)} text-white text-xs font-bold px-2 py-1 rounded`}>
          {difficulty}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-escape-dark mb-2">{title}</h3>

        <p className="text-escape-text/80 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-escape-text/70">
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {duration}
            </span>
          </div>

          <div className="text-sm text-escape-text/70">
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              {capacity}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link 
            to={`/rooms/${id}`} 
            className="text-escape-accent hover:text-escape-medium font-medium transition-colors duration-300"
          >
            View Details
          </Link>

            <Link
            to="/booking" 
            className="btn-primary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
