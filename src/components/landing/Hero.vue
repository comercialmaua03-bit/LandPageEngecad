<template>
  <section class="hero-bg pt-28 pb-20 md:pt-36 md:pb-28 px-4 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternunits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="max-w-3xl fade-up">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <div class="w-2 h-2 rounded-full bg-brand-light animate-pulse"></div>
          <span class="text-white/80 text-sm font-medium">Desde 1998 entregando excelência</span>
        </div>
        <h1 id="hero-title" class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-800 text-white leading-tight mb-6">Soluções em Engenharia de Infraestrutura com Excelência e Experiência</h1>
        <p id="hero-subtitle" class="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">Mais de 20 anos desenvolvendo projetos, consultoria e supervisão de obras com qualidade e precisão</p>
        <div class="flex flex-wrap gap-4">
          <a href="#contato" class="inline-flex items-center gap-2 bg-brand-light hover:bg-brand-mid text-white px-7 py-3.5 rounded-lg font-semibold text-lg btn-primary">
            Solicitar Orçamento
            <i data-lucide="arrow-right" style="width:20px;height:20px;"></i>
          </a>
          <a href="#servicos" class="inline-flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition">
            Nossos Serviços
          </a>
        </div>
      </div>
      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 fade-up stagger-2">
        <div class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-5 text-center">
          <div class="text-3xl font-bold text-white">+20</div>
          <div class="text-white/70 text-sm mt-1">Anos de experiência</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-5 text-center">
          <div class="text-3xl font-bold text-white">+500</div>
          <div class="text-white/70 text-sm mt-1">Projetos entregues</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-5 text-center">
          <div class="text-3xl font-bold text-white">100%</div>
          <div class="text-white/70 text-sm mt-1">Compromisso</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-5 text-center">
          <div class="text-3xl font-bold text-white">BR</div>
          <div class="text-white/70 text-sm mt-1">Atuação nacional</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero-bg {
  background: linear-gradient(135deg, rgba(10,61,47,0.92) 0%, rgba(26,79,122,0.88) 100%),
              repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.02) 35px, rgba(255,255,255,0.02) 70px);
}
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.7s ease forwards;
}
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.stagger-2 {
  animation-delay: 0.2s;
}
.btn-primary {
  transition: all 0.3s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(45, 155, 110, 0.4);
}
</style>