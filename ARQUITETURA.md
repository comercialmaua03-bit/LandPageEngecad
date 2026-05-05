```
ARQUITETURA DE COMPONENTES - LANDING PAGE
==========================================

landing.vue (View Principal)
    │
    ├─→ Navbar           → Navegação + Links
    │
    ├─→ Hero            → Título, Subtítulo, CTA, Stats
    │
    ├─→ About           → Texto + Destaques + Box Lateral
    │
    ├─→ Services        → Grid de 6 Serviços
    │
    ├─→ Differentials   → 4 Diferenciais em Grid
    │
    ├─→ Area            → Localização + Mapa
    │
    ├─→ Contact         → 3 Cards de Contato + WhatsApp CTA
    │
    └─→ Footer          → Links + Copyright

FLUXO DE DADOS
==============

landing.vue (Config Management)
    │
    ├── config.hero_title ──────────→ Hero Component (prop)
    ├── config.hero_subtitle ───────→ Hero Component (prop)
    ├── config.about_text ──────────→ About Component (prop)
    ├── config.phone_number ────────→ Contact Component (prop)
    └── config.whatsapp_number ─────→ Contact Component (prop)

ESTILO & TAILWIND
=================

Cores Customizadas (tailwind.config.js):
  ├── brand-dark    (#0a3d2f) - Escuro
  ├── brand-mid     (#1a6b4a) - Médio
  ├── brand-light   (#2d9b6e) - Claro
  ├── brand-pale    (#e8f5f0) - Pálido
  ├── accent-blue   (#1a4f7a) - Azul
  └── surface       (#f7faf9) - Superfície

Tipografia:
  └── Plus Jakarta Sans (Google Fonts)

COMPONENTES ESPECÍFICOS
=======================

┌─────────────────────────────┐
│ Navbar                       │
├─────────────────────────────┤
│ - Logo + Marca              │
│ - Nav Links (Sobre, Serviços)│
│ - Botão Contato             │
│ Responsive: Hidden em mobile│
└─────────────────────────────┘

┌─────────────────────────────┐
│ Hero                         │
├─────────────────────────────┤
│ Props:                       │
│  - heroTitle                │
│  - heroSubtitle             │
│ - SVG Grid Background       │
│ - 4 Stats Cards             │
│ - 2 CTAs (Orçamento + Ver)  │
└─────────────────────────────┘

┌─────────────────────────────┐
│ About                        │
├─────────────────────────────┤
│ Props:                       │
│  - aboutText                │
│ - Grid 2 Colunas            │
│  L: Texto + 4 Checks        │
│  R: Card com Detalhes       │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Services                     │
├─────────────────────────────┤
│ - Grid 3 Colunas            │
│ - 6 Service Cards           │
│ - 1 CTA Card (gradiente)   │
│ - Hover Animation (rise)    │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Differentials               │
├─────────────────────────────┤
│ - Dark Background           │
│ - 4 Items em Grid           │
│ - Cada item tem ícone       │
│ - Responsive: 2 → 4 cols   │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Area                         │
├─────────────────────────────┤
│ - Card com Sombra           │
│ - Flex 2 Colunas            │
│  L: Texto + Pin Icon        │
│  R: SVG Map (Pin)          │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Contact                      │
├─────────────────────────────┤
│ Props:                       │
│  - phoneNumber              │
│  - whatsappNumber           │
│ - 3 Info Cards (Tel, WA, Address)│
│ - Grande CTA WhatsApp       │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Footer                       │
├─────────────────────────────┤
│ - Logo + Branding           │
│ - Links (Home, Serviços)    │
│ - Copyright                 │
│ - Dark Background           │
└─────────────────────────────┘

ROTAS
=====

/              → App.vue (HelloWorld)
/landing       → landing.vue (Nova Landing Page)
/:pathMatch    → Redireciona para /

CICLO DE VIDA
=============

landing.vue (onMounted):
  1. applyConfig() - Aplica configurações
  2. lucide.createIcons() - Inicializa ícones
  3. Componentes renderizam com props

Componentes com Props:
  Hero    ← hero_title, hero_subtitle
  About   ← about_text
  Contact ← phone_number, whatsapp_number

Componentes Stateless:
  Navbar, Services, Differentials, Area, Footer

ANIMAÇÕES CSS
=============

.fade-up - Fade in + Slide up (0.7s)
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

.stagger-X - Delay animations
  .stagger-1 { animation-delay: 0.1s; }
  .stagger-2 { animation-delay: 0.2s; }
  ...

.service-card:hover - Eleva card (6px)
  transform: translateY(-6px)
  box-shadow: 0 20px 40px rgba(...)

.btn-primary:hover - Elevação + Sombra
  transform: translateY(-2px)
  box-shadow: 0 8px 24px rgba(...)

ÍCONES LUCIDE
=============

Ícones Utilizados:
  - phone (navbar, contact)
  - arrow-right (CTAs)
  - check (about, services)
  - award (about)
  - mountain (services)
  - route (services)
  - droplets (services)
  - clipboard-list (services)
  - hard-hat (services)
  - timer (differentials)
  - users (differentials)
  - shield-check (differentials)
  - target (differentials)
  - map-pin (area, contact)
  - message-circle (contact)

Carregamento: CDN do Lucide
Inicialização: window.lucide.createIcons()

RESPONSIVIDADE
===============

Breakpoints Tailwind:
  sm  → 640px
  md  → 768px
  lg  → 1024px
  xl  → 1280px

Padrões Usados:
  - Hidden em pequenas telas (hidden md:flex)
  - Grid flexível (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
  - Padding responsivo (px-4 md:px-8)
  - Font sizes responsive (text-sm md:text-lg)

DEPENDÊNCIAS
============

Principais:
  - vue@^3.x
  - vue-router@^4.x
  - vite@^5.x
  - typescript@^5.x
  - tailwindcss@latest
  - @tailwindcss/vite@latest

CDN:
  - Tailwind CSS (versão 3.4.17)
  - Lucide Icons (versão 0.263.0)
  - Google Fonts (Plus Jakarta Sans)
```
