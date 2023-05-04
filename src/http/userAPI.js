import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export const registration = async (userLogin, userPassword) => {
    const {data} = await $authHost.post('api/user/registration', {userLogin, userPassword})
    return data
}

export const login = async (userLogin, userPassword) => {
    const {data} = await $host.post('api/user/login', {userLogin, userPassword})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth', )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const fetchUserLogins = async () => {
    const {data} = await $authHost.get('api/user/getUserLogins')
    return data
}

export const createCalculationParameters = async (parameters) => {
    const {data} = await $authHost.post('api/user/createCalculationParameters', parameters)
    return data
}

export const fetchCalculationParameters = async () => {
    const {data} = await $authHost.get('api/user/getCalculationParameters')
    return data
}