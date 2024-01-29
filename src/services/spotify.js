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

const getReleases = (offset = 0, limit = 12) => {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('token')
        const headers = {
          'Authorization': `Bearer ${token}`
        }
        axios.get(`${import.meta.env.VITE_API_URL}/browse/new-releases?offset=${offset}&limit=${limit}`, {
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

const getAlbum = (id) => {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('token')
        const headers = {
          'Authorization': `Bearer ${token}`
        }
        axios.get(`${import.meta.env.VITE_API_URL}/albums/${id}`, {
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
    getAlbum,
}