import axios from "axios";

const geToken = (client_id, client_secret) => {
    return new Promise((resolve, reject) => {
        const headers = {
          'Authorization': `Basic ${btoa(client_id + ":" + client_secret)}`
        }
        axios.post(`${import.meta.env.VITE_API_URL_TOKEN}/token`, 'grant_type=client_credentials', {
          headers: headers,
        })
        .then(resp => {
            resolve(resp.data)
        })
        .catch(error => {
            reject(error)
        })
    })
}

const getReleases = () => {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('token')
        const headers = {
          'Authorization': `Bearer ${token}`
        }
        axios.get(`${import.meta.env.VITE_API_URL}/browse/new-releases`, {
          headers: headers,
        })
        .then(resp => {
            resolve(resp.data)
        })
        .catch(error => {
            reject(error)
        })
    })
}

const otro = (client_id, client_secret) => {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('token')
        const headers = {
          'Authorization': `Bearer ${token}`
        }
        axios.get(`${process.env.BASE_URL}/precio/${id}`, {
          headers: headers,
          form: {

          }
        })
        .then(resp => {
            resolve(resp.data)
        })
        .catch(error => {
            reject(error)
        })
    })
}

export default {
    geToken,
    getReleases,
}