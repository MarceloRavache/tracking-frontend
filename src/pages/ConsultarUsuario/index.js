import React, {useState,useEffect} from 'react';
import {ListGroup, Button, Modal, Form, Table} from 'react-bootstrap';
import axios from 'axios';
import './style.css';

import CorpoCurso from '../../components/CorpoCurso/CorpoCurso';
import CorpoPalestra from '../../components/CorpoPalestra/CorpoPalestra';
import CorpoApresentacao from '../../components/CorpoApresentacao/CorpoApresentacao';
import CriarAtividade from '../../components/CriarAtividade/CriarAtividade';
import MenuVertical from '../../components/MenuVertical/MenuVertical';


const ConsultarUsuarioPage = (props)=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const[id, setId] = useState(0)
    const[nome, setNome] = useState("")
    const[endereco, setEndereco] = useState("")
    const[email, setEmail] = useState("")
    const[telefone, setTelefone] = useState("")
    const[area, setArea] = useState("")


    const[cursos, setCursos] = useState([])
    const[palestras, setPalestras] = useState([])
    const[apresentacoes, setApresentacoes] = useState([])


    const idUser = props.match.params.id;

    const consultarUsuario = async () => {
        await axios.get("https://apirest-tracking.herokuapp.com/api/usuario/"+idUser)
            .then(res => {
                setId(res.data.id);
                setNome(res.data.nome);
                setEndereco(res.data.endereco);
                setEmail(res.data.email);
                setTelefone(res.data.telefone);
                setArea(res.data.area);
                setCursos(res.data.cursos);
                setPalestras(res.data.palestras);
                setApresentacoes(res.data.apresentacoes);
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(()=>{
        consultarUsuario()
    },[])

    const usuario = {"id":id,"nome":nome,"endereco":endereco,"email":email,"telefone":telefone,"area":area}

    const cursos_corpo = cursos.map(curso => (<CorpoCurso curso={curso}/>))
    const palestras_corpo = palestras.map(palestra => (<CorpoPalestra palestra={palestra}/>))
    const apresentacoes_corpo = apresentacoes.map(apresentacao => (<CorpoApresentacao apresentacao={apresentacao}/>))

    const submitAlterar = async (e) =>{
        e.preventDefault();
        await axios.post("https://apirest-tracking.herokuapp.com/api/usuario/editar",{"id":id,"nome":nome,"endereco":endereco,"email":email,"telefone":telefone,"area":area})
            .then(res =>{
                alert(res.data);
                window.location.reload()
            })
            .catch(err =>{
                console.log(err)
            })
    }
    
    const submitDeletar = async (e) => {
        e.preventDefault();
        await axios.delete("https://apirest-tracking.herokuapp.com/api/usuario/"+(id).toString())
            .then(res => {
                alert(res.data)
                window.location.href = "/listarusuarios"
            })
            .catch(err => {
                console.log(err);
            })
    }
    return(
        <div>
            <MenuVertical/>
            <div className="content-consultarUsuario">
                <div className="cabecalho-nome">
                    <h2>Nome: {nome}<h6>Área: {area}</h6></h2>
                    
                    <CriarAtividade usuario={usuario}/>
                    <Button variant="primary" onClick={handleShow} className="btn-usuario_Button">Editar Usuario</Button>
                    <Button variant="primary" onClick={submitDeletar} className="btn-usuario_Button">Deletar Usuario</Button>
                </div>
                <div className="content-consultarUsuario_interno">
                    <ListGroup>
                        <ListGroup.Item>Endereço: {endereco}</ListGroup.Item>
                        <ListGroup.Item>E-mail: {email}</ListGroup.Item>
                        <ListGroup.Item>Telefone: {telefone}</ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Cursos</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cursos_corpo}
                            </tbody>
                        </Table>
                    </ListGroup>
                    <ListGroup>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Palestras</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {palestras_corpo}
                            </tbody>
                        </Table>
                    </ListGroup>
                    <ListGroup>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Apresentações</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {apresentacoes_corpo}
                            </tbody>
                        </Table>
                    </ListGroup>
                    
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Editar Usuario</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="name" placegholder="Nome" value={nome} onChange={e => setNome(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control type="address" placegholder="Ex: Rua ..." value={endereco} onChange={e => setEndereco(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placegholder="exemplo@exemplo.com" value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control type="phone" placegholder="(00)00000-0000" value={telefone} onChange={e => setTelefone(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Área</Form.Label>
                                <Form.Control type="area" placegholder="Ex: Desenvolvedor ..." value={area} onChange={e => setArea(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                        <Button variant="primary" onClick={submitAlterar}>Salvar</Button>
                        </Modal.Footer>
                    </Modal>
                    
                </div>
            </div>
        </div>
    )
}

export default ConsultarUsuarioPage;
