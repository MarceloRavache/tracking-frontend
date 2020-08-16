import React, {useState,useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import CorpoListagem from '../CorpoListagem/CorpoListagem';

const ListarUsuario = ()=>{
    const [lista,setLista] = useState([])
    const [pesquisar,setPesquisar] = useState([])

    const listarUsuarios = async () =>{
        await axios.post("https://apirest-tracking.herokuapp.com/api/usuario/pesquisar",{"nome":""})
            .then(res => {
                setLista(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const submitPesquisar = async (e) =>{
        e.preventDefault();
        await axios.post("https://apirest-tracking.herokuapp.com/api/usuario/pesquisar",{"nome":pesquisar})
            .then(res => {
                setLista(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(()=>{
        listarUsuarios();
    },[]);
    return(
        <div className="content-listarUsuario_comp">
            <h2>Listar Usuarios</h2>
            <Form>
                <Form.Group controlId="form.ControlInputPesquisar">
                    <Form.Label>Nome do Usuario</Form.Label>
                    <Form.Control type="name" placeholder="Nome do usuario" onChange={e => setPesquisar(e.target.value)}></Form.Control>
                    <Button variant="primary" onClick={submitPesquisar} className="btn-listarUsuario_Button">Pesquisar</Button>
                </Form.Group>
            </Form>
            <CorpoListagem usuario={lista}/>
        </div>
    )
}

export default ListarUsuario;
