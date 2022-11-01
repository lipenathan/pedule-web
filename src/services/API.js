import axios from 'axios'

// const baseUrl = 'http://15.228.45.153:3333'
const baseUrl = 'http://18.230.187.173:3333'

export default(url=baseUrl) => {
    return axios.create({
        baseURL: url
    })
}