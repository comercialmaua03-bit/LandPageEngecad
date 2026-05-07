<template>
  <div id="app-wrapper" class="w-full h-full overflow-auto bg-white">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Differentials />
    <Area />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/landing/Navbar.vue';
import Hero from '../components/landing/Hero.vue';
import About from '../components/landing/About.vue';
import Services from '../components/landing/Services.vue';
import Differentials from '../components/landing/Differentials.vue';
import Area from '../components/landing/Area.vue';
import Contact from '../components/landing/Contact.vue';
import Footer from '../components/landing/Footer.vue';
</script>

<style scoped>
/* Estilos globais podem ir aqui se necessário, mas preferir scoped */
</style>