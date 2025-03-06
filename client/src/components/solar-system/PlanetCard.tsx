import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Planet } from "@shared/schema";

interface Props {
  planet: Planet;
}

export default function PlanetCard({ planet }: Props) {
  return (
    <Card className="w-full bg-black/50 backdrop-blur-lg border-white/10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          {planet.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-300">{planet.description}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-400">Diameter</h4>
              <p className="text-lg text-white">{planet.diameter.toLocaleString()} km</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-400">Distance from Sun</h4>
              <p className="text-lg text-white">{planet.distanceFromSun.toLocaleString()} million km</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Quick Facts</h4>
            <div className="flex flex-wrap gap-2">
              {planet.facts.map((fact, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {fact}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
