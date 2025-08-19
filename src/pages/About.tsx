import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Clock, Mountain, Heart } from 'lucide-react';
import landscapeImage from '@/assets/colorado-landscape.jpg';

const About = () => {
  const principles = [
    {
      icon: Clock,
      title: "Cyclical Time",
      description: "Moving beyond linear time to embrace the natural rhythms and cycles that govern life on Earth."
    },
    {
      icon: Mountain,
      title: "Bioregional Awareness",
      description: "Deep connection to the Colorado Front Range - its plants, animals, seasons, and ecological systems."
    },
    {
      icon: Leaf,
      title: "Nature Connection",
      description: "Practical ways to engage with the land through foraging, observation, and seasonal activities."
    },
    {
      icon: Heart,
      title: "Community Building",
      description: "Fostering connections between people who share a love for place-based living and ecological wisdom."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={landscapeImage} 
            alt="Colorado Front Range" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-seasonal">Earth Spiral</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Earth Spiral is a resource hub dedicated to connecting people with their local ecology 
              and seasonal rhythms in the Colorado Front Range bioregion.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-natural">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  We believe that developing a deeper relationship with place through cyclical time awareness 
                  creates more resilient, connected communities. By tuning into the natural rhythms of the 
                  Colorado Front Range - from the first spring wildflowers to the winter's quiet reflection - 
                  we cultivate a sense of belonging that extends beyond the human world to include the entire 
                  web of life that sustains us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-seasonal">Principles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The foundation of our work rests on these core principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-smooth">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-earth flex items-center justify-center">
                    <principle.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Wheel of the Year */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                The <span className="text-seasonal">Wheel of the Year</span>
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  At the heart of Earth Spiral is the Wheel of the Year - a circular representation 
                  of the seasonal cycles that includes 30 native Colorado species, each appearing 
                  at their natural time in the annual rhythm.
                </p>
                <p>
                  This artwork serves as both a beautiful piece for your home and a practical guide 
                  for understanding when to look for specific plants, when they flower, when they 
                  fruit, and when they're available for ethical foraging or medicine making.
                </p>
                <p>
                  Unlike linear calendars that rush us from one deadline to the next, the wheel 
                  reminds us that time is cyclical - each ending is also a beginning, each season 
                  has its gifts, and we are part of a larger story that has been unfolding for 
                  millions of years.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-warm border-4 border-accent/30">
                <img 
                  src={landscapeImage} 
                  alt="Seasonal cycle representation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Bio */}
      <section className="py-16 gradient-mountain">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-8">Meet Sarah</h2>
            <div className="text-primary-foreground/90 space-y-6">
              <p className="text-lg">
                Earth Spiral was created by Sarah, an artist and educator passionate about 
                bioregional awareness and seasonal living in the Colorado Front Range.
              </p>
              <p>
                With a background in both ecological art and community organizing, Sarah 
                combines artistic practice with practical knowledge to create resources 
                that help people develop meaningful relationships with their local ecology.
              </p>
              <p>
                When not creating artwork or leading workshops, you can find Sarah foraging 
                for wild medicines, tending her garden according to lunar cycles, or exploring 
                the high country with her community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;