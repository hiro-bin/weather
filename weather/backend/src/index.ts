import express, { Router } from 'express';
import dotenv from 'dotenv';
import weatherRoutes from './routes/weatherRoutes';

const app = express();
dotenv.config();
app.use(express.json());

app.get('/', (req, res) => {
  res.send("서버 체크용");
});

app.use('/api/weather', weatherRoutes);

app.listen(process.env.PORT || 3002);