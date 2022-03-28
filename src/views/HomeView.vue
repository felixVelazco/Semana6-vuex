<template>
  <BarraNavegacion color="#FF6A00"/>

  <h2 class="letraNaranja">Bienvenido a la página oficial de Nekoyaki </h2>

  <!--<Carrusel imagen= "anko"/>-->
  <Carrusel :clase="'inicio'" />
  <Footer color="#FF6A00"/>
</template>

<script>

import Carrusel from '@/components/Carrusel.vue'
export default {
  name: 'HomeView',
  components: {
    Carrusel
  }
}
</script>
