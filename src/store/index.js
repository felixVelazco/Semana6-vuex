import { createStore } from 'vuex'

export default createStore({
  state: {
    inicio: [
      {id:'taiyaki', forma:'taiyaki', nombre:'forma'},
      {id:'magikarp-comida', forma:'magikarp-comida', nombre:'forma'},
      {id:'taiyaki-proceso', forma:'taiyaki-proceso', nombre:'forma'},
      {id:'vainilla', forma:'vainilla', nombre:'forma'},
      {id:'head_taiyaki', forma:'head_taiyaki', nombre:'forma'},
    ],
    estilos: [
      {id:'logo-taiyaki', forma:'logo-taiyaki', nombre:'forma', precio:'25', label:'Taiyaki de la casa', tipo:'radio'},
      {id:'doraemon-taiyaki', forma:'doraemon-taiyaki', nombre:'forma', precio:'30', label:'Taiyaki de Doraemon', tipo:'radio'},
      {id:'hello-kitty-taiyaki', forma:'hello-kitty-taiyaki', nombre:'forma', precio:'30', label:'Taiyaki de Hello Kitty', tipo:'radio'},
      {id:'meow-taiyaki', forma:'meow-taiyaki', nombre:'forma', precio:'30', label:'Taiyaki de Meowth', tipo:'radio'},
      {id:'magikarp-taiyaki', forma:'magikarp-taiyaki', nombre:'forma', precio:'30', label:'Taiyaki de Magikarp', tipo:'radio'},
      {id:'original_taiyaki', forma:'original_taiyaki', nombre:'forma', precio:'25', label:'Taiyaki Original', tipo:'radio'}
    ],
    sabores: [
      {id: 0, forma:'chocolate', nombre:'forma', precio:'3', label:'Chocolate', tipo:'checkbox'},
      {id: 1, forma:'fresas', nombre:'forma', precio:'5', label:'Fresa', tipo:'checkbox'},
      {id: 2, forma:'vainilla', nombre:'forma', precio:'3', label:'Vainilla', tipo:'checkbox'},
      {id: 3, forma:'moraAzul', nombre:'forma', precio:'8', label:'Mora Azul', tipo:'checkbox'},
      {id: 4, forma:'anko', nombre:'forma', precio:'10', label:'Anko (Frijol dulce)', tipo:'checkbox'},
    ],
    pedidos: []
  },
  getters: {
    verPedido(){
      return pedidos;
    }
  },
  mutations: {
    capturarPedido(state, usuario){
      state.pedidos.push(usuario);
      console.log(state.pedidos);
    }
  },
  actions: {
    capturarPedido({ commit },usuario){
      console.log("capturando");
      console.log(usuario);
      commit('capturarPedido', usuario);
    }
  },
  modules: {
  }
})
