import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Calendar, MapPin, ExternalLink, Search, Filter, Mail, Phone, Globe } from 'lucide-react';

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const organizations = [
    {
      name: "Climatique",
      description: "Climate action and regenerative practices in Boulder County. Working on local climate solutions through community engagement and education.",
      type: "Environmental Action",
      location: "Boulder County",
      contact: {
        website: "climatique.org",
        email: "info@climatique.org"
      },
      tags: ["Climate Action", "Education", "Community"]
    },
    {
      name: "Cool Boulder",
      description: "Local climate solutions and community resilience building. Focused on practical steps for climate adaptation and mitigation.",
      type: "Climate Resilience",
      location: "Boulder",
      contact: {
        website: "coolboulder.org",
        phone: "(303) 555-0123"
      },
      tags: ["Resilience", "Local Action", "Sustainability"]
    },
    {
      name: "Cohere",
      description: "Regenerative community development and social innovation. Creating spaces for meaningful collaboration and systems change.",
      type: "Community Building",
      location: "Front Range",
      contact: {
        website: "cohere.co",
        email: "hello@cohere.co"
      },
      tags: ["Community", "Innovation", "Regenerative"]
    },
    {
      name: "Boulder Audubon Society",
      description: "Bird conservation and nature education programs. Offering birding walks, citizen science projects, and habitat restoration.",
      type: "Wildlife Conservation",
      location: "Boulder County",
      contact: {
        website: "boulderaudubon.org",
        email: "info@boulderaudubon.org"
      },
      tags: ["Birds", "Conservation", "Education"]
    },
    {
      name: "Wild Root Herbalists",
      description: "Traditional plant medicine and wildcrafting education. Teaching sustainable harvesting and herbal preparation methods.",
      type: "Plant Medicine",
      location: "Boulder Valley",
      contact: {
        website: "wildrootherbs.com",
        email: "info@wildrootherbs.com"
      },
      tags: ["Herbalism", "Traditional Medicine", "Education"]
    },
    {
      name: "Front Range Earth Connection",
      description: "Seasonal ceremonies and earth-based spiritual practices. Connecting community through solstices, equinoxes, and lunar cycles.",
      type: "Spiritual Practice",
      location: "Front Range",
      contact: {
        email: "ceremonies@earthconnection.org"
      },
      tags: ["Ceremony", "Seasonal", "Spirituality"]
    }
  ];

  const upcomingEvents = [
    {
      title: "Lyons Bee Festival",
      date: "May 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Lyons, CO",
      type: "Annual Festival",
      organizer: "Lyons Bee Festival Committee",
      description: "Celebrate pollinators with local vendors, educational workshops, and bee-friendly activities for all ages."
    },
    {
      title: "Spring Foraging Walk",
      date: "April 22, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Chautauqua Park, Boulder",
      type: "Educational Workshop",
      organizer: "Wild Root Herbalists",
      description: "Learn to identify and ethically harvest spring edibles and medicinal plants in the foothills."
    },
    {
      title: "Plant Medicine Circle",
      date: "April 28, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Boulder Community Center",
      type: "Workshop",
      organizer: "Front Range Earth Connection",
      description: "Monthly gathering to share plant medicine knowledge and create herbal preparations together."
    },
    {
      title: "Climate Action Town Hall",
      date: "May 3, 2024",
      time: "6:30 PM - 8:30 PM",
      location: "Boulder Library Main Branch",
      type: "Community Meeting",
      organizer: "Climatique",
      description: "Discuss local climate initiatives and how community members can get involved in climate action."
    },
    {
      title: "Spring Equinox Ceremony",
      date: "March 20, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Red Rocks Open Space",
      type: "Ceremony",
      organizer: "Front Range Earth Connection",
      description: "Welcome spring with community ceremony, meditation, and connection to seasonal rhythms."
    },
    {
      title: "Native Bird Walk",
      date: "May 8, 2024",
      time: "7:00 AM - 10:00 AM",
      location: "Boulder Creek Path",
      type: "Nature Walk",
      organizer: "Boulder Audubon Society",
      description: "Early morning bird walk to observe spring migrants and resident species along the creek."
    }
  ];

  const filteredOrganizations = organizations.filter(org => {
    const matchesSearch = org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         org.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         org.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'all' || org.type === selectedType;
    return matchesSearch && matchesType;
  });

  const organizationTypes = [...new Set(organizations.map(org => org.type))];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Community <span className="text-seasonal">Directory</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with organizations, practitioners, and events that help you deepen your relationship with the Front Range bioregion.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search organizations, tags, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-64">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {organizationTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="organizations" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="organizations">Organizations</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            </TabsList>

            <TabsContent value="organizations" className="space-y-6">
              <div className="grid gap-6">
                {filteredOrganizations.map((org, index) => (
                  <Card key={index} className="hover:shadow-warm transition-smooth">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-xl">{org.name}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-accent/20 text-accent-foreground">
                              {org.type}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-1" />
                              {org.location}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{org.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {org.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Contact Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        {org.contact.website && (
                          <div className="flex items-center">
                            <Globe className="w-4 h-4 mr-1" />
                            <span>{org.contact.website}</span>
                          </div>
                        )}
                        {org.contact.email && (
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-1" />
                            <span>{org.contact.email}</span>
                          </div>
                        )}
                        {org.contact.phone && (
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            <span>{org.contact.phone}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-natural transition-smooth">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <Badge className={`
                          ${event.type === 'Annual Festival' ? 'bg-seasonal-summer/20 text-seasonal-summer' : ''}
                          ${event.type === 'Educational Workshop' ? 'bg-seasonal-spring/20 text-seasonal-spring' : ''}
                          ${event.type === 'Workshop' ? 'bg-seasonal-autumn/20 text-seasonal-autumn' : ''}
                          ${event.type === 'Community Meeting' ? 'bg-accent/20 text-accent-foreground' : ''}
                          ${event.type === 'Ceremony' ? 'bg-seasonal-winter/20 text-seasonal-winter' : ''}
                          ${event.type === 'Nature Walk' ? 'bg-primary/20 text-primary' : ''}
                        `}>
                          {event.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date} • {event.time}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-2" />
                          {event.organizer}
                        </div>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                        <Button variant="earth" size="sm" className="mt-4">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-earth">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Want to be listed in our directory?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            If you're an organization or practitioner working to connect people with the Front Range bioregion, we'd love to include you.
          </p>
          <Button variant="secondary" size="lg">
            Submit Your Organization
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Community;