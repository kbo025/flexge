'use strict';

import db from '../config/db.js';
import ProductShema from '../schemas/ProductSchema.js';

const ProductModel = db.model('Product', ProductShema);

export default ProductModel;