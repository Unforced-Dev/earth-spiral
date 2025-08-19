import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, ExternalLink, Leaf, Recycle, Building, Users, Zap, Droplets } from 'lucide-react';

const BoulderEcoMap = () => {
  const ecoProjects = [
    {
      id: 1,
      name: "Pearl Street Solar Garden",
      type: "Renewable Energy",
      location: "Pearl Street Mall",
      coordinates: { lat: 40.0176, lng: -105.2797 },
      description: "Community solar installation providing clean energy to downtown Boulder businesses and residences.",
      impact: "500kW capacity, 150 homes powered",
      contact: "Xcel Energy",
      status: "Active",
      icon: Zap,
      color: "seasonal-summer"
    },
    {
      id: 2,
      name: "Boulder Creek Restoration",
      type: "Watershed Protection",
      location: "Boulder Creek Path",
      coordinates: { lat: 40.0150, lng: -105.2705 },
      description: "Ongoing restoration of riparian habitat along Boulder Creek, including native plant restoration and erosion control.",
      impact: "5 miles of creek restored, 200+ native species planted",
      contact: "City of Boulder Open Space",
      status: "Active",
      icon: Droplets,
      color: "seasonal-winter"
    },
    {
      id: 3,
      name: "Chautauqua Meadow Restoration",
      type: "Habitat Restoration",
      location: "Chautauqua Park",
      coordinates: { lat: 40.0050, lng: -105.2830 },
      description: "Native grassland restoration project removing invasive species and reestablishing historic plant communities.",
      impact: "50 acres restored, 30 native species reintroduced",
      contact: "Colorado Chautauqua Association",
      status: "Active",
      icon: Leaf,
      color: "seasonal-spring"
    },
    {
      id: 4,
      name: "Zero Waste Boulder Initiative",
      type: "Waste Reduction",
      location: "Citywide",
      coordinates: { lat: 40.0274, lng: -105.2519 },
      description: "Comprehensive program to achieve zero waste goals through recycling, composting, and waste reduction education.",
      impact: "65% waste diversion rate, 500 tons reduced annually",
      contact: "City of Boulder Environmental Affairs",
      status: "Active",
      icon: Recycle,
      color: "seasonal-autumn"
    },
    {
      id: 5,
      name: "CU Boulder Sustainability Hub",
      type: "Education & Research",
      location: "University of Colorado Campus",
      coordinates: { lat: 40.0067, lng: -105.2659 },
      description: "University initiative combining research, education, and community outreach for environmental sustainability.",
      impact: "1,000+ students engaged, 50+ research projects",
      contact: "CU Environmental Center",
      status: "Active",
      icon: Building,
      color: "accent"
    },
    {
      id: 6,
      name: "Boulder Food Rescue",
      type: "Food Security",
      location: "Multiple locations",
      coordinates: { lat: 40.0274, lng: -105.2519 },
      description: "Community program rescuing surplus food and redistributing to those in need, reducing food waste.",
      impact: "2M+ pounds rescued, 1,500 families served",
      contact: "Boulder Food Rescue",
      status: "Active",
      icon: Users,
      color: "primary"
    }
  ];

  const projectTypes = [
    { name: "Renewable Energy", count: 1, color: "seasonal-summer" },
    { name: "Habitat Restoration", count: 2, color: "seasonal-spring" },
    { name: "Waste Reduction", count: 1, color: "seasonal-autumn" },
    { name: "Watershed Protection", count: 1, color: "seasonal-winter" },
    { name: "Education & Research", count: 1, color: "accent" },
    { name: "Food Security", count: 1, color: "primary" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 gradient-mountain">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">
              Boulder Regenerative <span className="text-white">Ecology Map</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Discover regenerative projects and ecological initiatives across Boulder County that are healing our bioregion.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-natural">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-subtle flex items-center justify-center relative">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-accent mx-auto" />
                  <h3 className="text-2xl font-semibold">Interactive Map Coming Soon</h3>
                  <p className="text-muted-foreground max-w-md">
                    We're developing an interactive map that will show real-time locations and details of regenerative projects throughout Boulder County.
                  </p>
                  <Button variant="earth">
                    Request Early Access
                  </Button>
                </div>
                
                {/* Simulated Map Points */}
                <div className="absolute inset-0 pointer-events-none">
                  {ecoProjects.slice(0, 4).map((project, index) => (
                    <div
                      key={project.id}
                      className={`absolute w-4 h-4 bg-${project.color} rounded-full animate-pulse`}
                      style={{
                        left: `${20 + index * 15}%`,
                        top: `${30 + index * 10}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Types Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Types of <span className="text-seasonal">Regenerative Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-smooth">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${type.color}/20 flex items-center justify-center`}>
                    <div className={`w-6 h-6 rounded-full bg-${type.color}`}></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{type.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {type.count} {type.count === 1 ? 'project' : 'projects'} active
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured <span className="text-seasonal">Projects</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {ecoProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-natural transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <project.icon className={`w-5 h-5 text-${project.color}`} />
                        {project.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge className={`bg-${project.color}/20 text-${project.color} border-${project.color}/30`}>
                          {project.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                    
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div className="bg-accent/10 p-3 rounded-md">
                      <h4 className="font-semibold text-sm mb-1">Impact</h4>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        <strong>Contact:</strong> {project.contact}
                      </span>
                      <Button variant="earth" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 gradient-earth">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Start Your Own Regenerative Project
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Have an idea for healing our bioregion? Connect with local resources and get your project on the map.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Submit a Project
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Resource Guide
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BoulderEcoMap;