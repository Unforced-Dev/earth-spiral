
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowRight, Leaf } from 'lucide-react';
import wheelImage from '@/assets/wheel-of-year-poster.jpg';
import landscapeImage from '@/assets/colorado-landscape.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={landscapeImage} 
          alt="Colorado Front Range landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Connect with the{' '}
                <span className="text-seasonal">Rhythms</span>
                {' '}of Place
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover your relationship with Colorado's seasonal cycles through 
                local ecology, community connections, and time-honored traditions 
                of the Front Range bioregion.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-natural border border-border/50">
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold">Join Our Community</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Receive seasonal activities, foraging tips, local events, and ways to deepen your connection with the land.
              </p>
              <div className="flex gap-3">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPAz-Rn42IzLpTsa8b-y1b-d3OTJUZ2tx6dq6j4M2kKbw_KQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="earth" className="w-full">
                    Sign Up
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="seasonal" size="lg">
                Explore the Shop
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="mountain" size="lg">
                Community Directory
              </Button>
            </div>
          </div>

          {/* Right Column - Wheel of the Year */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden shadow-warm border-4 border-accent/30 spiral-hover">
                <img 
                  src={wheelImage} 
                  alt="Rocky Mountain Wheel of the Year featuring seasonal patterns of the Front Range Bioregion" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                <Leaf className="w-4 h-4 inline mr-2" />
                Wheel of the Year
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
