<template>
  <BarraNavegacion color="#33A502"/>
  <button class="floatingButton"><router-link to="/pastelero">Pastelero</router-link></button>

  <h1 class="letraVerde">Solicitud de taiyaki</h1>        
  <Formulario/>

  <Footer color="#33A502"/>

</template>


<script>
  import Seleccion from '@/components/Seleccion.vue'
  import Formulario from '@/components/Formulario.vue'
  export default {
    name: 'PedidoView',
    components: {

      Seleccion,
      Formulario
    }
  }
</script>