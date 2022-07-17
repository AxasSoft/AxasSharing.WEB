
import axios from 'axios'
import {ref} from "vue"
import {useApi} from "@/composition/useApi.js"

export function useProduct() {

    const { api, params, store_id } = useApi()

    const postRoom = (roomData) => {
       return axios.post(api + `/flats/ `, roomData, params)
    }


    return {
        postRoom,
    }
}