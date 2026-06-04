import Hero from "@/components/Hero";
import WorldBeckons from "@/components/WorldBeckons";
import Destinations from "@/components/Destinations";
import DiscoveryScroll from "@/components/DiscoveryScroll";
import JourneyPath from "@/components/JourneyPath";
import Stories from "@/components/Stories";
import FinalCTA from "@/components/FinalCTA";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#05080e] min-h-screen text-white">
      <Navigation />
      <Hero />
      <WorldBeckons />
      <Destinations />
      <DiscoveryScroll />
      <JourneyPath />
      <Stories />
      <FinalCTA />
      <Footer />
    </div>
  );
}
