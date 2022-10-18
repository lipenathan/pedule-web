import axios from 'axios'

const baseUrl = 'http://15.229.7.73:3333'
// const baseUrl = 'http://localhost:3333'

export default(url=baseUrl) => {
    return axios.create({
        baseURL: url
    })
}