<template>
  <div class="carousel">
    <flickity  class="flickity" ref="flickity" :options="flickityOptions">
      <div class="carousel-cell" v-for="item in imagenes" :key="item"> 
        <img :src="require(`../assets/${item.forma}.jpg`)" :alt="item.label"> 
        <p>{{item.label}}</p>
      </div>
    </flickity>
  </div>
</template>


<script>
import Flickity from 'vue-flickity'
export default {
  props: {
    clase:{
      type: String,
      default: 'estilos'
    }
  },
  computed:{
    imagenes(){
      return this.$store.state[this.clase];
    }
  },
  components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: false
        // any options from Flickity can be used
      }
    }
  }
}

</script>

<style scoped>
.carousel {
    margin: auto;
  background: #f4263e48;
  background-image: url("../assets/nekoyaki_logo_transparente_todo.png");
  background-size: contain;
  background-position: center;
  background-size: 30%;
  background-repeat: no-repeat;
  width: 80%;
  border-radius: 30px;
}

.carousel p{
    position: absolute;
    margin-top: 32%;
    color: #eee;
    background-color: #F4263E;
    text-align: center;
    
}

.carousel-cell {
  width: 70%;
  height: 200px;
  /* flex-box, center image in cell */
  display: -webkit-box;
  display: -webkit-flex;
  display:         flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
          justify-content: center;
  -webkit-align-items: center;
          align-items: center;
}

.carousel-cell img {
  display: block;
  max-width: 100%;
  height: 90%;
  border-radius: 50px;
/*  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.363);*/
  /* dim unselected */
  opacity: 0.7;
  -webkit-transform: scale(0.85);
          transform: scale(0.85);
  -webkit-filter: blur(5px);
          filter: blur(5px);
  -webkit-transition: opacity 0.3s, -webkit-transform 0.3s, transform 0.3s, -webkit-filter 0.3s, filter 0.3s;
          transition: opacity 0.3s, transform 0.3s, filter 0.3s;
}

/* brighten selected image */
.carousel-cell.is-selected img {
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
  -webkit-filter: none;
          filter: none;
}
@media screen and ( min-width: 768px ) {
  .carousel-cell {
    height: 400px;
  }
}

@media screen and ( min-width: 960px ) {
  .carousel-cell {
    width: 60%;
  }
  .datos{
    width: 700px;
  }
}

/* buttons, no circle */
.flickity-prev-next-button {
  width: 60px;
  height: 60px;
  background: transparent;
  opacity: 0.6;
}
.flickity-prev-next-button:hover {
  background: transparent;
  opacity: 1;
}
/* arrow color */
.flickity-prev-next-button .arrow {
  fill: #F4263E;
}
.flickity-prev-next-button.no-svg {
  color: #F4263E;
}
/* closer to edge */
.flickity-prev-next-button.previous { left: 0; }
.flickity-prev-next-button.next { right: 0; }
/* hide disabled button */
.flickity-prev-next-button:disabled {
  display: none;
}
</style>