import Hero from "../components/Hero";
import AnimalProfiles from "../components/AnimalProfiles";
import InteractiveMapPreview from "../components/InteractiveMapPreview";
import StatsDashboard from "../components/StatsDashboard";
import EducationalResources from "../components/EducationalResources";
import EcoTourism from "../components/EcoTourism";
import Marketplace from "../components/Marketplace";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AnimalProfiles />
      <InteractiveMapPreview />
      <StatsDashboard />
      <EducationalResources />
      <EcoTourism />
      <Marketplace />
    </div>
  );
}
