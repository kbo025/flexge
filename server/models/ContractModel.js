'use strict';

import db from '../config/db.js';

const ContractShema = new db.Schema({
    documentNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    socialReason: { type: String, required: true },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate: {
          validator: function(v) {
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email)
          },
          message: props => `${props.value} is not a valid email!`
        },
        required: true,
    },
    phone: {
        type: String,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /\d{0,2} \d{9}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
    },
    startsIn: { type: Date, required: true },
    endsIn: Date,
    dueDay: { type: String, required: true },
    contractFile: String,
    localization: {
        country: { type: String, required: true },
        state: { type: String, required: true },
        city: String,
        adress: { type: String, required: true },
        district: { type: String, required: true },
        number: { type: String, required: true },
        zipCode: { type: String, required: true }, 
    },
    company: {
        id: { type: String, required: true },
        name: { type: String, required: true },
    },
    products: [{
        id: { type: String, required: true },
        description: { type: String, required: true },
        amount: Number,
        finalUnitPrice: { type: String, required: true },
        installments: Number,
        paidInstallments: Number,
        beginningOfTerm: Date
    }]
});

const ContractModel = db.model('Contract', ContractShema);

export default ContractModel;