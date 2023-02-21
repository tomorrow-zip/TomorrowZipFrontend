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

const test = () => {
    const response = api.get("/test", {
        withCredentials: true, // 쿠키 cors 통신 설정
    })
    console.log(response)
    return response
}

export { api, test }
