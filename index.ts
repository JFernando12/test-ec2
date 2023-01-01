import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Estoy dentro de la api jeje');
});

app.get('/products', (req: Request, res: Response) => {
  res.send('All Products');
});

app.listen(3000, () => {
  console.log('Server on port 3000');
});
