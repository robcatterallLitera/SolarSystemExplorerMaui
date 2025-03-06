
using PlanetExplorer.Models;

namespace PlanetExplorer;

public partial class PlanetDetailPage : ContentPage
{
    public PlanetDetailPage(Planet planet)
    {
        InitializeComponent();
        BindingContext = planet;
    }
}
