<template>
  <footer class="bg-brand-dark py-12 px-4 border-t border-white/10">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <div class="flex items-center gap-2 justify-center md:justify-start mb-2">
            <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <span class="text-white font-bold text-xs">EC</span>
            </div>
            <span class="text-white font-bold">ENGECAD</span>
          </div>
          <p class="text-white/50 text-sm">Projetos e Construções • Obras de infraestrutura</p>
          <p class="text-white/40 text-xs mt-1">Empresa privada fundada em 1998</p>
        </div>
        <div class="flex gap-6 text-white/60 text-sm">
          <a href="#" class="hover:text-white transition">Home</a>
          <a href="#servicos" class="hover:text-white transition">Serviços</a>
          <a href="#contato" class="hover:text-white transition">Contato</a>
        </div>
      </div>
      <div class="mt-8 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
        © 2024 ENGECAD Projetos e Construções. Todos os direitos reservados.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Footer'
})
</script>

<style scoped>
/* Nenhum CSS adicional necessário */
</style>