'use strict'

import { Product } from '../models/index.js';

const index = async (req, res) => {
    try {
        const data = await Product.find({}, ['id', 'description']).exec();
        res.json({ success: true, data });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message});
    }
}

export default {
    resourceName: 'product',
    index
}