# 🔍 Checklist de Verificação - Landing Page Refatoração

## 1. Verificação de Arquivos

### Componentes Vue
- [ ] `src/components/landing/Navbar.vue` - Existe e tem `<script setup lang="ts">`
- [ ] `src/components/landing/Hero.vue` - Existe e tem `<script setup lang="ts">`
- [ ] `src/components/landing/About.vue` - Existe e tem `<script setup lang="ts">`
- [ ] `src/components/landing/Services.vue` - Existe e tem `<script setup lang="ts">`
- [ ] `src/components/landing/Differentials.vue` - Existe e tem `<script setup lang="ts">`
- [ ] `src/components/landing/Area.vue` - Existe e tem `<script setup lang="ts">`
- [ ] `src/components/landing/Contact.vue` - Existe e tem `<script setup lang="ts">`
- [ ] `src/components/landing/Footer.vue` - Existe e tem `<script setup lang="ts">`

### Views
- [ ] `src/views/landing.vue` - Existe e importa todos os componentes

### Configurações
- [ ] `tailwind.config.js` - Existe com cores customizadas
- [ ] `src/router/index.ts` - Importa `landing.vue`
- [ ] `src/env.d.ts` - Declara módulo `*.vue`
- [ ] `vite.config.ts` - Tem plugin Vue

### Tipos
- [ ] `src/types/global.d.ts` - Novo arquivo com tipos globais

## 2. Verificação de Estrutura de Componentes

Cada componente `.vue` deve ter:
```vue
<template>
  <!-- Conteúdo HTML -->
</template>

<script setup lang="ts">
// Lógica TypeScript
</script>

<style scoped>
/* Estilos CSS */
</style>
```

✅ Todos os componentes seguem este padrão

## 3. Verificação de Importações

No arquivo `src/views/landing.vue`:
```typescript
import Navbar from '../components/landing/Navbar.vue'
import Hero from '../components/landing/Hero.vue'
// ... etc
```

- [ ] Todas as importações têm extensão `.vue`
- [ ] Todos os caminhos estão corretos
- [ ] Nenhuma importação está comentada

## 4. Verificação de Tailwind

### Cores Definidas em `tailwind.config.js`
- [ ] `brand.dark: '#0a3d2f'`
- [ ] `brand.mid: '#1a6b4a'`
- [ ] `brand.light: '#2d9b6e'`
- [ ] `brand.pale: '#e8f5f0'`
- [ ] `accent.blue: '#1a4f7a'`
- [ ] `accent.light: '#2a7ab5'`
- [ ] `surface: '#f7faf9'`

### Classes Tailwind Usadas
- [ ] `bg-brand-dark` - Fundo escuro
- [ ] `bg-brand-mid` - Fundo médio
- [ ] `bg-brand-light` - Fundo claro
- [ ] `bg-brand-pale` - Fundo pálido
- [ ] `bg-surface` - Fundo de superfície
- [ ] `text-brand-dark` - Texto escuro

## 5. Comandos de Teste

### Instalar Dependências
```bash
npm install
```

### Executar Dev Server
```bash
npm run dev
```

### Acessar a Página
```
http://localhost:5173/landing
```

### Build para Produção
```bash
npm run build
```

## 6. Resolução de Erros

### Se receber "has no default export"
1. [ ] Certifique-se que o arquivo `.vue` existe
2. [ ] Verifique se o caminho da importação está correto
3. [ ] Limpe cache: `rm -r node_modules dist && npm install`
4. [ ] Reinicie dev server: `npm run dev`

### Se ícones não aparecerem
1. [ ] Verifique se o CDN do Lucide está carregado
2. [ ] Console do navegador - procure por erros de script
3. [ ] Verifique o arquivo `index.html`

### Se estilos não aplicarem
1. [ ] Verifique se Tailwind CSS está carregado
2. [ ] Certifique-se que `tailwind.config.js` existe
3. [ ] Verifique no console do navegador se há erros de CSS

## 7. Verificação Final

- [ ] Página carrega sem erros
- [ ] Todos os componentes são renderizados
- [ ] Ícones Lucide aparecem corretamente
- [ ] Estilos Tailwind aplicam-se corretamente
- [ ] Navegação funciona
- [ ] Links WhatsApp funcionam
- [ ] Página é responsiva
- [ ] Nenhum erro no console do navegador

## 8. Performance

- [ ] Componentes carregam rapidamente
- [ ] Sem warning sobre "missing key" em v-for
- [ ] Sem warning sobre "reactive refs"
- [ ] Tamanho do bundle é aceitável

---

**Última Atualização**: 05 de maio de 2026
**Status**: ✅ Refatoração Completa
