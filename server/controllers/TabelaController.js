'use strict'

import { Tabela } from '../models/index.js';

const index = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const data = await Tabela.getAll(page);
        res.json({ success: true, data });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message});
    }
}

const view = async (req, res) => {
    try {
        const key = req.params.key;
        const data = await Tabela.getOne(key);
        res.json({ success: true, data });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
}

const create = async (req, res) => {
    try {
        const data = req.body;
        const resp = await Tabela.create(data);
        res.json({ success: true, data: resp });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
}

const update = async (req, res) => {
    try {
        const key = req.params.key;
        const data = req.body;
        const resp = await Tabela.update(key, data);
        res.json({ success: true, data: resp });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }    
}

const remove = async (req, res) => {
    try {
        const key = req.params.key;
        const resp = await Tabela.remove(key);
        res.json({ success: true, data: resp });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
}

export default {
    resourceName: 'tabela',
    index,
    view,
    create,
    update,
    remove
}