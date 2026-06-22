import { PreLoader } from "@/components/primitives/pre-loader";
import { HeroSection } from "@/sections/home/home-section";
import { VehicleIntroSection } from "@/sections/home/vehicle-intro/vehicle-intro-section";
import { ClientProviders } from "@/motion/client-providers";

export default function HomePage() {
  return (
    <ClientProviders>
      <main>
        <PreLoader />
        <HeroSection />
        <VehicleIntroSection />
      </main>
    </ClientProviders>
  );
}
