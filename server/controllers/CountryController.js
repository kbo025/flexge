'use strict'

import { Country } from '../models/index.js';

const index = async (req, res) => {
    try {
        const data = await Country.find({}, ['id', 'name', 'acronym']).exec();
        res.json({ success: true, data });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message});
    }
}

const view = async (req, res) => {
    try {
        const acronim = req.params.acronim;
        const data = await Country.findOne({ acronim }, ['id', 'name', 'acronym', 'states']).exec();
        res.json({ success: true, data });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
}

export default {
    resourceName: 'country',
    index,
    view
}