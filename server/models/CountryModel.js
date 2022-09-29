'use strict';

import db from '../config/db.js';
import CountryShema from '../schemas/CountrySchema.js';

const CountryModel = db.model('Country', CountryShema);

export default CountryModel;