# Melhorias aplicadas no portfólio

## O que foi reformulado
- Estrutura convertida para **uma única página**.
- **Topbar interativa** com rolagem suave entre seções.
- **Scroll progress bar** no topo.
- Animações de entrada com foco em títulos e blocos ao subir/descer a página.
- Hero reformulado com posicionamento profissional mais forte.
- Seções novas: **Sobre**, **Experiência**, **Projetos**, **Certificados** e **Contato**.
- Destaque visual principal para:
  - **DECODE Lanchonete**
  - **Embaixadores / Vitrine de Parceiros**
- Grid de projetos secundários com apresentação mais clara.
- Visual mais moderno com mistura de:
  - estética premium
  - glassmorphism
  - contraste forte
  - leve toque nostálgico/tech

## Arquivos principais alterados
- `src/App.tsx`
- `src/main.tsx`
- `src/styles/portfolio.css`
- `src/styles/global.css`

## Novos assets adicionados
- `src/assets/featured/`

## Observação
A checagem de TypeScript foi validada com sucesso (`tsc --noEmit`).
O build final com Vite não foi executado no ambiente atual por falta do binding nativo do `rolldown-vite` no pacote zipado.
