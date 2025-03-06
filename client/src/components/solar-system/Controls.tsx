import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import type { Planet } from "@shared/schema";

interface Props {
  planets: Planet[];
  selectedPlanet?: Planet;
  onPlanetSelect: (planet: Planet) => void;
  onSpeedChange: (speed: number) => void;
}

export default function Controls({ planets, selectedPlanet, onPlanetSelect, onSpeedChange }: Props) {
  const [speed, setSpeed] = useState(1);

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {planets.map((planet) => (
            <Button
              key={planet.id}
              variant={selectedPlanet?.id === planet.id ? "default" : "outline"}
              onClick={() => onPlanetSelect(planet)}
              className="text-sm"
            >
              {planet.name}
            </Button>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">Orbit Speed</span>
          <Slider
            value={[speed]}
            min={0.1}
            max={2}
            step={0.1}
            onValueChange={([value]) => {
              setSpeed(value);
              onSpeedChange(value);
            }}
            className="w-48"
          />
        </div>
      </div>
    </div>
  );
}
