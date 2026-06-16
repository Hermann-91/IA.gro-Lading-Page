# 🚜 IA.gro - Gestão Rural 🌟

> O ecossistema digital inteligente focado no manejo operacional, controle financeiro e inteligência de mercado para a cacauicultura.

O **IA.gro** é uma landing page de altíssima conversão, projetada com estética premium e arquitetura modular moderna para apresentar um software de gestão agrícola dedicado ao produtor de cacau.

---

## 🎯 Proposta do Projeto

O cultivo de cacau exige precisão operacional e acompanhamento constante do mercado. O **IA.gro** resolve a desconexão do produtor no campo oferecendo:
* **Inteligência de Mercado**: Cotações da arroba do cacau em tempo real baseadas na Bolsa de Nova York (NY).
* **Clima Inteligente**: Dados meteorológicos locais atualizados a cada 30 minutos para guiar adubações, podas e colheitas.
* **Assistente com Inteligência Artificial**: Um engenheiro agrônomo virtual de bolso, treinado especificamente no combate a pragas (como a Vassoura-de-Bruxa, Monilíase e Podridão Parda) e recomendações de manejo.
* **Gestão de Equipes e Finanças**: Controle de custos de produção, fluxo de caixa e atribuição de tarefas para trabalhadores de campo com níveis de acesso seguros.

---

## 🛠️ Tecnologias Utilizadas & Arquitetura

Para manter o carregamento instantâneo, compatibilidade nativa completa e facilidade de deploy em servidores de hospedagem compartilhada (como cPanel na HostGator), optamos por uma arquitetura moderna e leve:

1. **Web Components Nativos (HTML5 Custom Elements)**: Todas as seções da página foram transformadas em componentes reutilizáveis e encapsulados (como `<menu-bar>`, `<hero-section>`, `<features-tabs>`, etc.).
2. **Vite**: Ferramenta de build que automatiza a injeção de CSS específico dos componentes e a importação de templates HTML crus (`?raw`) diretamente no bundle final de produção.
3. **Vanilla CSS**: Controle completo da identidade visual premium em HSL, com suporte dinâmico a Temas Claro (Light) e Escuro (Dark).
4. **Vanilla JS**: Sem o peso de frameworks (React/Angular/Vue), obtendo 100% de performance nativa do navegador.

---

## 📁 Estrutura de Pastas

```text
├── .github/
│   └── workflows/
│       └── deploy.yml       # Pipeline do GitHub Actions (CI/CD via FTP para HostGator)
├── assets/                  # Mídias e imagens originais do projeto
├── components/              # Pasta de componentes encapsulados
│   ├── faq-section/         # Componente do Acordeão de FAQ
│   ├── features-tabs/       # Componente do painel interativo (Aba Financeiro, Tarefas, IA)
│   ├── footer-section/      # Componente do Rodapé
│   ├── hero-section/        # Componente da seção topo e cronômetro de escassez
│   ├── menu-bar/            # Barra de Navegação e seletor de tema (claro/escuro)
│   ├── portal-feature/      # Painel de clima e mercado
│   ├── pricing-section/     # Planos e precificação
│   ├── problem-section/     # Apresentação das dores do produtor
│   └── roles-section/       # Níveis de acesso de usuários
├── public/                  # Arquivos estáticos copiados na raiz do build (.htaccess, etc.)
├── index.html               # Página HTML raiz simplificada
├── script.js                # Arquivo JS de entrada (importação dos componentes)
├── style.css                # Estilo global, design system (cores HSL) e resets
├── vite.config.js           # Arquivo de configuração do Vite (assetsDir: 'static', base: './')
└── package.json             # Dependências e scripts de automação
```

---

## 🚀 Como Executar o Projeto Localmente

### 1. Requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

### 2. Instalação das dependências
Abra o terminal na pasta do projeto e execute:
```bash
npm install
```

### 3. Executar o servidor de desenvolvimento
Inicie o servidor local do Vite:
```bash
npm run dev
```
Acesse o endereço exibido no terminal (geralmente `http://localhost:5173`) para visualizar a página em tempo real.

---

## 📦 Compilação de Produção & Deploy

### Compilar o código
Para empacotar o projeto em arquivos altamente otimizados e minificados para produção, execute:
```bash
npm run build
```
Esse comando gerará a pasta `/dist` na raiz do projeto contendo:
* `index.html` (com caminhos de links relativos)
* Uma pasta `static/` contendo os arquivos CSS e JavaScript minificados prontos para uso.
* Os arquivos `.htaccess` e favicons necessários.

### Deploy no cPanel (HostGator)
1. **Manual**: Transfira o conteúdo de dentro do diretório `/dist/` diretamente para a pasta da sua hospedagem (ex: `public_html/ia.gro/`).
2. **Automatizado**: O pipeline do GitHub Actions em `.github/workflows/deploy.yml` já está configurado. Cadastre os segredos `FTP_SERVER`, `FTP_USERNAME` e `FTP_PASSWORD` nos Secrets do seu repositório GitHub para efetuar deploys automáticos em cada `git push` para a branch `main`.

---

Desenvolvido com 💚 focado no fortalecimento e modernização da cacauicultura.
