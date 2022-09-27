'use strict';

import db from '../config/db.js';

const CountryShema = new db.Schema({
    name: String,
    acronym: String,
    states: [{
        name: String
    }]
});

const CountryModel = db.model('Country', CountryShema);

export default CountryModel;