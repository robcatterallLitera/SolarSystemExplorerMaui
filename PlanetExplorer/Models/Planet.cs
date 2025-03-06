
namespace PlanetExplorer.Models
{
    public class Planet
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Diameter { get; set; }
        public double DistanceFromSun { get; set; }
        public double OrbitalPeriod { get; set; }
        public string ImageUrl { get; set; }
        public string Color { get; set; }
        public List<string> Facts { get; set; }

        public Planet()
        {
            Facts = new List<string>();
        }
    }
}
