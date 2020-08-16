import React,{useState} from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './style.css';

import MenuVertical from '../../components/MenuVertical/MenuVertical';

const CriarUsuarioPage = ()=>{
    const[nome, setNome] = useState("")
    const[endereco, setEndereco] = useState("")
    const[email, setEmail] = useState("")
    const[telefone, setTelefone] = useState("")
    const[area, setArea] = useState("")


    const criarUsuario = async () => {
        await axios.post("https://apirest-tracking.herokuapp.com/api/usuario",{"nome":nome,"endereco":endereco,"email":email,"telefone":telefone,"area":area})
            .then(res =>{
                alert(res.data);
            })
            .catch(err =>{
                console.log(err)
            })
    }

    const submitCriar = (e) => {
        e.preventDefault();
        criarUsuario();
    }

    return(
        <div>
            <MenuVertical/>
            <div className="content-criarUsuario">
                <div className="content-criarUsuario_interno">
                <h2>Criar Usuario</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="name" placegholder="Nome" onChange={e => setNome(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control type="address" placegholder="Ex: Rua ..." onChange={e => setEndereco(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placegholder="exemplo@exemplo.com" onChange={e => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="phone" placegholder="(00)00000-0000" onChange={e => setTelefone(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>Área</Form.Label>
                                <Form.Control type="area" placegholder="Ex: Desenvolvedor ..." onChange={e => setArea(e.target.value)}></Form.Control>
                            </Form.Group>
                    </Form>
                    <Button varaint="primary" onClick={submitCriar} className="btn-criarUsuario_Button">Criar</Button>
                </div>
            </div>
        </div>
    )
}

export default CriarUsuarioPage;
