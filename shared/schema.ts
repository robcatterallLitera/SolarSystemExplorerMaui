import { pgTable, text, serial, integer, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const planets = pgTable("planets", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  diameter: real("diameter").notNull(),
  distanceFromSun: real("distance_from_sun").notNull(),
  orbitalPeriod: real("orbital_period").notNull(),
  imageUrl: text("image_url").notNull(),
  color: text("color").notNull(),
  facts: text("facts").array().notNull(),
});

export const insertPlanetSchema = createInsertSchema(planets).pick({
  name: true,
  description: true,
  diameter: true,
  distanceFromSun: true,
  orbitalPeriod: true,
  imageUrl: true,
  color: true,
  facts: true,
});

export type InsertPlanet = z.infer<typeof insertPlanetSchema>;
export type Planet = typeof planets.$inferSelect;
