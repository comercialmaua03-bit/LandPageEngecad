<template>
  <section class="py-20 px-4 bg-surface">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1">
          <span class="text-brand-mid font-semibold text-sm uppercase tracking-wider">Área de atuação</span>
          <h2 class="text-3xl font-bold text-brand-dark mt-3 mb-4">Presença em todo o Brasil</h2>
          <p class="text-gray-600 leading-relaxed mb-4">Com sede em Recife, Pernambuco, a ENGECAD atua em projetos de infraestrutura em todo o território nacional, atendendo clientes públicos e privados com a mesma excelência.</p>
          <div class="flex items-center gap-3 text-gray-500">
            <i data-lucide="map-pin" style="width:20px;height:20px;color:#1a6b4a;"></i>
            <span>Recife, Pernambuco — Brasil</span>
          </div>
        </div>
        <div class="w-full md:w-64 h-48 bg-gradient-to-br from-brand-pale to-white rounded-xl border border-brand-light/20 flex items-center justify-center">
          <svg viewbox="0 0 100 120" width="100" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 C30 20 20 40 25 60 C28 75 35 90 50 110 C65 90 72 75 75 60 C80 40 70 20 50 10Z" fill="#e8f5f0" stroke="#2d9b6e" stroke-width="2" />
            <circle cx="50" cy="55" r="8" fill="#1a6b4a" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Area'
})
</script>

<style scoped>
/* Nenhum CSS adicional necessário */
</style>