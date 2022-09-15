'use strict'

import * as dotenv from 'dotenv';
import sqlite3 from 'sqlite3';

dotenv.config({ path: '../../.env' });
const sqlite3 = sqlite3.verbose();
const db = new sqlite3.Database(process.env.PATH_DB);

export default db;