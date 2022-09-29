'use strict';

import db from '../config/db.js';

const ContractProductShema = new db.Schema({
    id: { type: String, required: true },
    description: { type: String, required: true },
    amount: Number,
    finalUnitPrice: { type: String, required: true },
    installments: Number,
    paidInstallments: Number,
    beginningTerm: Date
});

export default ContractProductShema;