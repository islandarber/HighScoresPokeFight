import express from 'express';
import {connectDatabase} from './db/client.js';	
import 'dotenv/config';
import scoresRouter from './routes/scoresRouter.js'

const app = express();
const PORT = 3000;


app.use(express.json());
app.use('/game', scoresRouter)



const startServer = async () => {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer().catch((error) => console.log(error, 'failed to start server'));

