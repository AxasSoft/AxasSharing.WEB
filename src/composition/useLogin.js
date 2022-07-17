
import axios from 'axios'
import {ref} from "vue"
import {useApi} from "@/composition/useApi.js"

export function useLogin() {

    const { api } = useApi()

    const verifyTelPost = (tel) => {
        return axios.post(api + '/tels/verify/', tel)
    }

    const loginUser = (dataUser) => {
        let body = {
            ...dataUser,
        }
        return axios.post(api + '/siw/tel/', body)
        .then((r) => {
            localStorage.setItem("Token", r.data.data.tokens.access.value)
        })
    }
    

    /* const recoverUser = (dataUser) => {
        let body = {
            ...dataUser,
        }
        return axios.post(api + '/api/v1/recover-password/', body)
    } */

    const logoutUser = () => {
        localStorage.removeItem("Token")
    }


    return {
        verifyTelPost,
        loginUser,
        /* recoverUser, */
        logoutUser,
    }
}