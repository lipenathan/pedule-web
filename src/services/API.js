import axios from 'axios'

import store from '../store'
import { useToast } from 'vue-toastification'
import { POSITION } from 'vue-toastification'
const baseUrl = 'http://18.230.187.173:3333' 
// const baseUrl = 'http://localhost:3333'

const toast = useToast()

const dateTransformer = data => {
    if (data instanceof Date) {

        // lógica para formatação do objeto data para string
        let dataStr = data.toLocaleString().split(" ")[0].split("/")
        let dia = dataStr[0]
        let mes = dataStr[1]
        let ano = dataStr[2]
        let horaStr = data.toLocaleString().split(" ")[1]
        let dataFmt = `${ano}-${mes}-${dia} ${horaStr}`
        return dataFmt
    }
    if (Array.isArray(data)) {
        return data.map(val => dateTransformer(val))
    }
    if (typeof data === "object" && data !== null) {
        return Object.fromEntries(Object.entries(data).map(([key, val]) =>
            [key, dateTransformer(val)]))
    }
    return data
}

const axiosConfig = axios.create({
    baseURL: baseUrl,
    transformRequest: [dateTransformer].concat(axios.defaults.transformRequest)
})

// interceptador de responses
axiosConfig.interceptors.response.use(function (response) {
    const tokenRes = response.headers['access-token']
    if (tokenRes != null) {
        store.dispatch('token', tokenRes)
    }
    return response
}, async function(error) {
    if(error.response.status == 403) {
        toast.warning("Realize o Login novamente para continuar.", {
            position: POSITION.TOP_CENTER
        })
        store.dispatch('usuario', null)
    }
    return Promise.reject(error)
})
// interceptador de requests
axiosConfig.interceptors.request.use(function(config) {
    let token = store.getters.token
    if (token != null) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, function(error) {
    return Promise.reject(error)
})

// axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default axiosConfig