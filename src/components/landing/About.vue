<template>
  <section id="sobre" class="py-20 px-4 bg-surface grid-pattern">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-brand-mid font-semibold text-sm uppercase tracking-wider">Sobre nós</span>
          <h2 class="text-3xl md:text-4xl font-bold text-brand-dark mt-3 mb-6">Engenharia de referência em infraestrutura</h2>
          <p id="about-text" class="text-gray-600 leading-relaxed mb-8 text-lg">{{ aboutText }}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-brand-pale flex items-center justify-center">
                <i data-lucide="check" style="width:16px;height:16px;color:#2d9b6e;"></i>
              </div>
              <span class="text-gray-700 font-medium">+20 anos de experiência</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-brand-pale flex items-center justify-center">
                <i data-lucide="check" style="width:16px;height:16px;color:#2d9b6e;"></i>
              </div>
              <span class="text-gray-700 font-medium">Equipe especializada</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-brand-pale flex items-center justify-center">
                <i data-lucide="check" style="width:16px;height:16px;color:#2d9b6e;"></i>
              </div>
              <span class="text-gray-700 font-medium">Alto padrão técnico</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-brand-pale flex items-center justify-center">
                <i data-lucide="check" style="width:16px;height:16px;color:#2d9b6e;"></i>
              </div>
              <span class="text-gray-700 font-medium">Atuação em todo o Brasil</span>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="bg-gradient-to-br from-brand-dark to-accent-blue rounded-2xl p-8 text-white relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <i data-lucide="award" style="width:28px;height:28px;"></i>
              </div>
              <h3 class="text-2xl font-bold mb-3">Excelência comprovada</h3>
              <p class="text-white/80 leading-relaxed">Nossos projetos seguem as normas mais rigorosas do setor, garantindo segurança, durabilidade e eficiência em cada entrega.</p>
              <div class="mt-6 pt-6 border-t border-white/20">
                <div class="text-3xl font-bold">1998</div>
                <div class="text-white/70 text-sm">Fundação da empresa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'About'
})

interface Props {
  aboutText: string
}

const props = withDefaults(defineProps<Props>(), {
  aboutText: 'Somos uma empresa de engenharia especializada na elaboração de projetos, consultoria e supervisão de obras de infraestrutura. Atuamos há mais de 20 anos no mercado, com uma equipe altamente capacitada e dezenas de clientes satisfeitos.'
})
</script>

<style scoped>
.grid-pattern {
  background-image: radial-gradient(circle, rgba(10,61,47,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}
</style>