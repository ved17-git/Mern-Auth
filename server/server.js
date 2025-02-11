import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import 'dotenv/config';
import router from '../server/Routes/routes.js';

const app = express();

app.use(cors({

}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
    .then(() => {
        console.log('connected to db');
        app.listen(3000, () => {
            console.log('listening on 3000');
        });
    })
    .catch((error) => {
        console.log('CONNECTION ERROR', error);
    });

app.use('/', router);
