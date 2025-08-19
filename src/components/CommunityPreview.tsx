import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, Calendar, MapPin, ExternalLink } from 'lucide-react';

const CommunityPreview = () => {
  const organizations = [
    {
      name: "Climatique",
      description: "Climate action and regenerative practices in Boulder County",
      type: "Environmental Action",
      location: "Boulder County"
    },
    {
      name: "Cool Boulder",
      description: "Local climate solutions and community resilience building",
      type: "Climate Resilience",
      location: "Boulder"
    },
    {
      name: "Cohere",
      description: "Regenerative community development and social innovation",
      type: "Community Building",
      location: "Front Range"
    },
    {
      name: "Audubon Society",
      description: "Bird conservation and nature education programs",
      type: "Wildlife Conservation",
      location: "Front Range"
    }
  ];

  const upcomingEvents = [
    {
      title: "Lyons Bee Festival",
      date: "May 15, 2024",
      location: "Lyons, CO",
      type: "Annual Festival"
    },
    {
      title: "Spring Foraging Walk",
      date: "April 22, 2024",
      location: "Chautauqua Park",
      type: "Educational"
    },
    {
      title: "Plant Medicine Circle",
      date: "April 28, 2024",
      location: "Boulder",
      type: "Workshop"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Connect with Your <span className="text-seasonal">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover local organizations, practitioners, and events that help you deepen your connection with the Front Range bioregion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Organizations */}
          <div>
            <div className="flex items-center mb-8">
              <Users className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-2xl font-semibold">Partner Organizations</h3>
            </div>
            
            <div className="space-y-4">
              {organizations.map((org, index) => (
                <Card key={index} className="hover:shadow-natural transition-smooth">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{org.name}</CardTitle>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">{org.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
                        {org.type}
                      </span>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {org.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center mb-8">
              <Calendar className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-2xl font-semibold">Upcoming Events</h3>
            </div>
            
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-natural transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-lg">{event.title}</h4>
                      <span className="text-xs bg-seasonal-spring/20 text-seasonal-spring px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="mountain" className="w-full">
                View Full Calendar
                <Calendar className="w-4 h-4" />
              </Button>
            </div>
          </div>

        </div>

        {/* Community CTA */}
        <div className="text-center mt-16">
          <Button variant="earth" size="lg">
            Explore Community Directory
            <Users className="w-5 h-5" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default CommunityPreview;