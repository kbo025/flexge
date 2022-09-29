'use strict';

import db from '../config/db.js';
import CompanyShema from '../schemas/CompanySchema.js';

const CompanyModel = db.model('Company', CompanyShema);

export default CompanyModel;