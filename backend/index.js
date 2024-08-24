import express from 'express';
import dotenv from 'dotenv'; 
import { connectMongoose } from './databases/connection1.databases.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectMongoose();

app.use(cors({
  origin: 'https://quester-baba-pscl.vercel.app', // Change back to specific origin once confirmed
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Handle preflight requests
app.options('*', cors());

import mainRouter from './routes/mainRouter.js';
app.use('/api/v2', mainRouter);

app.get('/', (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
