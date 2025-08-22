
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import cardsImage from '@/assets/seasonal-cards-mockup.jpg';
import wheelImage from '@/assets/wheel-of-year-poster.jpg';
import mapImage from '@/assets/wheel-of-year-map.jpg';

const ShopPreview = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Rocky Mountain Wheel of the Year",
      price: "$45",
      image: wheelImage,
      description: "Beautiful poster featuring seasonal patterns of the Front Range bioregion",
      badge: "Bestseller",
      badgeColor: "bg-accent"
    },
    {
      id: 2,
      name: "Wheel of the Year Map & Guide",
      price: "$35",
      image: mapImage,
      description: "Detailed seasonal guide with nature-based activities and ecological insights",
      badge: "New",
      badgeColor: "bg-spring-green"
    },
    {
      id: 3,
      name: "Seasonal Greeting Cards",
      price: "$24",
      image: cardsImage,
      description: "Set of 8 cards featuring watercolor Colorado flora through the seasons",
      badge: "Popular",
      badgeColor: "bg-autumn-orange"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Bring the <span className="text-seasonal">Seasons</span> Home
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beautiful artwork and guides to help you stay connected with Colorado's natural rhythms throughout the year.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-warm transition-smooth group">
              <CardHeader className="p-0 relative">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white border-0`}>
                  {product.badge}
                </Badge>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{product.description}</p>
                
                <div className="flex items-center mt-3 text-sm text-muted-foreground">
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

        {/* Shop CTA */}
        <div className="text-center">
          <Button variant="seasonal" size="lg">
            View All Products
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ShopPreview;
