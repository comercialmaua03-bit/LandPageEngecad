<template>
  <section id="servicos" class="py-20 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-14">
        <span class="text-brand-mid font-semibold text-sm uppercase tracking-wider">Serviços</span>
        <h2 class="text-3xl md:text-4xl font-bold text-brand-dark mt-3">Soluções completas em engenharia</h2>
        <p class="text-gray-500 mt-3 max-w-2xl mx-auto">Oferecemos um portfólio completo de serviços para obras de infraestrutura, do planejamento à execução.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="service-card bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-brand-pale flex items-center justify-center mb-5">
            <i data-lucide="mountain" style="width:24px;height:24px;color:#1a6b4a;"></i>
          </div>
          <h3 class="font-bold text-brand-dark text-lg mb-2">Projeto de Terraplenagem</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Projetos técnicos de movimentação de terra, cortes e aterros com precisão topográfica.</p>
        </div>
        <div class="service-card bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-brand-pale flex items-center justify-center mb-5">
            <i data-lucide="map" style="width:24px;height:24px;color:#1a6b4a;"></i>
          </div>
          <h3 class="font-bold text-brand-dark text-lg mb-2">Projeto de Pavimentação</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Dimensionamento e especificação de pavimentos rodoviários e urbanos.</p>
        </div>
        <div class="service-card bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-brand-pale flex items-center justify-center mb-5">
            <i data-lucide="droplets" style="width:24px;height:24px;color:#1a6b4a;"></i>
          </div>
          <h3 class="font-bold text-brand-dark text-lg mb-2">Projeto de Drenagem</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Sistemas de drenagem pluvial e fluvial com cálculos hidráulicos precisos.</p>
        </div>
        <div class="service-card bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-brand-pale flex items-center justify-center mb-5">
            <i data-lucide="clipboard-list" style="width:24px;height:24px;color:#1a6b4a;"></i>
          </div>
          <h3 class="font-bold text-brand-dark text-lg mb-2">Estudos e Análises</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Estudos técnicos e análises de viabilidade para obras de infraestrutura.</p>
        </div>
        <div class="service-card bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-brand-pale flex items-center justify-center mb-5">
            <i data-lucide="hard-hat" style="width:24px;height:24px;color:#1a6b4a;"></i>
          </div>
          <h3 class="font-bold text-brand-dark text-lg mb-2">Fiscalização e Supervisão</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Acompanhamento e controle de qualidade durante toda a execução da obra.</p>
        </div>
        <div class="service-card bg-gradient-to-br from-brand-dark to-brand-mid rounded-2xl p-7 text-white flex flex-col justify-center">
          <h3 class="font-bold text-xl mb-3">Precisa de um projeto?</h3>
          <p class="text-white/80 text-sm mb-5">Entre em contato e receba um orçamento personalizado.</p>
          <a href="#contato" class="inline-flex items-center gap-2 bg-white text-brand-dark px-5 py-2.5 rounded-lg font-semibold text-sm w-fit btn-primary">
            Falar conosco
            <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.service-card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(10,61,47,0.12);
}
.btn-primary {
  transition: all 0.3s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(45, 155, 110, 0.4);
}
</style>