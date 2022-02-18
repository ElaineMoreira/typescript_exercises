"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    return res.json({ message: 'Olá Elaine devOps, calma vai dar tudo certo!' });
});
app.listen(3000, () => console.log(`Sobe servidor na porta 3000! :)`));
// node nao interpreta typescript, logo para subir o servidor, tem que compilar o codigo e rodar o codigo compilado
// 1- configura o typescript - npx tsc --init crinado tsconfig.ts
// 2- abra ele e mude as configuracoes desejadas
// 3- para compilar npx tsc 
// 4- para executar o arquivo e subir o servidor basta dar node server.js
