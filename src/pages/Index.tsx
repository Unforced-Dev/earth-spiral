import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ShopPreview from '@/components/ShopPreview';
import CommunityPreview from '@/components/CommunityPreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ShopPreview />
      <CommunityPreview />
    </div>
  );
};

export default Index;
