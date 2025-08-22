
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Filter, Grid, List } from 'lucide-react';
import cardsImage from '@/assets/seasonal-cards-mockup.jpg';
import wheelImage from '@/assets/wheel-of-year-poster.jpg';
import mapImage from '@/assets/wheel-of-year-map.jpg';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Rocky Mountain Wheel of the Year - Poster",
      price: "$45",
      originalPrice: "$55",
      image: wheelImage,
      description: "Large format poster featuring seasonal patterns of the Front Range bioregion. Perfect for home or office.",
      badge: "Bestseller",
      badgeColor: "bg-accent",
      category: "Artwork"
    },
    {
      id: 2,
      name: "Wheel of the Year Map & Activity Guide",
      price: "$35",
      image: mapImage,
      description: "Comprehensive guide with seasonal activities, foraging tips, and ecological insights for each season.",
      badge: "New",
      badgeColor: "bg-spring-green",
      category: "Guides"
    },
    {
      id: 3,
      name: "Seasonal Greeting Cards",
      price: "$24",
      image: cardsImage,
      description: "Set of 8 cards featuring watercolor Colorado flora through the seasons. Blank inside.",
      badge: "Popular",
      badgeColor: "bg-autumn-orange",
      category: "Cards"
    },
    {
      id: 4,
      name: "Boulder Regenerative Ecology Map",
      price: "$28",
      image: mapImage,
      description: "Detailed map of regenerative projects and initiatives across Boulder County.",
      category: "Maps"
    },
    {
      id: 5,
      name: "Spring Family Activity Guide",
      price: "$18",
      image: mapImage,
      description: "Nature-based activities for families to connect with spring's awakening.",
      category: "Guides"
    },
    {
      id: 6,
      name: "Summer Family Activity Guide",
      price: "$18",
      image: mapImage,
      description: "Explore summer's abundance with guided family activities and nature crafts.",
      category: "Guides"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Shop Header */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Earth Spiral <span className="text-seasonal">Shop</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beautiful artwork, guides, and resources to bring Colorado's seasonal rhythms into your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">All</Button>
                <Button variant="ghost" size="sm">Artwork</Button>
                <Button variant="ghost" size="sm">Guides</Button>
                <Button variant="ghost" size="sm">Cards</Button>
                <Button variant="ghost" size="sm">Maps</Button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">View:</span>
              <Button variant="ghost" size="sm">
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-warm transition-smooth group">
                <CardHeader className="p-0 relative">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  {product.badge && (
                    <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white border-0`}>
                      {product.badge}
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                    {product.category}
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="text-right">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="ml-2">(24 reviews)</span>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button variant="earth" className="w-full">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 gradient-earth">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Stay Connected with the Seasons
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get updates on new products, seasonal activities, and special offers for our community.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPAz-Rn42IzLpTsa8b-y1b-d3OTJUZ2tx6dq6j4M2kKbw_KQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              Sign Up
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
