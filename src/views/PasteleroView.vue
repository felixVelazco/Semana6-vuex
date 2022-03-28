<template>
  <BarraNavegacion color="#F4263E"/>
        <button class="floatingButton"> <router-link to="/pedido">Pedidos</router-link>  </button>
  <section id="s-Estilos">
    <h2 class="letraRoja">Ingredientes:</h2><br>

    <div class="encargo">
      <div style="background-color:  #0fca0f;">Fresas: 10 lts</div>
      <div style="background-color:  #0fca0f">Chocolate: 15 lts</div>
      <div style="background-color:  #0fca0f">Mora: 7 lts</div>
      <div style="background-color: rgb(255, 49, 49);">Vainilla: 2 lts</div>
      <div style="background-color: rgb(247, 247, 46);">Anko: 5 lts </div>
    </div>

    <h2 class="letraRoja">Pedidos:</h2><br>

    <Pedido/>    

</section><br>
  <!----------------------------------------Barra Inferior------------------------------------------>
  <footer id="BarraInferior" style="background-color: #F4263E;">
    <p> <br><br><br>1

    </p>
  </footer>
</template>

<script>

import Pedido from '@/components/pedido.vue'
export default {
  name: 'PasteleroView',
  components: {
    Pedido
  }
}
</script>