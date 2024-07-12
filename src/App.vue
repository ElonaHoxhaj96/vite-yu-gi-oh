<script >
import axios from '../node_modules/axios';

import AppHeader from './components/AppHeader.vue';
import Figurine from './components/Figurine.vue';
import AppSearch from './components/AppSearch.vue'

//import dello store.js
import { store } from './store'

export default {
  name: 'App',
  components: {
    AppHeader,
    Figurine,
    AppSearch,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    // metodo per estrarre i dati delle figurine 
    getFigurina(){
      // definire l'endpoint
      let endPoint = store.apiUrl;
      if(store.archeSelected !== 'all' && store.archeSelected !== 'none'){
        endPoint += `&${store.apiArchetype}=${store.archeSelected}`;
      }

      axios.get(endPoint)
      .then( res=> {
        console.log(res.data.data);
        store.figurineList= res.data.data;
      })
      .catch(err => {
        console.log(err);
      })
    },
    // metodo per richiamare l'archetype
    getArcheType(){
      axios.get(store.apiUrlArchetype)
      .then(result => {
        store.archetypeList = result.data;
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  created(){
    this.getFigurina();
    this.getArcheType();
  }
}
</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api"/>
  <main>
    <AppSearch @changeArchetype="getFigurina"/>
    <Figurine/>
  </main>
</template>

<style lang="scss">
@use '../src/style/general.scss'

</style>
