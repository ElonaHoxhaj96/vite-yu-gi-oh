<script>
import SingleFigurine from  '../components/SingleFigurine.vue';
//import dello store.js
import { store } from '../store';
export default{
    name: 'Figurine',
    components: {
    SingleFigurine
  },
  data(){
    return{
      store,
    }
  },
}
</script>

<template>
    <section class="container">
        <div class="row bg-white cnt_card">
            <div v-for="figu in store.figurineList" :key="figu.id"  class="col-6 col-md-4 col-lg-2 mb-5">
                <SingleFigurine :info="figu"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';
    h1{
        color: black;
    }

    .container{
       padding-top: 4rem;
        .cnt_card{
            padding: 2.5rem;
        }
    }
</style>