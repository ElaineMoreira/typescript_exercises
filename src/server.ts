import  express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'Olá Elaine devOps!' })
});

app.listen(3000, () => console.log(`Sobe servidor na porta 3000! :)`))
