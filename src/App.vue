<script >
import AppHeader from './components/AppHeader.vue';
import Figurine from './components/Figurine.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    Figurine,
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
