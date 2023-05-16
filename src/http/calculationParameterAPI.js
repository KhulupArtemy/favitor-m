import {$authHost} from "./index";

export const createCalculationParameters = async (parameters) => {
    const {data} = await $authHost.post('api/calculationParameter/createCalculationParameters', parameters)
    return data
}

export const fetchUserCalculationParameters = async () => {
    const {data} = await $authHost.get('api/calculationParameter/getUserCalculationParameters')
    return data
}

export const getRegistrationKey = async (parameters) => {
    const {data} = await $authHost.post('api/calculationParameter/getRegistrationKey', parameters)
    return data
}

export const fetchCalculationParameters = async () => {
    const {data} = await $authHost.get('api/calculationParameter/getCalculationParameters')
    return data
}

export const updateCalculationParameter = async (parameters) => {
    const {data} = await $authHost.put('api/calculationParameter/updateCalculationParameter', parameters)
    return data
}

export const deleteCalculationParameter = async (parameters) => {
    const {data} = await $authHost.post('api/calculationParameter/deleteCalculationParameter', parameters)
    return data
}