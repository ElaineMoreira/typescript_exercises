import  express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'Olá Elaine devOps!' })
});

app.listen(3000, () => console.log(`Sobe servidor na porta 3000! :)`))
// node nao interpreta typescript, logo para subir o servidor, tem que compilar o codigo e rodar o codigo compilado
// 1- configura o typescript - npx tsc --init crinado tsconfig.ts
// 2- abra ele e mude as configuracoes desejadas

