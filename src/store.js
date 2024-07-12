import { reactive } from 'vue'

export const store= reactive({
    figurineList: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=48&offset=0",
    // loading: true,

    //creo il parametro per l'archetype
    apiArchetype: 'archetype',
    // vado a riprendere l'url dell'api per prendere solo le archetype
    apiUrlArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypeList: [],

    //selezione per il v-model
    archeSelected: 'all',

    //array dei non archetype
    nonArchetype: [],
})
