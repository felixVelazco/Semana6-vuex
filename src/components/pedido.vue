<template>
  <div class="encargo" v-for="(pedido,index) in pedidos" :key="pedido" >
    <div class="negritas">
      # Orden: <br>
      Cliente: <br>
      Celular: <br>
      Orden: <br>
      Relleno: <br>
      Hora de entrega: <br>
      Total: <br>
    </div>

    <div>
      {{pedido.id}} <br>
      {{pedido.nombre}} <br>
      {{pedido.numero}} <br>
      {{pedido.estilos}} <br>
      {{pedido.sabores}} <br>
      {{pedido.hora}} <br>
      ${{pedido.total}}<br>
    </div><br>
    
    <div>
      <input type="button" :id=index @click="imprimir($event)" value="Pedido listo">
    </div>
  </div><br>
</template>

<script>
export default {
  name: 'Pedido',
  data(){
    return{
      orden:'',
      nombre:'',
      cel:'',
      forma:'',
      sabores:'',
      hora:'',
      id:''
    }
  },  
  computed: {
    pedidos(){
      return this.$store.state.pedidos;
    }
  },
  methods: {
    imprimir(e){
      const id = e.currentTarget.id;
      //console.log(this.$store.state.pedidos[0]);
      this.$store.state.pedidos.splice(id,1);
    }
  }
}
</script>

<style>
.encargo{
background-color: #f4263e65;
border-radius: 20px;
margin: 10px;

}
.encargo div{
display: inline-flex;
justify-content: center;
margin: 1% 10%;
}
</style>