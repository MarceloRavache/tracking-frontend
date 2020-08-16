import React,{useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import axios from 'axios';


const CorpoPalestra = (props)=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nome, setNome] = useState(props.palestra.nome);

    const submitDeletar = (e) => {
        e.preventDefault();
        axios.delete("https://apirest-tracking.herokuapp.com/api/palestra/"+(props.palestra.id).toString())
            .then(res => {
                alert(res.data);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const submitEditar = (e) => {
        e.preventDefault();
        axios.post("https://apirest-tracking.herokuapp.com/api/palestra/editar",{"id":props.palestra.id,"nome":nome})
            .then(res => {
                alert(res.data);
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        <div>
            <tr>
                <td>{props.palestra.nome}</td>
                <td>
                    <Button variant="primary" onClick={handleShow} className="btn-atividade_Button">Editar Palestra</Button>
                    <Button variant="primary" onClick={submitDeletar} className="btn-atividade_Button">Deletar Palestra</Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Editar Palestra</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group controlId="form.ControlInputNome">
                                <Form.Label>Nome da Palestra: </Form.Label>
                                <Form.Control type="name" placegholder="Nome" value={nome} onChange={e => setNome(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                        <Button variant="primary" onClick={submitEditar}>Salvar</Button>
                        </Modal.Footer>
                    </Modal>
                </td>
            </tr>
        </div>
    )
}

export default CorpoPalestra;