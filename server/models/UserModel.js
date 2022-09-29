'use strict';

import db from '../config/db.js';
import UserShema from '../schemas/UserSchema.js';

const UserModel = db.model('User', UserShema);

export default UserModel;