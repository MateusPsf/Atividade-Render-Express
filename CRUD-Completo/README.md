# CRUD com JSON Server + Node.js/Express

Projeto acadêmico com as quatro operações CRUD em páginas separadas.

## Campos
nome, sobrenome, email, idade, telefone, rua, bairro, cidade, estado e rg.

## Estrutura
- `public/post/` — POST / Create
- `public/get/` — GET / Read
- `public/put/` — PUT / Update
- `public/delete/` — DELETE / Delete
- `db.json` — banco JSON
- `server.js` — Express + JSON Server

## Rodar localmente
```bash
npm install
npm start
```
Abra `http://localhost:3000`.

## GitHub
```bash
git init
git add .
git commit -m "Projeto CRUD com JSON Server e Express"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Render
1. Envie o projeto ao GitHub.
2. No Render, crie um **Web Service** e conecte o repositório.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Faça o deploy.

> Observação: o Render pode usar armazenamento efêmero. Alterações feitas no `db.json` durante a execução podem ser perdidas após reinicializações/redeploys. Para a demonstração acadêmica do CRUD, a aplicação continua adequada, mas persistência permanente em produção exigiria um banco persistente.
