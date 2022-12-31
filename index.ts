import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Estoy dentro de la api jeje');
});

app.listen(3000, () => {
  console.log('Server on port 3000');
});
