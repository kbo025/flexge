'use strict';

import db from '../config/db.js';
import ContractProductShema from '../schemas/ContractProductSchema.js';

const ContractProductModel = db.model('ContractProduct', ContractProductShema);

export default ContractProductModel;