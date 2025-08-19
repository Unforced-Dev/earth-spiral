import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Send, MapPin, Phone, MessageCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
  };

  const contactReasons = [
    "General inquiry",
    "Wholesale or bulk orders",
    "Workshop or event collaboration",
    "Press or media inquiry",
    "Directory listing submission",
    "Technical support",
    "Partnership opportunity",
    "Other"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full gradient-earth flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                Message <span className="text-seasonal">Received</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Thank you for reaching out! We'll get back to you within 1-2 business days. 
                In the meantime, feel free to explore our community directory or sign up for our newsletter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="earth">
                  Browse Community Directory
                </Button>
                <Button variant="mountain">
                  Subscribe to Newsletter
                </Button>
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
      <section className="py-16 gradient-mountain">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">
              Get in <span className="text-white">Touch</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Have questions about our products, want to collaborate, or interested in joining our directory? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle>Ways to Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-earth flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">hello@earthspiral.co</p>
                      <p className="text-sm text-muted-foreground">We typically respond within 1-2 business days</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-seasonal flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">Boulder County, Colorado</p>
                      <p className="text-sm text-muted-foreground">Serving the Front Range bioregion</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-mountain flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Response Time</h4>
                      <p className="text-muted-foreground">1-2 business days</p>
                      <p className="text-sm text-muted-foreground">Longer during seasonal transitions and new moon phases</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm">Do you offer local pickup?</h4>
                    <p className="text-sm text-muted-foreground">Yes! We offer local pickup in the Boulder area. Select this option at checkout.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm">Can I wholesale your products?</h4>
                    <p className="text-sm text-muted-foreground">We offer wholesale pricing for retailers and practitioners. Contact us for a wholesale catalog.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm">Do you teach workshops?</h4>
                    <p className="text-sm text-muted-foreground">Yes! We offer seasonal workshops and can create custom experiences for groups.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm">How do I get listed in your directory?</h4>
                    <p className="text-sm text-muted-foreground">Use the contact form and select "Directory listing submission" to get started.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name*</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email*</Label>
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
                      <Label htmlFor="type">What can we help you with?</Label>
                      <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({...prev, type: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a reason for contacting us" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactReasons.map((reason) => (
                            <SelectItem key={reason} value={reason}>{reason}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject*</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({...prev, subject: e.target.value}))}
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message*</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                        placeholder="Tell us more about your inquiry, question, or how we can help..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" variant="earth" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We'll get back to you within 1-2 business days. For urgent inquiries, please include "URGENT" in your subject line.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">
              Based in the <span className="text-seasonal">Front Range</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Service Area</h3>
                  <p className="text-sm text-muted-foreground">
                    Boulder County and the Colorado Front Range bioregion
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <MessageCircle className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    1-2 business days for all inquiries
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Best Contact Method</h3>
                  <p className="text-sm text-muted-foreground">
                    Email through this form or hello@earthspiral.co
                  </p>
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

export default Contact;