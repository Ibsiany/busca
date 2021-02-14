import React, { useState, useEffect } from 'react';
import {Container, InitialText, Div, Body, List} from './style';
import search from '../images/search.ico';
import create from '../images/cursor.ico';
import api from '../../services/api';
import ClickedLinkCount from '../Click/index';

const valoresIniciais = {
  pesquisa: "",
};
 
const Home = () => {

const [buscas, setBusca] = useState([]);
const [values, setValues] = useState(valoresIniciais);
const [list, setList] = useState([]);

function handlerValues(event) {
  let campo = event.target.getAttribute("name");
  let valor = event.target.value;
  setValues({ ...values, [campo]: valor });
}  

async function fetchData() {
    try{
      const response = await api.get('/search');
      setList(response.data);
    } catch {
      alert('Confira a api');
    }
}

useEffect(()=>{
  fetchData()
  }, [])

function filter(){    
  if (values.pesquisa.length > 0) {
    setBusca(list.filter(x => x.about.toLowerCase().indexOf(values.pesquisa.toLowerCase()) > -1))
} else {
    setBusca([])
}}

return(
  <Container>
    <InitialText>
      <a 
        href="./">
        <img 
          src="https://fontmeme.com/permalink/210205/ee3a294e8ae2cb03fc8bc403de33d3d7.png" 
          alt="fonte-get-schwifty" 
          border="0">
        </img>
      </a>
      {/* <Body>
        <a href="./cadastrar"> <img src={create} alt="Cadastrar" width="65" height="70" border="0"></img>
        <br></br> <small>Cadastrar</small></a>
      </Body>  */}
    </InitialText>
    <Div>
        <input 
          id="pesquisa" 
          placeholder="Pesquise aqui" 
          name="pesquisa" 
          values={values.search} 
          onChange={handlerValues}>
        </input>

        <img 
          href="./" 
          name="button" 
          onClick={() => {filter()}} 
          src={search} 
          alt="Procurar" 
          width="60" 
          height="65" >
        </img>
    </Div>
    <List>
      <ul> 
        <li>
            {buscas.length ? 
            (buscas.map((v) =>(<ClickedLinkCount name={v.name} url={v.url} about={v.about}/>))) : 
            (list.map((v) => (<ClickedLinkCount name={v.name} url={v.url} about={v.about}/>)))
            }
        </li>
      </ul>
    </List>
  </Container> 
);
}
export default Home;