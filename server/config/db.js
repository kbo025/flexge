'use strict'

import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: '../.env' });

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const AUTH = DB_USER && DB_PASS ? `${DB_USER}:${DB_PASS}@` : ''

const clientUrl = `mongodb://${AUTH}${DB_HOST}:${DB_PORT}/${DB_NAME}`;

mongoose.connect(clientUrl);

export default mongoose;