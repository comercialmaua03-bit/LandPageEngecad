<template>
  <section id="contato" class="py-20 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-14">
        <span class="text-brand-mid font-semibold text-sm uppercase tracking-wider">Contato</span>
        <h2 class="text-3xl md:text-4xl font-bold text-brand-dark mt-3">Fale com nossa equipe</h2>
        <p class="text-gray-500 mt-3">Estamos prontos para atender você e apresentar as melhores soluções.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="text-center p-6 rounded-2xl border border-gray-100 bg-surface">
          <div class="w-12 h-12 mx-auto rounded-xl bg-brand-pale flex items-center justify-center mb-4">
            <i data-lucide="phone" style="width:22px;height:22px;color:#1a6b4a;"></i>
          </div>
          <h3 class="font-bold text-brand-dark mb-1">Telefone</h3>
          <p id="phone-display" class="text-gray-600">{{ phoneNumber }}</p>
        </div>
        <div class="text-center p-6 rounded-2xl border border-gray-100 bg-surface">
          <div class="w-12 h-12 mx-auto rounded-xl bg-green-50 flex items-center justify-center mb-4">
            <i data-lucide="message-circle" style="width:22px;height:22px;color:#25d366;"></i>
          </div>
          <h3 class="font-bold text-brand-dark mb-1">WhatsApp</h3>
          <p id="whatsapp-display" class="text-gray-600">{{ whatsappNumber }}</p>
        </div>
        <div class="text-center p-6 rounded-2xl border border-gray-100 bg-surface">
          <div class="w-12 h-12 mx-auto rounded-xl bg-brand-pale flex items-center justify-center mb-4">
            <i data-lucide="map-pin" style="width:22px;height:22px;color:#1a6b4a;"></i>
          </div>
          <h3 class="font-bold text-brand-dark mb-1">Endereço</h3>
          <p class="text-gray-600 text-sm">Rua João Cauás, Recife - PE, 52061-390</p>
        </div>
      </div>
      <div class="text-center mt-10">
        <a href="https://wa.me/5581999762544" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg btn-whatsapp shadow-lg">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.6-1.47A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-2.168 0-4.19-.587-5.934-1.608l-.425-.253-2.727.871.872-2.68-.278-.44A9.77 9.77 0 012.182 12c0-5.423 4.395-9.818 9.818-9.818 5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818z" />
          </svg>
          Falar no WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Contact'
})

interface Props {
  phoneNumber: string
  whatsappNumber: string
}

const props = withDefaults(defineProps<Props>(), {
  phoneNumber: '(81) 3227-6537',
  whatsappNumber: '(81) 99976-2544'
})
</script>

<style scoped>
.btn-whatsapp {
  transition: all 0.3s;
}
.btn-whatsapp:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37,211,102,0.4);
}
</style>