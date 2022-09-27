'use strict';

import db from '../config/db.js';

const UserShema = new db.Schema({
    name: String,
    email: String,
    password: String
});

const UserModel = db.model('User', UserShema);

export default UserModel;