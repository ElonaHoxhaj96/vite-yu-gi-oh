<script>
import { info } from 'sass';
import { store } from '../store';

export default{
    name: 'SingleFigurine',
    props: {
        info : Array
    },
}
</script>

<template>
    <div class="figurine text-center">
        <img class="img-fluid mb-3" :src="info.card_images[0].image_url" :alt="info.name">
        <h4>{{ info.name }}</h4>
        <div>{{ info.archetype }}</div>
    </div>
</template>

<style lang="scss">
    img{
        width: 100%;
    }

</style>