import axios from 'axios'

const baseUrl = 'http://18.230.187.173:3333' 
// const baseUrl = 'http://localhost:3333'


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

export default (url = baseUrl) => {
    return axios.create({
        baseURL: url,
        transformRequest: [dateTransformer].concat(axios.defaults.transformRequest)
    })
}