import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Mail, Send, Leaf, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    interests: [],
    location: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const interests = [
    "Seasonal activities and rituals",
    "Foraging and wild food",
    "Medicinal plants and herbalism", 
    "Local events and workshops",
    "Astronomy and lunar cycles",
    "Native plant gardening",
    "Ecology and naturalist skills",
    "Community building"
  ];

  const pastNewsletters = [
    {
      title: "Spring Awakening: March 2024",
      date: "March 2024",
      preview: "Discover early spring edibles, learn about maple syrup season, and find local equinox celebrations...",
      topics: ["Spring foraging", "Equinox ceremonies", "Maple season", "Early wildflowers"]
    },
    {
      title: "Winter Reflection: February 2024", 
      date: "February 2024",
      preview: "Embrace winter's quiet wisdom, learn about medicinal tree barks, and explore indoor plant projects...",
      topics: ["Winter medicine", "Tree identification", "Indoor growing", "Seasonal reflection"]
    },
    {
      title: "Deep Winter: January 2024",
      date: "January 2024", 
      preview: "Navigate winter's depths with warming herbs, winter bird identification, and community connections...",
      topics: ["Warming herbs", "Winter birds", "Community support", "Seed planning"]
    }
  ];

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full gradient-seasonal flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                Welcome to the <span className="text-seasonal">Earth Spiral</span> Community!
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Thank you for subscribing! You'll receive your first newsletter with the next seasonal update. 
                Check your inbox for a welcome message with immediate seasonal activities you can try today.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <Card className="text-left">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-accent" />
                      What to Expect
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Monthly newsletters timed with seasonal shifts</li>
                      <li>• Foraging calendars and safety tips</li>
                      <li>• Local event announcements</li>
                      <li>• Plant medicine and herbalism insights</li>
                      <li>• Community stories and connections</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="text-left">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      Stay Connected
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button variant="earth" className="w-full">
                        Join Our Community Directory
                      </Button>
                      <Button variant="mountain" className="w-full">
                        Browse the Shop
                      </Button>
                      <Button variant="seasonal" className="w-full">
                        Explore Boulder Eco Map
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Join Our <span className="text-seasonal">Newsletter</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Receive monthly curated content to deepen your connection with Colorado's seasonal rhythms and local ecology.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Newsletter Information */}
            <div className="space-y-8">
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-accent" />
                    What You'll Receive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Leaf className="w-5 h-5 text-seasonal-spring mt-1" />
                      <div>
                        <h4 className="font-semibold">Seasonal Activities & Invitations</h4>
                        <p className="text-sm text-muted-foreground">Nature-based activities timed perfectly with Front Range seasons</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-seasonal-summer mt-1" />
                      <div>
                        <h4 className="font-semibold">Foraging & Harvesting Guidance</h4>
                        <p className="text-sm text-muted-foreground">When and where to ethically forage medicinal and edible plants</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-seasonal-autumn mt-1" />
                      <div>
                        <h4 className="font-semibold">Local Events & Workshops</h4>
                        <p className="text-sm text-muted-foreground">Curated listings of seasonal gatherings and learning opportunities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-seasonal-winter mt-1" />
                      <div>
                        <h4 className="font-semibold">Plant Medicine Insights</h4>
                        <p className="text-sm text-muted-foreground">Traditional knowledge and modern applications of local medicinal plants</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Content */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Recent Newsletters</h3>
                <div className="space-y-4">
                  {pastNewsletters.map((newsletter, index) => (
                    <Card key={index} className="hover:shadow-warm transition-smooth">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{newsletter.title}</h4>
                          <span className="text-xs text-muted-foreground">{newsletter.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{newsletter.preview}</p>
                        <div className="flex flex-wrap gap-1">
                          {newsletter.topics.map((topic, topicIndex) => (
                            <span key={topicIndex} className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Subscription Form */}
            <div className="space-y-8">
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle>Subscribe to Earth Spiral</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address*</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="location">Location (optional)</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                        placeholder="e.g., Boulder, Louisville, Longmont"
                      />
                    </div>

                    <div>
                      <Label>I'm most interested in: (select all that apply)</Label>
                      <div className="grid md:grid-cols-2 gap-3 mt-3">
                        {interests.map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox
                              id={interest}
                              checked={formData.interests.includes(interest)}
                              onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                            />
                            <Label htmlFor={interest} className="text-sm">{interest}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="experience">Tell us about your experience with nature connection (optional)</Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => setFormData(prev => ({...prev, experience: e.target.value}))}
                        placeholder="Share your background with foraging, herbalism, seasonal living, or nature connection..."
                        rows={3}
                      />
                    </div>

                    <Button type="submit" variant="seasonal" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Subscribe to Newsletter
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We respect your privacy. Unsubscribe at any time. Newsletter sent monthly with seasonal shifts.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Newsletter;