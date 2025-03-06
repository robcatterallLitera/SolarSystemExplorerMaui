import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { Planet } from "@shared/schema";
import Visualization from "@/components/solar-system/Visualization";
import PlanetCard from "@/components/solar-system/PlanetCard";
import Controls from "@/components/solar-system/Controls";
import { ORBIT_SPEED_MULTIPLIER } from "@/lib/constants";

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>();
  const [orbitSpeed, setOrbitSpeed] = useState(1);

  const { data: planets, isLoading } = useQuery<Planet[]>({
    queryKey: ["/api/planets"],
  });

  if (isLoading || !planets) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <div className="text-white">Loading solar system...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0">
        <Visualization
          planets={planets}
          selectedPlanet={selectedPlanet}
          onPlanetClick={setSelectedPlanet}
        />
      </div>

      {selectedPlanet && (
        <div className="absolute top-4 right-4 w-96">
          <PlanetCard planet={selectedPlanet} />
        </div>
      )}

      <Controls
        planets={planets}
        selectedPlanet={selectedPlanet}
        onPlanetSelect={setSelectedPlanet}
        onSpeedChange={setOrbitSpeed}
      />
    </div>
  );
}
