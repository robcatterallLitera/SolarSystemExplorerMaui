import type { InsertPlanet } from "@shared/schema";

export const planetData: InsertPlanet[] = [
  {
    name: "Mercury",
    description: "The smallest and closest planet to the Sun in the Solar System.",
    diameter: 4879,
    distanceFromSun: 57.9,
    orbitalPeriod: 88,
    imageUrl: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e",
    color: "#A37C6C",
    facts: [
      "Mercury has no moons",
      "The surface is heavily cratered",
      "It has extreme temperature variations"
    ]
  },
  {
    name: "Venus",
    description: "Often called Earth's sister planet due to similar size and mass.",
    diameter: 12104,
    distanceFromSun: 108.2,
    orbitalPeriod: 225,
    imageUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
    color: "#E6B88A",
    facts: [
      "Rotates backwards compared to most planets",
      "Hottest planet in our solar system",
      "Thick atmosphere of carbon dioxide"
    ]
  },
  // Add more planets...
];

export const CAMERA_POSITION = {
  x: 0,
  y: 20,
  z: 30,
};

export const ORBIT_SPEED_MULTIPLIER = 0.5;
