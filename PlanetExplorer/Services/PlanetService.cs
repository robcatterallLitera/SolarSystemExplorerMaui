
using PlanetExplorer.Models;

namespace PlanetExplorer.Services
{
    public class PlanetService
    {
        private List<Planet> _planets;

        public PlanetService()
        {
            _planets = new List<Planet>
            {
                new Planet
                {
                    Id = 1,
                    Name = "Mercury",
                    Description = "The smallest and closest planet to the Sun in the Solar System.",
                    Diameter = 4879,
                    DistanceFromSun = 57.9,
                    OrbitalPeriod = 88,
                    ImageUrl = "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e",
                    Color = "#A37C6C",
                    Facts = new List<string>
                    {
                        "Mercury has no moons",
                        "The surface is heavily cratered",
                        "It has extreme temperature variations"
                    }
                },
                new Planet
                {
                    Id = 2,
                    Name = "Venus",
                    Description = "Often called Earth's sister planet due to similar size and mass.",
                    Diameter = 12104,
                    DistanceFromSun = 108.2,
                    OrbitalPeriod = 225,
                    ImageUrl = "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
                    Color = "#E6B88A",
                    Facts = new List<string>
                    {
                        "Rotates backwards compared to most planets",
                        "Hottest planet in our solar system",
                        "Thick atmosphere of carbon dioxide"
                    }
                }
            };
        }

        public List<Planet> GetAllPlanets()
        {
            return _planets;
        }

        public Planet GetPlanetById(int id)
        {
            return _planets.FirstOrDefault(p => p.Id == id);
        }
    }
}
