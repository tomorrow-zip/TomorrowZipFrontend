import axios from "axios"

const api = axios.create()

api.defaults.baseURL = "http://35.216.58.5/"
api.defaults.withCredentials = true
api.defaults.headers.common["Accept"] = "*/*"
api.defaults.headers.common["content-Type"] =
    "application/x-www-form-urlencoded; charset=UTF-8"

api.interceptors.response.use(
    (response) => {
        // 요청 성공 시 특정 작업 수행
        return response
    },
    (error) => {
        // 요청 실패 시 특정 작업 수행
        return Promise.reject(error)
    }
)

const test = () =>
    api.get("/test", {
        withCredentials: true, // 쿠키 cors 통신 설정
    })

export { api, test }
