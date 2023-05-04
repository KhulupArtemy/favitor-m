import {$authHost, $host} from "./index";

export const createFirstCategory = async (item) => {
    const {data} = await $authHost.post('api/category/createFirst', item)
    return data
}

export const createLastCategory = async (item) => {
    const {data} = await $authHost.post('api/category/createLast', item)
    return data
}

export const createAfterCategory = async (item) => {
    const {data} = await $authHost.post('api/category/createAfter', item)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category/getAll')
    return data
}

export const updateOneCategory = async (item) => {
    const {data} = await $authHost.put('api/category/updateOne', item)
    return data
}

export const deleteOneCategory = async (item) => {
    const {data} = await $authHost.post('api/category/deleteOne', item)
    return data
}