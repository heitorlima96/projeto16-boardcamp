import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

import categoriesRouter from './routes/categories.router.js';
import gamesRouter from './routes/games.router.js';
import customersRouter from './routes/customers.router.js';
import rentalsRouter from './routes/rentals.router.js';

const server = express();
dotenv.config();
server.use(express.json());
server.use(cors());

server.use(categoriesRouter);
server.use(gamesRouter);
server.use(customersRouter);
server.use(rentalsRouter);

server.listen(4000, () => {
    console.log('Server listening on port 4000.');
});