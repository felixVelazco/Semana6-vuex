<template>
    <footer id="BarraInferior">
    <h1 align="left">Contacto</h1><br><br>
    <p>Estamos localizados a 5 min del parque central.
      <br>
      <i class="material-icons">place</i>3337 Av. Tecnológico, <br> 
      Cd. Juárez, Chih, 32000 <br>
      <i class="material-icons">call</i>(656)123-4567 <br>
      info@nekoyaki.com
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    color: String
  }
}
</script>

<style scoped>
    #BarraInferior{
        background-color: v-bind(color);
    }
</style>