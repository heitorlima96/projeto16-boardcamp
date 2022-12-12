import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

import categoriesRouter from './routes/categories.router.js';

const server = express();
dotenv.config();
server.use(express.json());
server.use(cors());

server.use(categoriesRouter);

server.listen(4000, () => {
    console.log('Server listening on port 4000.');
});