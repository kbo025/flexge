'use strict'

import { Company } from '../models/index.js';

const index = async (req, res) => {
    try {
        const data = await Company.find({}, ['id', 'name']).exec();
        res.json({ success: true, data });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message});
    }
}

const view = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Company.findById(id).exec();
        res.json({ success: true, data });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
}

export default {
    resourceName: 'company',
    index,
    view
}