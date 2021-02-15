<h1 align="center">
    <img 
        src="https://fontmeme.com/permalink/210205/ee3a294e8ae2cb03fc8bc403de33d3d7.png" 
        alt="fonte-get-schwifty" 
    >
    </img>
</h1>
<h1>
    <img 
        src="./meu-app-react/public/dev.gif"
    >
    </img>
</h1>

# Indice
- [Sobre](#-sobre)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Sobre o sistema](#-sobre-o-sistema)
- [Como baixar o projeto](#-como-baixar-o-projeto)

## 👀 Sobre

O projeto **Dev All** é um mecanismo de busca de sites já cadastrados, desenvolvido para o desafio da **itexto** o site foi inspirado na animação **Rick and Morty**.

---

## 💻 Tecnologias utilizadas

Foram utilizadas as seguintes tecnologias:

- [ReactJS](https://pt-br.reactjs.org/)
- [Sequelize](https://sequelize.org/)
- [Axios](https://github.com/axios/axios)
- [Babel](https://babeljs.io/)
- [MySql](https://www.mysql.com/)

---

## 📲 Sobre o sistema

No site você poderá realizar as seguintes funções:

- Cadastro de site
- Busca no site sobre determinado assunto (que já esteja cadastrado)

---

## Como baixar o projeto 

Siga os seguintes passos para baixar o arquivo:

- Inicie o git em uma pasta reservada na sua máquina e digite 
```js
git clone https://github.com/Ibsiany/busca.git
```
- acesse a pasta api e rode:
```js
npm install
```
- Volte até a pasta meu-app-react e rode:
```js
npm install
```
- Para esse passo é necessário que ja tenha um banco de dados configurado em sua máquina, no meu caso utilizei o MySql com o Sequelize para criar a conexão, crie um banco de dados com o nome **busca** e  configure  no arquivo api/config/config.json e no arquivo api/src/config/database.js com as configurações do seu banco de dados, após configurado rode na pasta api:
```js
yarn sequelize db:migrate
```
- Após tudo instalado inicie a api:
```js
npm start
```
- Agora inicie o frontend:
```js
npm start
```
