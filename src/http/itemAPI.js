import {$authHost, $host} from "./index";

export const createFirstItem = async (item) => {
    const {data} = await $authHost.post('api/item/createFirst', item)
    return data
}

export const createLastItem = async (item) => {
    const {data} = await $authHost.post('api/item/createLast', item)
    return data
}

export const createAfterItem = async (item) => {
    const {data} = await $authHost.post('api/item/createAfter', item)
    return data
}

export const fetchItems = async () => {
    const {data} = await $host.get('api/item')
    return data
}

export const updateOneItem = async (item) => {
    const {data} = await $authHost.put('api/item', item)
    return data
}

export const deleteOneItem = async (item) => {
    const {data} = await $authHost.post('api/item/deleteOne', item)
    return data
}

export const createFirstRow = async (row) => {
    const {data} = await $authHost.post('api/row/createFirst/' + row.itemId, row)
    return data
}

export const createLastRow = async (row) => {
    const {data} = await $authHost.post('api/row/createLast/' + row.itemId, row)
    return data
}

export const createAfterRow = async (row) => {
    const {data} = await $authHost.post('api/row/createAfter/' + row.itemId, row)
    return data
}

export const fetchRows = async (itemId) => {
    const {data} = await $host.get('api/row/' + itemId)
    return data
}

export const updateOneRow = async (row) => {
    const {data} = await $authHost.put('api/row', row)
    return data
}

export const deleteOneRow = async (row) => {
    const {data} = await $authHost.post('api/row/deleteOne', row)
    return data
}