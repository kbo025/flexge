'use strict';

import db from '../config/db.js';

const CompanyShema = new db.Schema({
    name: String,
    products: [{
        description: String
    }]
});

const CompanyModel = db.model('Company', CompanyShema);

export default CompanyModel;