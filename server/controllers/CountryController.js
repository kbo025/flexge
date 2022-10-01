'use strict'

import { Country } from '../models/index.js';

const index = async (req, res) => {
    try {
        const data = await Country.find({}, ['id', 'name', 'acronym', 'states']).exec();
        res.json({ success: true, data });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message});
    }
}

const view = async (req, res) => {
    try {
        const acronym = req.params.acronym;
        const data = await Country.findOne({ acronym }, ['id', 'name', 'acronym', 'states']).exec();
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