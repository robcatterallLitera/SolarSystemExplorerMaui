
namespace PlanetExplorer;

public partial class AppShell : Shell
{
    public AppShell()
    {
        InitializeComponent();
        
        Routing.RegisterRoute(nameof(PlanetDetailPage), typeof(PlanetDetailPage));
    }
}
