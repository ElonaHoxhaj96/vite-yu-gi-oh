<script >
import axios from '../node_modules/axios';

import AppHeader from './components/AppHeader.vue';
import Figurine from './components/Figurine.vue';

//import dello store.js
import { store } from './store'

export default {
  name: 'App',
  components: {
    AppHeader,
    Figurine,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getFigurina(){
      axios.get(store.apiUrl)
      .then( res=> {
        console.log(res.data.data);
        store.figurineList= res.data.data
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  created(){
    this.getFigurina();
  }
}
</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api"/>
  <main>
    <Figurine/>
  </main>
</template>

<style lang="scss">
@use '../src/style/general.scss'

</style>
