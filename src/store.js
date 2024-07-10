import { reactive } from 'vue'

export const store= reactive({
    figurineList: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=24&offset=0",
})