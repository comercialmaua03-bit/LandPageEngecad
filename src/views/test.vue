<!-- src/views/test.vue -->
<template>
  <div class="p-10">
    <h1>Teste de Componentes</h1>
    <TestComponent />
  </div>
</template>

<script setup lang="ts">
import TestComponent from '../components/landing/Test.vue'

console.log('Test.vue imported successfully')
</script>
