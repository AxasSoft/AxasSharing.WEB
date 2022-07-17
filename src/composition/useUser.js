
import axios from 'axios'
import {ref} from "vue"
import {useApi} from "@/composition/useApi.js"

export function useUser() {

    const { api, params } = useApi()

    const getProfile = () => {
       return axios.get(api + `/profile/`, params)
    }

    const putProfile = (dataUser) => {
        return axios.put(api + `/profile/`, dataUser, params)
    }

    const putTel = (userTel) => {
        return axios.put(api + `/profile/tel/`, userTel, params)
    }

    return {
        getProfile,
        putProfile,
        putTel,
    }
}