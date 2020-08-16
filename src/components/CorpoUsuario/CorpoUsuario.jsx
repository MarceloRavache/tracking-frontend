import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const CorpoUsuario = (props)=>{
    return(
        <div>
            <tr>
                <td>
                    {props.usuario.nome}
                </td>
                <td>
                    <Link to={"/consultarusuario/"+props.usuario.id.toString()}><Button variant="primary">Consultar</Button></Link>
                </td>              
            </tr>
        </div>
    )
}

export default CorpoUsuario;