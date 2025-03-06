import { planets, type Planet, type InsertPlanet } from "@shared/schema";
import { planetData } from "@/lib/constants";

export interface IStorage {
  getPlanets(): Promise<Planet[]>;
  getPlanet(id: number): Promise<Planet | undefined>;
}

export class MemStorage implements IStorage {
  private planets: Map<number, Planet>;

  constructor() {
    this.planets = new Map();
    // Initialize with predefined planet data
    planetData.forEach((planet, index) => {
      this.planets.set(index + 1, { ...planet, id: index + 1 });
    });
  }

  async getPlanets(): Promise<Planet[]> {
    return Array.from(this.planets.values());
  }

  async getPlanet(id: number): Promise<Planet | undefined> {
    return this.planets.get(id);
  }
}

export const storage = new MemStorage();
