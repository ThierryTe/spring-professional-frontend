import { apiClient } from "./ApiClient"

export const executeBasicAuthApi = (token) => apiClient.get(`/basicauth`, {
    headers: {
        Authorization: token
    }
})

export const executeJwtAuthenticationService =
    (username, password) => apiClient.post(`/authenticate`,
        {
            username,
            password
        })