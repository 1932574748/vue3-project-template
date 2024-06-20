import http from "@/utils/http"

export function login(data: { userName: string, password: string }) {
    return http.get(`/asset/seven`, data)
}
export function weatherInfo(params: Object) {
    return http.get(`/weather/weatherInfo`, params)
}