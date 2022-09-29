'use strict';

import db from '../config/db.js';

const CompanyShema = new db.Schema({
    name: String
});

export default CompanyShema;