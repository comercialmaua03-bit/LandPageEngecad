# 🆘 RESOLVER ERRO "has no default export"

## Identificar o Problema

### Passo 1: Capturar a Mensagem de Erro Completa

Quando você vê o erro, procure pela mensagem completa que é parecida com:

```
error TS1252: Cannot find module 'Navbar.vue'
has no default export
```

Ou:

```
[vite] failed to resolve import "../components/landing/Navbar.vue"
```

**Anote exatamente qual arquivo está dando o erro.**

## Soluções por Ordem de Probabilidade

### Solução 1: Limpar Cache e Reinstalar (80% de chance de funcionar)

```bash
# 1. Fechar o dev server (Ctrl+C se estiver rodando)

# 2. Remover node_modules e cache
rm -r node_modules

# 3. Remover dist
rm -r dist

# 4. Remover package-lock.json (se existir)
rm package-lock.json

# 5. Reinstalar dependências
npm install

# 6. Iniciar dev server
npm run dev
```

**Por que funciona**: Às vezes o Node cria cache de módulos que fica desincronizado.

---

### Solução 2: Verificar Arquivo Específico (se ainda tiver erro)

Se o erro menciona um arquivo específico (ex: `Navbar.vue`):

```bash
# 1. Verifique se o arquivo existe
ls -la src/components/landing/Navbar.vue

# 2. Se não existir, o arquivo foi deletado acidentalmente
# Se existir, verifique o conteúdo:
cat src/components/landing/Navbar.vue | head -20
```

**O que verificar**:
- ✅ Arquivo existe no caminho correto
- ✅ Arquivo tem conteúdo (não está vazio)
- ✅ Arquivo começa com `<template>`
- ✅ Tem `<script setup lang="ts">`
- ✅ Tem `</script>` fechado corretamente

---

### Solução 3: Verificar Importação em landing.vue

Abra `src/views/landing.vue` e verifique:

```typescript
// ✅ CORRETO (com .vue)
import Navbar from '../components/landing/Navbar.vue'

// ❌ ERRADO (sem .vue)
import Navbar from '../components/landing/Navbar'

// ❌ ERRADO (path incorreto)
import Navbar from '../components/Navbar.vue'

// ❌ ERRADO (import nomeado quando deveria ser default)
import { Navbar } from '../components/landing/Navbar.vue'
```

**Se encontrar algum errado**, corrija para o formato correto com `.vue` no final.

---

### Solução 4: Verificar Sintaxe do Componente

Abra o arquivo que está dando erro e verifique:

```vue
<!-- ✅ CORRETO -->
<template>
  <div>Conteúdo</div>
</template>

<script setup lang="ts">
// Script aqui
</script>

<style scoped>
/* Estilos aqui */
</style>
```

**Procure por**:
- ❌ `<script>` não fechado com `</script>`
- ❌ `<template>` não fechado com `</template>`
- ❌ Caracteres especiais/quebrados
- ❌ Indentação estranha (tabs vs spaces)

Se encontrar algo estranho, corrija manualmente ou use o arquivo original do projeto.

---

### Solução 5: Atualizar TypeScript

```bash
npm install --save-dev typescript@latest
```

Às vezes problemas de módulos são relacionados a versão desatualizada do TypeScript.

---

### Solução 6: Verificar Configuração do Vite

Abra `vite.config.ts` e certifique-se que tem:

```typescript
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),  // ← DEVE TER ISSO
    // outros plugins
  ],
})
```

Se não tiver, adicione.

---

### Solução 7: Deletar Arquivo de Cache do Vite

```bash
# Encontrar e deletar arquivo de cache
rm -rf .vite

# Limpar cache geral
npm cache clean --force

# Reiniciar dev server
npm run dev
```

---

### Solução 8: Usar Importação Absoluta (Alternativa)

Se as importações relativas continuarem falhando, tente usar paths absolutos.

**Em `tsconfig.app.json`**:
```json
{
  "compilerOptions": {
    "paths": {
      "@components/*": ["./src/components/*"],
      "@landing/*": ["./src/components/landing/*"]
    }
  }
}
```

**Em `src/views/landing.vue`**:
```typescript
import Navbar from '@landing/Navbar.vue'
import Hero from '@landing/Hero.vue'
// etc
```

---

## Checklist de Resolução

Faça cada passo e teste:

- [ ] Passo 1: Limpar cache e reinstalar
  ```bash
  npm run dev
  ```

- [ ] Se ainda der erro, Passo 2: Verificar arquivo específico
  ```bash
  ls -la src/components/landing/[arquivo-que-deu-erro].vue
  ```

- [ ] Passo 3: Verificar importação em landing.vue
  - Abra o arquivo
  - Procure por `import ... from`
  - Verifique se tem `.vue` no final

- [ ] Passo 4: Verificar sintaxe do componente
  - Abra `src/components/landing/[arquivo].vue`
  - Verifique se tem `<template>`, `<script>`, `<style>`
  - Verifique se todas as tags estão fechadas

- [ ] Passo 5: Atualizar TypeScript
  ```bash
  npm install --save-dev typescript@latest
  npm run dev
  ```

- [ ] Passo 6-8: Se nada funcionar, tente as outras soluções

---

## Teste Específico

Crie um arquivo `src/views/test-landing.vue` temporário:

```vue
<template>
  <div>
    <h1>Test Landing</h1>
    <Navbar />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/landing/Navbar.vue'
</script>
```

Adicione a rota em `src/router/index.ts`:

```typescript
{ path: '/test-landing', component: () => import('../views/test-landing.vue') }
```

Acesse `http://localhost:5173/test-landing` para testar se apenas um componente funciona.

Se funcionar com um, o problema é em outro. Se não funcionar, o problema é geral (cache, configuração, etc).

---

## Comandos Úteis para Debugging

```bash
# Ver lista de arquivos em landing
ls -la src/components/landing/

# Verificar conteúdo de um arquivo
cat src/components/landing/Navbar.vue

# Procurar por erros em TypeScript
npx tsc --noEmit

# Limpar tudo e reconstruir
rm -rf node_modules dist && npm install && npm run build

# Testar sintaxe de arquivo individual
node -c src/components/landing/Navbar.vue
```

---

## Se Nada Funcionar

1. **Tire um print da mensagem de erro completa**
2. **Verifique a URL do seu erro** - às vezes mostra pista de qual arquivo
3. **Tente criar um novo componente simples** para testar
4. **Considere criar novo projeto** Vite+Vue como baseline

---

**Última Atualização**: 05 de maio de 2026
**Versão**: 1.0
