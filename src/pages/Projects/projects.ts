import { projectImages } from '@/data/projectImages'

export const projects = [
  {
    title: 'AfiliadoFlow - SaaS de Automação para Afiliados',
    description:
      'SaaS em produção com 438 clientes e cerca de 8 mil ofertas publicadas por dia. Encontra ofertas no Mercado Livre, Amazon e Shopee, gera o link de afiliado e publica sozinho em grupos e canais do WhatsApp e Telegram. Assinatura recorrente, app Android, extensão Chrome, clonagem de ofertas e painel administrativo. Desenvolvido e mantido em parceria.',
    techs: ['Python', 'Flask', 'Celery', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Baileys (WhatsApp)', 'Android'],
    github: 'https://github.com/LeandrSDEV',
    site: 'https://www.afiliadoflow.com',
    live: 'Em produção',
    images: projectImages.afiliadoflow,
    private: true
  },
  {
    title: 'Sistema de Gestão - Lanchonetes, Restaurantes e Pizzarias',
    description:
      'Sistema completo com 34 módulos e mais de 370 classes Java no back-end: cardápio digital, pedidos por mesa (QR Code) e delivery, PDV de balcão, cozinha em tempo real, rotas do motoboy com GPS e rastreio pelo cliente, estoque, cupons e fidelidade, módulo fiscal, integração TEF, impressão de pedidos, robô de WhatsApp com IA (Gemini) e permissões por perfil.',
    techs: ['Java 17', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Baileys', 'Gemini AI', 'WebSocket', 'Docker'],
    github: 'https://github.com/LeandrSDEV',
    images: projectImages.gestao,
    private: true
  },
  {
    title: 'Portal Embaixadores - Plataforma Administrativa',
    description:
      'Plataforma de gestão de embaixadores para venda de cursos online. Dashboard analítico, fulfillment automático via Eduzz, automação n8n e controle de acesso com Keycloak.',
    techs: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Keycloak', 'React', 'TypeScript', 'Material-UI', 'n8n', 'Docker'],
    github: 'https://github.com/LeandrSDEV',
    images: projectImages.embaixadores,
    private: true
  },
  {
    title: 'AGS - WEBSITE',
    description:
      'Desenvolvimento realizado em website corporativo moderno, profissional e responsivo para a Applied Geoscience Solutions (AGS), uma empresa de consultoria em geociências costeiras, marinhas e geotécnicas, sediada na Flórida.',
    techs: ['C# / .NET 8', 'ASP.NET Core MVC', 'Razor Views', 'JavaScript'],
    github: 'https://github.com/LeandrSDEV/AGSWebsite',
    images: projectImages.ags
  },
  {
    title: 'JSProject - Automação',
    description:
      'Uma aplicação completa desenvolvida para automatizar o processamento de arquivos de servidores e beneficiários, realizando leitura, comparação, formatação e geração de relatórios a partir de arquivos .txt e .xlsx.',
    techs: ['C# / .NET 8', 'ASP.NET Core Web API', 'Blazor Server', 'SQL Server'],
    github: 'https://github.com/LeandrSDEV/JS_Services',
    images: projectImages.jsproject
  },
  {
    title: 'EcoDoar - WEBSITE',
    description:
      'Plataforma web de doações voltada para ajudar animais em situação de rua, promovendo solidariedade, engajamento social e consciência ambiental por meio de um sistema simples e gamificado.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    github: 'https://github.com/LeandrSDEV/Ecodoar',
    images: projectImages.ecodoar
  },
  {
    title: 'JSService - WEBSITE',
    description:
      'Desenvolvido em ASP.NET Core MVC com MySQL para uma empresa especializada em reparo de betoneiras e criação de formas de construção.',
    techs: ['C# / .NET 8', 'ASP.NET Core MVC', 'MySQL', 'Entity Framework Core (ORM)'],
    github: 'https://github.com/LeandrSDEV/construcao',
    images: projectImages.contrucao
  },
  {
    title: 'First API - Buscar por cep',
    description:
      'API REST desenvolvida com ASP.NET Core, aplicando conceitos de arquitetura em camadas, Entity Framework Core e boas práticas de desenvolvimento de APIs, com documentação via Swagger.',
    techs: ['C# / .NET 8', 'ASP.NET Core Web API', 'Swagger (OpenAPI)', 'SQL Server', 'Entity Framework Core'],
    github: 'https://github.com/LeandrSDEV/First_API',
    images: projectImages.firstapi
  },
  {
    title: 'Lista Pokemon - Catalógo',
    description:
      'Projeto front-end desenvolvido com HTML, CSS e JavaScript puro, que apresenta uma listagem interativa de Pokémons com suporte a tema claro e escuro, layout responsivo e organização visual em cards.',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/LeandrSDEV/projeto-listagem-pokemon',
    images: projectImages.listapok
  },
  {
    title: 'Contatos - WEBSITE',
    description:
      'Aplicação web desenvolvida com ASP.NET Core MVC, seguindo o padrão MVC (Model–View–Controller), com o objetivo de praticar conceitos de CRUD, Entity Framework Core e organização de camadas.',
    techs: ['C# / .NET 8 ', 'ASP.NET Core MVC', 'Razor Views', 'SQL Server', 'Entity Framework Core'],
    github: 'https://github.com/LeandrSDEV/ListaContatosMVC',
    images: projectImages.contatomvc
  }
]
