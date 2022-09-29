'use strict';

import db from '../config/db.js';

const ProductShema = new db.Schema({
    description: String
});

export default ProductShema;