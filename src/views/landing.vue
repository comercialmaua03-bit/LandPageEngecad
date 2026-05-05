<template>
  <div id="app-wrapper" class="w-full h-full overflow-auto bg-white">
    <Navbar />
    <Hero :hero-title="config.hero_title" :hero-subtitle="config.hero_subtitle" />
    <About :about-text="config.about_text" />
    <Services />
    <Differentials />
    <Area />
    <Contact :phone-number="config.phone_number" :whatsapp-number="config.whatsapp_number" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navbar from '../components/landing/Navbar.vue';
import Hero from '../components/landing/Hero.vue';
import About from '../components/landing/About.vue';
import Services from '../components/landing/Services.vue';
import Differentials from '../components/landing/Differentials.vue';
import Area from '../components/landing/Area.vue';
import Contact from '../components/landing/Contact.vue';
import Footer from '../components/landing/Footer.vue';

interface Config {
  hero_title: string;
  hero_subtitle: string;
  about_text: string;
  phone_number: string;
  whatsapp_number: string;
  background_color: string;
  surface_color: string;
  text_color: string;
  primary_action_color: string;
  secondary_action_color: string;
  font_family: string;
  font_size: number;
}

const defaultConfig: Config = {
  hero_title: 'Soluções em Engenharia de Infraestrutura com Excelência e Experiência',
  hero_subtitle: 'Mais de 20 anos desenvolvendo projetos, consultoria e supervisão de obras com qualidade e precisão',
  about_text: 'Somos uma empresa de engenharia especializada na elaboração de projetos, consultoria e supervisão de obras de infraestrutura. Atuamos há mais de 20 anos no mercado, com uma equipe altamente capacitada e dezenas de clientes satisfeitos.',
  phone_number: '(81) 3227-6537',
  whatsapp_number: '(81) 99976-2544',
  background_color: '#ffffff',
  surface_color: '#f7faf9',
  text_color: '#0a3d2f',
  primary_action_color: '#2d9b6e',
  secondary_action_color: '#1a6b4a',
  font_family: 'Plus Jakarta Sans',
  font_size: 16
};

const config = ref<Config>({ ...defaultConfig });

const applyConfig = (newConfig: Partial<Config>) => {
  config.value = { ...config.value, ...newConfig };
  // Aplicar estilos globais se necessário
  document.body.style.fontFamily = `${config.value.font_family}, DM Sans, sans-serif`;
  document.body.style.fontSize = `${config.value.font_size}px`;
};

onMounted(() => {
  // Simular o SDK, mas como é Vue, talvez remover ou adaptar
  // Para este exemplo, manter simples
  applyConfig({});
  // Initialize Lucide icons
  if ((window as any).lucide) {
    (window as any).lucide.createIcons();
  }
});
</script>

<style scoped>
/* Estilos globais podem ir aqui se necessário, mas preferir scoped */
</style>