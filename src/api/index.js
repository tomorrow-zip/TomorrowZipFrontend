import axios from "axios"

const api = axios.create()

// api.defaults.baseURL = "http://35.216.58.5/"
api.defaults.withCredentials = true
//
// api.interceptors.response.use(
//     (response) => {
//         // 요청 성공 시 특정 작업 수행
//         return response
//     },
//     (error) => {
//         // 요청 실패 시 특정 작업 수행
//         return Promise.reject(error)
//     }
// )

export const test = () => api.get("/test")

export const getImages = (uuid) => api.get(`/api/images/${uuid}`)

export const postImages = (image) => api.post(`api/images`, image)

export const getProduct = (productIdx) => api.get(`/api/products/${productIdx}`)

export { api }
