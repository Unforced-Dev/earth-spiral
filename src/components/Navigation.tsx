import React from 'react';
import { Button } from './ui/button';
import { Leaf, ShoppingBag, Users, Map, BookOpen, Mail } from 'lucide-react';

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="/shop" className="text-foreground hover:text-primary transition-smooth flex items-center gap-1">
              <ShoppingBag className="w-4 h-4" />
              Shop
            </a>
            <a href="/community" className="text-foreground hover:text-primary transition-smooth flex items-center gap-1">
              <Users className="w-4 h-4" />
              Community
            </a>
            <a href="/map" className="text-foreground hover:text-primary transition-smooth flex items-center gap-1">
              <Map className="w-4 h-4" />
              Eco Map
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-smooth flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              About
            </a>
          </div>

          {/* Newsletter CTA */}
          <div className="hidden md:block">
            <Button variant="newsletter" size="sm">
              <Mail className="w-4 h-4" />
              Newsletter
            </Button>
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