import Cards from "./cards";
import FeatureCard from "./featurecard";
import HeroSection from "./hero-section";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black">
      <HeroSection />
      <FeatureCard />
      <Cards />
    </div>
  );
};

export default LandingPage;
