<template>
  <BarraNavegacion color="#F4263E"/>
  
  <h2 class="letraRoja">Estilos</h2>
  <Carrusel :clase="'estilos'"/><br>

  <h2 class="letraRoja">Sabores</h2>
  <Carrusel :clase="'sabores'"/><br>
  <Footer color="#F4263E"/>
</template>

<script>
import Carrusel from '@/components/Carrusel.vue'
export default {
  name: 'EstilosView',
  components: {
    Carrusel
  }
}
</script>