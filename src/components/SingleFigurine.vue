<script>
import { info } from 'sass'
import { store } from '../store'

export default{
    name: 'SingleFigurine',
    props: {
    info: Object,
    },
     data(){
    return{
      store,
    }
  },
}
</script>

<template>
    <div class="figurine text-center">
        <img class="img-fluid mb-3" :src="info.card_images[0].image_url" :alt="info.name">
        <div class="testo_figurine">
            <h4>{{ info.name }}</h4>
            <div>{{ info.archetype }}</div>
        </div>
    </div>
</template>

<style lang="scss">
    .figurine{
        background-color: #d48f38;
        display: flex;
        flex-direction: column;

        .testo_figurine{
            height: 140px;
        }
    }

</style>
