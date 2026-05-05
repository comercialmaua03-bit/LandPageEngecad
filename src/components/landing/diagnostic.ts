// Arquivo de diagnóstico - Verificação de componentes
// Este arquivo testa se todos os componentes estão sendo importados corretamente

import Navbar from './Navbar.vue'
import Hero from './Hero.vue'
import About from './About.vue'
import Services from './Services.vue'
import Differentials from './Differentials.vue'
import Area from './Area.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'

const components = {
  Navbar,
  Hero,
  About,
  Services,
  Differentials,
  Area,
  Contact,
  Footer
}

// Verificar se todos os componentes foram importados corretamente
Object.entries(components).forEach(([name, component]) => {
  if (!component) {
    console.error(`❌ Componente ${name} não foi importado corretamente`)
  } else {
    console.log(`✅ Componente ${name} importado com sucesso`)
  }
})

export default components
