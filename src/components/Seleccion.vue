<template>
  <div class="fotos">
    <div class="estilo" v-for="item in forma" :key="item">    
      <img :src="require(`../assets/${item.forma}.jpg`)" alt="" ><br>
      <input :type=item.tipo :name=item.nombre :id=item.forma :value=item.label v-model="seleccion" >
      <label :for=item.id>{{item.label}} <br>(${{item.precio}})</label>
    </div>
  </div>
</template>

<script>
export default {
name: 'Seleccion',
  props:{
    clase:{
      type: String,
      default: "estilos"
      },
      modelValue: Boolean
    },
  data(){
    return{
      seleccion: [],
      total:0
    }
  },
  computed: {
    forma(){
      return this.$store.state[this.clase];
    },
  },
  watch:{
    seleccion(nuevo, viejo){
      this.total = 0;
      this.$store.state[this.clase].forEach(stat => {
        if(this.clase!='estilos'){
          this.seleccion.forEach(sele => {
            if(stat.label == sele)
              this.total += parseInt(stat.precio);
          });
        }
        else{
          if(stat.label == this.seleccion)
            this.total = parseInt(stat.precio);
        }
      });

      this.$emit('input', this.seleccion, this.total);
    },
    modelValue(nuevo, viejo){
      if(nuevo==true){
        this.seleccion = [];
      }
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.estilo{
    background-color: rgba(51, 165, 2, 0.801);
    text-align: center;
    margin: 15px;
    padding: 15px 0;
    width: 200px;
    height: auto;
    border-radius: 10px;
    
}

.estilo img{
    width: 100px;
    height: 100px;
    border-radius: 50px;
}

.estilo label{
    color: white;
}
input[type='radio']:after, input[type='radio']:checked:after {
  width: 10px;
  height: 10px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #ffffff;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}
input[type='radio']:checked:after {
  background-color: #33A502;
}
input[type='checkbox']:after {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  position: relative;
  background-color: #ffffff;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}
input[type='checkbox']:checked:after {
  background-color: #33A502;
}
</style>