'use strict'

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { Tabela } from './controllers/index.js'

dotenv.config({ path: '../.env' })
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
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

// Tabela routes
app.get(`/api/${Tabela.resourceName}`, Tabela.index );
app.get(`/api/${Tabela.resourceName}/:key`, Tabela.view );
app.post(`/api/${Tabela.resourceName}`, Tabela.create );
app.put(`/api/${Tabela.resourceName}/:key`, Tabela.update );
app.delete(`/api/${Tabela.resourceName}/:key`, Tabela.remove );

app.listen(PORT, HOST);
