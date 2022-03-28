<template>
  <nav id="BarraHTML" style="background-color: '{{color}}'">
    <h1 style="color: 'red';">Nekoyaki-Postrería tradicional japonesa</h1>
    <ul>
      <li id="B_Home"><div class="grow"><router-link to="/">Home</router-link></div></li>
      <li id="B_Que"><div class="grow"><router-link to="/about">¿Qué es el nekoyaki?</router-link></div></li>
      <li id="B_Estilos"><div class="grow"><router-link to="/estilos">Estilos y sabores</router-link></div></li>
      <li id="B_Pedido"><div class="grow"><router-link to="/pedido">Hacer un pedido</router-link></div></li>
      <li id="B_Contacto"><div class="grow"><router-link to="/contacto">Contacto</router-link></div></li>
    </ul>
  </nav>
</template>
<script>



export default {
  name: 'BarraNavegacion',
  props: {
    color: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    nav{
        background-color: v-bind(color);
    }
</style>