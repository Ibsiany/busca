import React from 'react';
import {Container, InitialText, Div, Label, Img, Body} from './style';
import {Link} from 'react-router-dom';
import {Form, Button, Icon} from 'semantic-ui-react';
import create from '../images/cursor.ico';
import barra from '../images/barra.ico';

const Register= () => (
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
                <Form.Input fluid label='Nome' placeholder='Nome'  name="nome"/>
                <Form.Input fluid label='Endereço (URL)' placeholder='https://www.devall.com.br' name="url"/>
                <Form.Input fluid label='Endereço (URL) do RSS' placeholder='' name="rss" />
                <Form.Input fluid label='Fale um pouco sobre seu site' placeholder='Descreva' name="about" />
            </Form.Group>
            <Button as={Link} color='red' className="ButtonLink" to="../">
              <Icon name='remove' />Cancelar
            </Button>
            <Button color='green'>
              <Icon name='checkmark' /> Salvar
            </Button>  
        </Form>
  </Container>  
)
export default Register;