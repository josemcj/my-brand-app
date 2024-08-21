import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_APIURL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
})

export default api
