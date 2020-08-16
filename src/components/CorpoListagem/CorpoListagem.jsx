import React from 'react';
import {Table} from 'react-bootstrap';

import CorpoUsuario from '../CorpoUsuario/CorpoUsuario';

const CorpoListagem = (props)=>{
    const usuario = props.usuario
    const usuarios = usuario.map(user =>{
        return <CorpoUsuario usuario={user}/>
    })

    return(
        <div>
            <div>
                <Table responsive>
                    <thead>
                        <th>Nome</th>
                        <th>#</th>
                    </thead>
                    <tbody>
                        {usuarios}
                    </tbody></Table>
            </div>
        </div>
    )
}

export default CorpoListagem;
