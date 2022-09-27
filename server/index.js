'use strict'

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import AuthMiddleware from './middleware/AuthMiddleware.js';
import { Contract, Company, Country, Auth } from './controllers/index.js'

dotenv.config({ path: '../.env' })
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const app = express();

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

// Teste api
app.get(`/api/msj`, (req, res) => {
  res.json({ express: 'Hello From Express' });
})

// Auth routes
app.post(`/api/auth/login`, Auth.login );
app.get(`/api/auth/me`, AuthMiddleware, Auth.me );

// Contract routes
app.get(`/api/${Contract.resourceName}`, AuthMiddleware, Contract.index );
app.get(`/api/${Contract.resourceName}/:id`, AuthMiddleware, Contract.view );
app.post(`/api/${Contract.resourceName}`, AuthMiddleware, Contract.create );
app.put(`/api/${Contract.resourceName}/:id`, AuthMiddleware, Contract.update );
app.delete(`/api/${Contract.resourceName}/:id`, AuthMiddleware, Contract.remove );

//Country routes
app.get(`/api/${Country.resourceName}`, AuthMiddleware, Country.index );
app.get(`/api/${Country.resourceName}/:code`, AuthMiddleware, Country.view );

//company routes
app.get(`/api/${Company.resourceName}`, AuthMiddleware, Company.index );
app.get(`/api/${Company.resourceName}/:code`, AuthMiddleware, Company.view );

app.listen(PORT, HOST);
