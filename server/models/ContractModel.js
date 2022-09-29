'use strict';

import db from '../config/db.js';
import ContractShema from '../schemas/ContractSchema.js';

const ContractModel = db.model('Contract', ContractShema);

export default ContractModel;