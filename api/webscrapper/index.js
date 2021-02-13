const rp = require('request-promise')
const data = require('../../meu-app-react/src/pages/Home/index');
const cheerio = require('cheerio')
const db = require('../src/app/controllers/SearchController');
 
const options = {
  uri: (db.index),
  transform: function (body) {
    return cheerio.load(body)
  }
}
 
function processarDados(dados){
  //salva no banco de dados
  console.log(JSON.stringify(dados))
}
 
rp(options)
.then(($) => {
  const buscas = []
  $(data.HandlerSubmit).each((i, item) => {
 
    const busca = {
      nome: $(item).find(data.HandlerSubmit).text(),
    }
 
    if(busca.nome !== "")
      buscas.push(busca)
  })
  processarDados(buscas)
})
.catch((err) => {
  console.log(err);
})