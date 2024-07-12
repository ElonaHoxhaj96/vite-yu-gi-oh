<script>
import { store } from '../store'

export default{
    name: 'AppSearch',
    data(){
    return{
      store,
    }
  },
}

</script>

<template>
    <div class="container">
        <select v-model="store.archeSelected" @change="$emit('changeArchetype')">
            <option value="none" selected="selected"> -- Select Archetype --</option>
            <option value="all">ALL</option>

            <option v-for="archetype in store.archetypeList" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </div>

</template>