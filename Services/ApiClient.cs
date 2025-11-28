using Portfolio.Blazor.Pages;
using Portifolio.Domain.Entities;
using System.Net.Http.Json;

namespace Portfolio.Blazor.Services
{
    public class ApiClient
    {
        private readonly HttpClient _http;

        public ApiClient(HttpClient http)
        {
            _http = http;
        }

        public async Task<List<Project>> GetProjetos()
        {
            return await _http.GetFromJsonAsync<List<Project>>("projetos");
        }
    }
}
