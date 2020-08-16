import React from "react";
import { Form } from 'react-bootstrap';

const ConsultarAtividade = ()=>{
    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="name" placegholder="Nome"></Form.Control>
                </Form.Group>
                
            </Form>
        </div>
    )
}

export default ConsultarAtividade;
