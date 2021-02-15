import React, { useState} from 'react';
import {Container, InitialText, Body} from './style';
import {Link} from 'react-router-dom';
import {Form, Button, Icon} from 'semantic-ui-react';
import create from '../images/cursor.ico';
import barra from '../images/barra.ico';
import api from '../../services/api';

const valoresIniciais = {
  name: "",
  url: "",
  about: "",
};

function Register(){
  const [values, setValues] = useState(valoresIniciais); 

  function handlerValues(event) {
    let campo = event.target.getAttribute("name");
    let valor = event.target.value;
    setValues({ ...values, [campo]: valor });
  }
  function retornaDados() {
    async function dados() {
      try {
        const response = await api.post("/cadastrar", {
          name: values.name,
          url: values.url,
          about: values.about,
        });
      } catch {
        alert("Confira a api");
      }
    }

    dados();
  }

  return (
    <Container>
      <InitialText>
        <a href="./"><img src="https://fontmeme.com/permalink/210205/ee3a294e8ae2cb03fc8bc403de33d3d7.png" alt="fonte-get-schwifty" border="0"></img>
        </a>
        <img src={barra} alt="Cadastrar" width="65" height="110" border="0"></img>      
        <p>Cadastro</p>
        <Body>         
         <img src={create} alt="Cadastrar" width="65" height="70" border="0"></img>         
      </Body> 
      
      </InitialText> 
       <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Nome' placeholder='Nome'  name="name" value={values.name} onChange={handlerValues}/>
                <Form.Input fluid label='Endereço (URL)' placeholder='Ex.:https://www.devall.com.br' name="url" value={values.url} onChange={handlerValues}/>
                <Form.Input fluid label='Fale um pouco sobre seu site' placeholder='Descreva' name="about" value={values.about} onChange={handlerValues}/>
            </Form.Group>
            <Button as={Link} color='red' className="ButtonLink" to="../">
              <Icon name='remove' />Cancelar
            </Button>
            <Button 
              color='green'
              onClick={() => {
                api.post(retornaDados());
              }}
              href="./"
            >
              <Icon name='checkmark'/> Salvar
            </Button>  
        </Form>
  </Container>  
  );
}

export default Register;