'use strict';

const getOne = async (id) => {
    return { success: true, method: 'getOne', id };
}

const getAll = async (page) => {
    return { success: true, method: 'getAll', page };
}

const create = async (data) => {
    return { success: true, method: 'create', data };
}

const update = async (key, data) => {
    return { success: true, method: 'update', key, data };
}

const remove = async (key) => {
    return { success: true, method: 'remove', key };
}

export default {
    getOne,
    getAll,
    create,
    update,
    remove
}