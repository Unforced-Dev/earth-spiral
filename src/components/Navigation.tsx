
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Leaf } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full gradient-seasonal flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-seasonal">Earth Spiral</span>
          </div>

          {/* Desktop Navigation - Simplified without icons */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-accent transition-smooth font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-foreground hover:text-accent transition-smooth font-medium">
              Shop
            </Link>
            <Link to="/community" className="text-foreground hover:text-accent transition-smooth font-medium">
              Community
            </Link>
            <Link to="/map" className="text-foreground hover:text-accent transition-smooth font-medium">
              Eco Map
            </Link>
            <Link to="/about" className="text-foreground hover:text-accent transition-smooth font-medium">
              About
            </Link>
          </div>

          {/* Sign Up CTA */}
          <div className="hidden md:block">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPAz-Rn42IzLpTsa8b-y1b-d3OTJUZ2tx6dq6j4M2kKbw_KQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
              <Button variant="earth" size="sm">
                Sign Up
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
