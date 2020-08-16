import React,{useState,useRef,useEffect} from 'react';
import {Form, Button, ListGroup} from 'react-bootstrap';
import axios from 'axios';

import CorpoUsuario from '../CorpoUsuario/CorpoUsuario';

const ListarAtividade = () =>{
    const [lista,setLista] = useState([])
    const [pesquisa,setPesquisa] = useState("")
    const [show,setShow] = useState(false)
    const botao = useRef(false)


    const submitPesquisar = async () =>{
        await axios.post("https://apirest-tracking.herokuapp.com/api/atividade",{"nome":pesquisa})
            .then(res => {
                setLista(res.data)
                setShow(true)
            })
            .catch(err => {
                console.log(err)
            })
            
    }
    const usuarios = lista.map(usuario => (<ListGroup.Item><CorpoUsuario usuario={usuario}/></ListGroup.Item>))


    useEffect(()=>{
        if(botao.current){
            setShow(true);
        }else botao.current = true;
    })
    return(
        <div className="content-listarAtividade">
            <Form>
                <Form.Group>
                    <Form.Control type="pesquisar" onChange={e => setPesquisa(e.target.value)}></Form.Control>
                    <Button variant="primary" onClick={submitPesquisar} className="btn-pesquisar_Button">Pesquisar</Button>
                </Form.Group>
            </Form>
            <ListGroup>
                {show ? usuarios : ""}
            </ListGroup>
        </div>
    )
}

export default ListarAtividade;