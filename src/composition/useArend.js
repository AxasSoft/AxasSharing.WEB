
import axios from 'axios'
import {ref} from "vue"
import {useApi} from "@/composition/useApi.js"

export function useArend() {

    const { api, params, store_id } = useApi()

    const rents = ref()

    const getArends = () => {
       return axios.get(api + `/flats/me/rents/ `, params)
       .then((r) => {
        rents.value = r.data.data
       })
    }

    const getRooms = () => {
        return axios.get(api + `/flats/me/ `, params)
    }


    return {
        getArends,
        rents,
        getRooms,
    }
}