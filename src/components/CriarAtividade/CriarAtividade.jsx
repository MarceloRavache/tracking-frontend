import React, {useState} from "react";
import { Form, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const CriarAtividade = (props)=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nome, setNome] = useState("");
    const [atividade, setAtividade] = useState("curso");

    const submitCriar = (e) => {
        e.preventDefault();
        axios.post("https://apirest-tracking.herokuapp.com/api/"+atividade+"/"+(props.usuario.id).toString(),{"nome":nome})
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
            <Button variant="primary" onClick={handleShow} className="btn-usuario_Button">Adicionar Atividade</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Adicionar Atividade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="form.ControlInputNome">
                        <Form.Label>Nome da Atividade</Form.Label>
                        <Form.Control type="name" placegholder="Nome" onChange={e => setNome(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="form.ControlSelectAtividade">
                        <Form.Label>Tipo da Atividade</Form.Label>
                        <Form.Control as="select" onChange={e => setAtividade(e.target.value)}>
                            <option selected value="curso">Curso</option>
                            <option value="palestra">Palestra</option>
                            <option value="apresentacao">Apresentação</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                <Button variant="primary" onClick={submitCriar}>Salvar</Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default CriarAtividade;
