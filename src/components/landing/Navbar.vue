<template>
   <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
     <div class="flex items-center gap-2">
      <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-dark to-brand-light flex items-center justify-center"><span class="text-white font-bold text-sm">EC</span>
      </div>
      <div><span class="font-bold text-brand-dark text-lg leading-none block">ENGECAD</span> <span class="text-xs text-gray-500 leading-none">Projetos e Construções</span>
      </div>
     </div>
     <div class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600"><a href="#sobre" class="hover:text-brand-mid transition">Sobre</a> <a href="#servicos" class="hover:text-brand-mid transition">Serviços</a> <a href="#contato" class="hover:text-brand-mid transition">Contato</a>
     </div><a href="https://wa.me/5581999762544" target="_blank" rel="noopener noreferrer" class="hidden sm:inline-flex items-center gap-2 bg-brand-mid text-white px-4 py-2 rounded-lg text-sm font-semibold btn-primary"> <i data-lucide="phone" style="width:16px;height:16px;"></i> Contato </a>
    </div>
   </nav>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Navbar'
})
</script>

<style scoped>
.btn-primary {
  transition: all 0.3s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(45, 155, 110, 0.4);
}
</style>