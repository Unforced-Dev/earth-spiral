import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Input } from './ui/input';
import { 
  Leaf, 
  Mail, 
  MapPin, 
  Calendar, 
  Users, 
  ShoppingBag,
  Instagram,
  Facebook,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Signup */}
      <div className="gradient-earth py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Stay Connected with the Seasons
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Receive monthly updates on seasonal activities, local events, and ways to deepen your connection with the Front Range bioregion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand & Mission */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full gradient-seasonal flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-seasonal">Earth Spiral</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Connecting people with the seasonal rhythms and local ecology of the Colorado Front Range bioregion. 
                Through art, education, and community, we foster deeper relationships with place and time.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <div className="space-y-2">
                <Link to="/shop" className="block text-muted-foreground hover:text-primary transition-smooth">
                  <ShoppingBag className="w-4 h-4 inline mr-2" />
                  Shop
                </Link>
                <Link to="/community" className="block text-muted-foreground hover:text-primary transition-smooth">
                  <Users className="w-4 h-4 inline mr-2" />
                  Community Directory
                </Link>
                <Link to="/map" className="block text-muted-foreground hover:text-primary transition-smooth">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Boulder Eco Map
                </Link>
                <Link to="/newsletter" className="block text-muted-foreground hover:text-primary transition-smooth">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Newsletter
                </Link>
                <Link to="/about" className="block text-muted-foreground hover:text-primary transition-smooth">
                  About
                </Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 mt-1" />
                  <div>
                    <p className="text-sm">hello@earthspiral.co</p>
                    <p className="text-xs">Response within 1-2 days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <div>
                    <p className="text-sm">Boulder County, CO</p>
                    <p className="text-xs">Serving the Front Range</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/contact">
                    <Button variant="earth" size="sm">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Earth Spiral. All rights reserved.
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
              Made with <Heart className="w-4 h-4 mx-1 text-seasonal-autumn" /> for the Front Range bioregion
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;