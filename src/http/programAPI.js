import {$authHost, $host} from "./index";

export const createFirstProgram = async (program) => {
    const {data} = await $authHost.post('api/program/createFirst/' + program.programCategoryId, program)
    return data
}

export const createLastProgram = async (program) => {
    const {data} = await $authHost.post('api/program/createLast/' + program.programCategoryId, program)
    return data
}

export const createAfterProgram = async (program) => {
    const {data} = await $authHost.post('api/program/createAfter/' + program.programCategoryId, program)
    return data
}

export const fetchPrograms = async (programCategoryId) => {
    const {data} = await $host.get('api/program/getAll/' + programCategoryId)
    return data
}

export const updateOneProgram = async (program) => {
    const {data} = await $authHost.put('api/program/updateOne', program)
    return data
}

export const deleteOneProgram = async (program) => {
    const {data} = await $authHost.post('api/program/deleteOne', program)
    return data
}