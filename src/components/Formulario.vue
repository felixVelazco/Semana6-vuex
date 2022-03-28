<template>
  <form class="formulario" @submit.prevent="validacion" id="forma1"><br>

  <h2 class="letraVerde">Estilos</h2><br>
  <Seleccion v-on:input="recibirE" :clase="'estilos'" :modelValue="borrar"/><br>
  <p style="color:red;">{{emptyEstilos}}</p>

  <h2 class="letraVerde">Sabores</h2><br>
  <Seleccion v-on:input="recibirS" :clase="'sabores'" :modelValue="borrar"/><br>
  <p style="color:red;">{{emptySabores}}</p>

  <h2 class="letraVerde">Datos de contacto</h2><br>
  <div style="width:100%; display:flex; justify-content:center">
    <div class="datos" >
      <div>
        <label for="nombre">Nombre completo</label><br>
        <input type="text" v-model="nombre" id="nombre" name="nombre" placeholder="Ej: Juan Martinez Velazquez" autocomplete="on" required><br>
        <label for="numero">Número telefónico</label><br>
        <input type="tel" v-model="numero" maxlength="12" id="numero" name="numero" placeholder="Ej: 656-123-4567" autocomplete="on" required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"><br>
        <label for="email">Correo electrónico</label><br>
        <input type="email" v-model="email" id="email" name="email" placeholder="Ej: ejemplo@correo.com" autocomplete="on" required><br>
        <label for="hora">Hora de entrega deseada</label><br>
        <input type="time" v-model="hora" id="hora" name="hora" placeholder="" min="9:00" max="19:00" required><br>
      </div>
    </div>
  </div>
<p style="font-size: larger;">Total: ${{total}}</p>
  <div style="margin: 0 15%;">
    <input type="submit"><br><br>
  </div>
</form>
<!--<button @click="imprimir">asddsa</button>
  <p>{{getObject}}</p>-->
</template>

<script>
import Seleccion from '@/components/Seleccion.vue'
//import { computed } from '@vue/runtime-core';
export default {
  name: 'Formulario',
  components: {
    Seleccion
  },
  props: {
    color: String
  },
  data(){
    return{
      nombre: '',
      numero: '',
      email: '',
      hora: '' ,
      estilos: '',
      sabores: '',
      borrar:false,
      emptyEstilos: '',
      emptySabores: '',
      sub1:0,
      sub2:0,
      total:0,
      index:1
    }
  },
  computed:{
    getObject(){
      return this.$store.state.pedidos;
    },

  },
  methods: {
      imprimir(){
        //
    },
    capturarPedido(){
      
      this.$store.dispatch('capturarPedido', {
        id: this.index,
        nombre: this.nombre,
        numero: this.numero,
        email: this.email,
        hora: this.hora,
        estilos: this.estilos,
        sabores: this.sabores,
        total: this.total
      })
        this.index ++;
        this.borrar = true;
        this.nombre= '',
        this.numero = '',
        this.email = '',
        this.hora = '',
        this.estilos = '',
        this.sabores = '',
        this.sabores = '';
        this.estilos = '';
        document.getElementById("forma1").reset();
    },
    recibirE(recibido, subtotal){
      this.estilos = recibido;
      this.sub1 = subtotal;
      this.total = this.sub1 + this.sub2;
    },
    recibirS(recibido, subtotal){
      this.sabores = recibido;
      this.sub2 = subtotal;
      this.total = this.sub1 + this.sub2;
    },
    validacion(){
      this.borrar = false;
      
      if(this.estilos == '')
        this.emptyEstilos = 'Debe de escoger un estilo';
      else
        this.emptyEstilos = '';
      if(this.sabores == '')
        this.emptySabores = 'Debe de escoger al menos un sabor';
      else
        this.emptySabores = '';
        
      if(this.estilos != '' && this.sabores != '')
        this.capturarPedido();
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formulario{
    background-image:url("../assets/nekoyaki_logo_transparente_todo.png");
    background-position:center;
    background-repeat: no-repeat;
    background-color: #33a5023a;
    background-attachment: fixed;
    background-size: 20%;
    border-radius: 5rem;
}
.formulario input{
  background: none;
  border: none;
  border-bottom: 1px solid black;
     
}
.formulario p{
    margin: 0 15%;
}


.formulario{
    margin: 5%;
}
.formulario input[type=checkbox], .formulario input[type=radio]{
    cursor: pointer;
}

.datos{
  color: white;
  border-radius: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(51, 165, 2, 0.801);
  padding: 50px;
}
.datos div{
  width: 70%;
}
.datos input{
  color: white;
  width: 100%;
}
.datos input::placeholder{
  color: rgb(214, 241, 199);
}
.datos input:focus{
  outline: none;
  border-bottom: 5px solid rgb(76, 238, 6);
}
input:-webkit-autofill,
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
  box-shadow: 0 0 0 30px rgba(51, 165, 2, 0.801) inset !important;
}

input:-webkit-autofill:hover{
  box-shadow: 0 0 0 30px rgba(97, 189, 21, 0.842) inset !important;
}
@media screen and ( min-width: 960px ) {
  .datos{
    width: 600px;
  }
  .datos div{
  width: 100%;
}
}
input[type=submit]{
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: #33A502;
  color: white
}
input[type=submit]:hover{
  background-color: #288101;
  color: white
}
input[type=submit]:active{
  background-color: #216b01;
  color: white
}
</style>