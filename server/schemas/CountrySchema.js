'use strict';

import db from '../config/db.js';

const CountryShema = new db.Schema({
    name: String,
    acronym: String,
    states: [{
        name: String
    }]
});

export default CountryShema;