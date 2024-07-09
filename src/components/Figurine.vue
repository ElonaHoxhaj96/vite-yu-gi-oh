<script>
import SingleFigurine from  '../components/SingleFigurine.vue'
export default{
    name: 'Figurine',
    components: {
    SingleFigurine
  }
}
</script>

<template>
    <header>
        <div id="logo"></div>
        <h1>hellooooo</h1>
        <SingleFigurine/>
  
    </header>
</template>


<style lang="scss" scoped>
@use '../style/general.scss';
    h1{
        color: black;
    }
</style>