<template>
  <section class="py-20 px-4 bg-brand-dark relative overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diag" width="40" height="40" patternunits="userSpaceOnUse">
            <path d="M0 40L40 0" stroke="white" stroke-width="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>
    </div>
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-14">
        <span class="text-brand-light font-semibold text-sm uppercase tracking-wider">Diferenciais</span>
        <h2 class="text-3xl md:text-4xl font-bold text-white mt-3">Por que escolher a ENGECAD?</h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
            <i data-lucide="timer" style="width:28px;height:28px;color:#2d9b6e;"></i>
          </div>
          <h3 class="text-white font-bold mb-2">Desde 1998</h3>
          <p class="text-white/60 text-sm">Experiência consolidada no mercado de infraestrutura</p>
        </div>
        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
            <i data-lucide="users" style="width:28px;height:28px;color:#2d9b6e;"></i>
          </div>
          <h3 class="text-white font-bold mb-2">Atendimento personalizado</h3>
          <p class="text-white/60 text-sm">Cada projeto é tratado com atenção exclusiva</p>
        </div>
        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
            <i data-lucide="shield-check" style="width:28px;height:28px;color:#2d9b6e;"></i>
          </div>
          <h3 class="text-white font-bold mb-2">Soluções seguras</h3>
          <p class="text-white/60 text-sm">Eficiência técnica com máxima segurança</p>
        </div>
        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
            <i data-lucide="target" style="width:28px;height:28px;color:#2d9b6e;"></i>
          </div>
          <h3 class="text-white font-bold mb-2">Prazos e qualidade</h3>
          <p class="text-white/60 text-sm">Compromisso com entregas dentro do prazo</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Nenhum CSS adicional necessário */
</style>