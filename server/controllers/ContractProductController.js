'use strict'

import { ContractProduct } from '../models/index.js';

const ITEM_PER_PAGE = 20;

const index = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = ITEM_PER_PAGE;
        const skip = (page * limit) - limit;
        const filters = req.query.filters || {};
        const data = await ContractProduct.find(
            filters,
            ['id', 'documentNumber', 'socialReason', 'company'],
            { skip, limit }
        ).exec();
        res.json({ success: true, data });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message});
    }
}

const view = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ContractProduct.findById(id).exec();
        res.json({ success: true, data });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
}

const create = async (req, res) => {
    try {
        const data = req.body;
        const contract = new Contract(data);
        const resp = await ContractProduct.save();
        res.json({ success: true, data: resp });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const resp = await ContractProduct.findByIdAndUpdate(id, data, {returnDocument: 'after', runValidators: true });
        res.json({ success: true, data: resp });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }    
}

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ContractProduct.findByIdAndDelete(id).exec();
        res.json({ success: true, data });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
}

export default {
    resourceName: 'contract',
    index,
    view,
    create,
    update,
    remove
}