import React from 'react';
import './style.css'

import ListarUsuario from '../../components/ListarUsuario/ListarUsuario';
import MenuVertical from '../../components/MenuVertical/MenuVertical';

const ListarUsuariosPage = ()=>{
    return(
        <div>
            <MenuVertical/>
            <div className="content-listarUsuario">
                <ListarUsuario/>
            </div>
        </div>
    )
}

export default ListarUsuariosPage;
