
using PlanetExplorer.Models;
using PlanetExplorer.Services;

namespace PlanetExplorer;

public partial class MainPage : ContentPage
{
    private PlanetService _planetService;

    public MainPage()
    {
        InitializeComponent();
        _planetService = new PlanetService();
        PlanetsCollection.ItemsSource = _planetService.GetAllPlanets();
    }

    private async void OnPlanetSelectionChanged(object sender, SelectionChangedEventArgs e)
    {
        if (e.CurrentSelection.FirstOrDefault() is Planet planet)
        {
            // Deselect the item
            ((CollectionView)sender).SelectedItem = null;

            // Navigate to the detail page
            await Navigation.PushAsync(new PlanetDetailPage(planet));
        }
    }
}
