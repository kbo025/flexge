'use strict'

import db from './db.js';
import { User, Company, Country } from '../models/index.js';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const SALT_ROUND = process.env.SALT_ROUND;

const usersData = [
    {name: 'Rafaela', email: 'rafaelaluananogueira@corpus.com.br', password: 'r1PHzQIJ4L'},
    {name: 'Noah Elias', email: 'noah_elias_campos@yahoo.de', password: 'qf3Jc93azC'},
    {name: 'Kamilly', email: 'kamilly_freitas@suzano.com.br', password: '7NZpTc3Zyr'},
];

const companyData = [
    {name: 'Company 1', products: [{description: 'Product 1.1'}, {description: 'Product 2.1'}, {description: 'Product 3.1'}]},
    {name: 'Company 2', products: [{description: 'Product 1.2'}, {description: 'Product 2.2'}, {description: 'Product 3.2'}]},
    {name: 'Company 3', products: [{description: 'Product 1.3'}, {description: 'Product 2.3'}, {description: 'Product 3.3'}]},
];

const countriesData = [
    {
        name: 'Brazil',
        acronym: 'BR',
        states: [
            { name: "Acre" },
            { name: "Alagoas" },
            { name: "Amazonas" },
            { name: "Amapá" },
            { name: "Bahia" },
            { name: "Ceará" },
            { name: "Distrito Federal" },
            { name: "Espírito Santo" },
            { name: "Goiás" },
            { name: "Maranhão" },
            { name: "Minas Gerais" },
            { name: "Mato Grosso do Sul" },
            { name: "Mato Grosso" },
            { name: "Pará" },
            { name: "Paraíba" },
            { name: "Pernambuco" },
            { name: "Piauí" },
            { name: "Paraná" },
            { name: "Rio de Janeiro" },
            { name: "Rio Grande do Norte" },
            { name: "Rondônia" },
            { name: "Roraima" },
            { name: "Rio Grande do Sul" },
            { name: "Santa Catarina" },
            { name: "Sergipe" },
            { name: "São Paulo" },
            { name: "Tocantins" }
        ]
    },
    {
        name: 'Venezuela',
        acronym: 'VE',
        states: [
            { name: "Amazonas" },
            { name: "Anzoátegui" },
            { name: "Apure" },
            { name: "Aragua" },
            { name: "Barinas" },
            { name: "Bolívar" },
            { name: "Carabobo" },
            { name: "Cojedes" },
            { name: "Delta Amacuro" },
            { name: "Falcón" },
            { name: "Guárico" },
            { name: "Lara" },
            { name: "Mérida" },
            { name: "Miranda" },
            { name: "Monagas" },
            { name: "Nueva Esparta" },
            { name: "Portuguesa" },
            { name: "Sucre" },
            { name: "Táchira" },
            { name: "Trujillo" },
            { name: "Vargas" },
            { name: "Yaracuy" },
            { name: "Zulia" },
            { name: "Distrito Capital" },
        ]
    },
];

const users = await Promise.all(
    usersData.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, parseInt(SALT_ROUND));
        return new User({ ...user, password: hashedPassword });
    })
);

const companies = companyData.map(company => new Company(company));
const countries = countriesData.map(country => new Country(country));

await User.deleteMany({}, {}); 
await Company.deleteMany({}, {});
await Country.deleteMany({}, {});

await Promise.all( 
    users.map(async (user) => {
        return await user.save();
    })
);

await Promise.all( 
    companies.map(async (company) => {
        return await company.save();
    })
);

await Promise.all( 
    countries.map(async (country) => {
        return await country.save();
    })
);

db.disconnect();
console.log("DONE!");