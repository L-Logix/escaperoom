import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
  overlay?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageUrl = 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className,
  overlay = true,
}) => {
  return (
    <div 
      className={cn(
        "relative min-h-[80vh] flex items-center justify-center", 
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imageUrl} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-escape-dark/80 to-escape-dark/50"></div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="animate-fade-in [animation-delay:200ms] text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-100">
            {subtitle}
          </p>
        )}

        <div className="animate-fade-in [animation-delay:400ms] flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButtonText && primaryButtonLink && (
            <Link to={primaryButtonLink} className="btn-primary">
              {primaryButtonText}
            </Link>
          )}

          {secondaryButtonText && secondaryButtonLink && (
            <Link to={secondaryButtonLink} className="btn-secondary">
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
