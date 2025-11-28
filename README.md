🚀 Tecnologias Utilizadas
   
O projeto foi desenvolvido utilizando um conjunto moderno de tecnologias voltadas para aplicações Web de alta performance:

• Blazor WebAssembly ( .NET )

• C#

• Razor Components

• Dependency Injection (DI)

• HttpClient para consumo de API

• CSS / Bootstrap / MudBlazor

• Integração direta com a API externa Portfolio.API

   
   🔗 Integração com API

A aplicação Web estabelece comunicação direta com o backend Portfolio.API, responsável por fornecer dados dinâmicos essenciais, como:

• Projetos cadastrados

• Habilidades

• Contatos

• Experiências profissionais

A configuração do HttpClient é realizada no Program.cs, definindo o endpoint base para todas as requisições:

          builder.Services.AddScoped(sp => new HttpClient
      {
          BaseAddress = new Uri("https://localhost:7240/") // Em desenvolvimento; em produção será hospedado no Render.
      });
      
Essa abordagem garante um consumo eficiente dos endpoints REST, permitindo que o front-end seja totalmente desacoplado e escalável.

   
   🧪 Testes e Desenvolvimento

Durante a fase de desenvolvimento, o projeto utiliza:

• Execução local via dotnet watch run, com recarregamento automático

• Backend documentado com Swagger, facilitando testes e inspeção de endpoints

• Planejamento para implementação de paginação, filtros dinâmicos e outras funcionalidades avançadas

 
   🛠️ Funcionalidades Implementadas (atualizadas conforme evolução do projeto)

 ✔️ Estrutura inicial do projeto

 ✔️ Configuração e comunicação com a API
 
 🟥 Página de Projetos (em desenvolvimento)
 
 🟥 Página de Habilidades
 
 🟥 Página de Contato com envio para API
 
 🟥 Dashboard administrativo (futuramente)
