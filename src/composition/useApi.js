import {ref} from "vue"
export function useApi() {
    const api = "http://10.254.200.112:5000"
    /* const api = "http://192.168.0.119" */
    const Token = "Token" + " " + localStorage.getItem("Token")
    const params = {
        headers: {
            "Authorization": Token
        }
    }

    let store = JSON.parse(localStorage.getItem("store"))

    const store_id = ref(1)
        return {
            api,
            Token,
            params,
            store_id,
        }
    }