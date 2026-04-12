# 🚀 Portfólio — Frontend (Vitrine Pública)

Este repositório contém a vitrine pública do meu portfólio, desenvolvida com React + Vite + TypeScript.
Ela existe para apresentação visual, navegação e deploy estático, permitindo que qualquer recrutador visualize meus projetos sem dependências de backend.

---
### 👉 Importante:
O foco principal do meu trabalho é a stack Blazor + API C#, descrita mais abaixo.
O React aqui não substitui o projeto principal — ele complementa, resolvendo uma limitação de infraestrutura (deploy estático no GitHub Pages).

- 🔗 Deploy:

https://leandrsdev.github.io/portfolio-web/

---

### 🧠 Contexto e Decisão Técnica

Meu portfólio principal foi desenvolvido com:

- Blazor (Frontend)
- ASP.NET Core (API REST em C#)

Essa arquitetura é 100% funcional, desacoplada e profissional.
Porém, não é possível publicar uma aplicação Blazor + API C# completa no GitHub Pages, pois o ambiente é estritamente estático.

Por isso, tomei uma decisão técnica consciente:

- ✔️ Manter o Blazor + API C# como stack principal
- ✔️ Criar esta aplicação em React como vitrine pública
- ✔️ Replicar arquitetura, contratos e organização de código
- ✔️ Garantir que o projeto publicado seja real, completo e bem estruturado

---

### 🧱 Arquitetura da Vitrine (React)

Mesmo sendo uma vitrine, este frontend não é simplificado.
Ele segue princípios de arquitetura limpa, separação de responsabilidades e consumo de dados desacoplado.

        Frontend (React + Vite)
        │
        ├── Pages        → Home, About
        ├── Components   → ProjectCard e UI reutilizável
        ├── Services     → Camada de acesso a dados (API / Mock)
        ├── Types        → Contratos tipados (espelhando a API real)
        ├── Mocks        → Fallback estático
        └── Router       → SPA navigation


Essa estrutura permite:

- Substituir mocks por API real sem refatoração
- Evoluir o projeto sem acoplamento
- Demonstrar organização de código em nível profissional

---

### 🖥️ Tecnologias — Frontend (React)

- React
- Vite
- TypeScript
- React Router DOM
- CSS modularizado
- Arquitetura por camadas
- GitHub Pages (deploy)

---

### 🔌 Stack Principal — Blazor + API C# (Foco do Portfólio)

O núcleo do meu portfólio está neste projeto:

- 🔗 API + Blazor:
  
https://github.com/LeandrSDEV/portfolio-api

Tecnologias utilizadas:
### Backend
- C#
- ASP.NET Core
- API REST
- DTOs
- Controllers
- Separação de camadas
- Boas práticas de arquitetura

### Frontend

- Blazor
- Componentização
- Consumo de API
- Tipagem forte
- Fluxo real de aplicação

---

### 🔀 Navegação

Aplicação SPA usando React Router:

- / — Home
- /about — Sobre

Configurada corretamente para funcionar no GitHub Pages sem problemas de rota.

---

### 🎨 Visual & UX

- Layout clean
- Paleta consistente
- Cards interativos
- Responsividade

Estrutura preparada para loading e fallback

### 🚀 Scripts

      npm run dev      # Ambiente local
      npm run build    # Build de produção
      npm run deploy   # Deploy no GitHub Pages

### 🛠️ Executar localmente

      git clone https://github.com/LeandrSDEV/portfolio-web.git
      cd portfolio-web
      npm install
      npm run dev

Acesse:

http://localhost:5173

---

### 👨‍💻 Sobre mim

Sou Leandro, desenvolvedor Full Stack, com foco em:

- C# / ASP.NET Core
- Blazor
- Arquitetura de software
- Front-end moderno

Este repositório representa uma vitrine pública, enquanto o projeto Blazor + API representa o núcleo técnico do meu portfólio.

- 📫 Linkedin:https://www.linkedin.com/in/leandro-de-jesus-santos-128478391/
- 📫 GitHub: https://github.com/LeandrSDEV



---

## ✅ Deploy (Vercel / Netlify / GitHub Pages)

Este projeto já está preparado para deploy como **SPA (React Router)** em:

- **Vercel** (com `vercel.json`)
- **Netlify** (com `netlify.toml`)
- **GitHub Pages** (com workflow em `.github/workflows/deploy-gh-pages.yml` + fallback `public/404.html`)

### Vercel (recomendado para deploy rápido)
Checklist:
1. Importar o repositório na Vercel
2. Framework: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy ✅

> O arquivo `vercel.json` já garante o fallback do React Router (refresh em rotas funciona).

### Netlify
Checklist:
1. New site from Git
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy ✅

> O arquivo `netlify.toml` já configura redirect SPA para `/index.html`.

### GitHub Pages (Actions)
Checklist:
1. No GitHub: Settings → Pages → Source: **GitHub Actions**
2. Faça push para a branch `main`
3. Aguarde o workflow **Deploy to GitHub Pages** finalizar ✅

Notas:
- O workflow configura automaticamente `VITE_BASE="/<nome-do-repo>/"`.
- O `vite.config.ts` usa `process.env.VITE_BASE || '/'`, então **Vercel/Netlify** ficam com base `/` normalmente.

