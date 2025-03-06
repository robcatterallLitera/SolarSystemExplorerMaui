import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/planets", async (_req, res) => {
    try {
      const planets = await storage.getPlanets();
      res.json(planets);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch planets" });
    }
  });

  app.get("/api/planets/:id", async (req, res) => {
    try {
      const planet = await storage.getPlanet(parseInt(req.params.id));
      if (!planet) {
        res.status(404).json({ message: "Planet not found" });
        return;
      }
      res.json(planet);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch planet" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
