import React, { useState, useEffect } from 'react';
import {Container, InitialText, Div, Label, Img, Body, List} from './style';
import search from '../images/search.ico';
import create from '../images/cursor.ico';
import api from '../../services/api';

const valoresIniciais = {
  search: "",
};
 
const Home = () => {

const [buscas, setBusca] = useState([]);
const [values, setValues] = useState(valoresIniciais);
const [clicked, setClicked] = useState([false]);
const [count, setCounter] = useState(0);

function handlerValues(event) {
  let campo = event.target.getAttribute("name");
  let valor = event.target.value;
  setValues({ ...values, [campo]: valor });
}  


useEffect(()=>{
  async function fetchData() {
    try{
      const response = await api.get('/search');
      setBusca(response.data);
    } catch {
      alert('Confira a api');
    }
  }
  fetchData();
  }, [])

  function render_buscas(){
    function increment() {
      setCounter(count + 1);
      console.log(count)
    }
    return buscas.map((v)=>
    <div>
       <a href={v.url} target="_blank" onClick={increment}>{v.name}</a> 
       <p>{v.about}</p>
       <span>{count} visita(s) no site.</span>
    </div> 
    )
  }

  function render_filtrar(){ 
    function increment() {
      setCounter(count + 1);
      console.log(count) 
    }
    const filterItems = buscas.filter(x => x.about.toLowerCase().indexOf(values.pesquisa.toLowerCase()) > -1);
    return filterItems.map((v) =>
    <div>
      <a href={v.url} target="_blank" onClick={increment}>{v.name}</a> 
      <p>{v.about}</p>
      <span> {count} visita(s) no site.</span>
    </div>
    )
  }

return(
  <Container>
      <InitialText>
        <a href="./"><img src="https://fontmeme.com/permalink/210205/ee3a294e8ae2cb03fc8bc403de33d3d7.png" alt="fonte-get-schwifty" border="0"></img>
        </a>
        {/* <Body>
        <a href="./cadastrar"> <img src={create} alt="Cadastrar" width="65" height="70" border="0"></img>
        <br></br> <small>Cadastrar</small></a>
      </Body>  */}
      </InitialText>
  <Div>
    <Label>
    <input id="pesquisa" placeholder="Pesquise aqui" name="pesquisa" values={values.search} onChange={handlerValues}></input>
    </Label>
    <Img>
      <img href="./" name="button" onClick={() => setClicked(!clicked)} src={search} alt="Procurar" width="60" height="65" ></img>
    </Img>
  </Div>
  <List>
     <ul> 
       <li>
           { clicked ? render_buscas() : render_filtrar()}
           {/* { buscas.length > 0 ? render_buscas() : <h2>Nenhum dado registrado </h2> } */}
       </li>
            
    </ul>
  </List>
  </Container> 
);
}
export default Home;