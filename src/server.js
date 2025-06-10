import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import mocksRouter from './routes/mocks.router.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';

dotenv.config();

const app = express();
app.use(express.json());

await mongoose.connect(process.env.MONGO_URL);

app.use('/api/mocks', mocksRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

app.listen(process.env.PORT, () => {
  console.log(`✅ Servidor corriendo en puerto: ${process.env.PORT}`);
});
