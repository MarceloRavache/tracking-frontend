import React from 'react';
import './style.css';

import ListarAtividade from '../../components/ListarAtividade/ListarAtividade';
import MenuVertical from '../../components/MenuVertical/MenuVertical';

const PesquisarAtividaePage = () =>{

    return(
        <div>
            <MenuVertical/>
            <div className="content-listarAtividadePage">
                <div className="content-listarAtividadePage_interno">
                    <h2>Pesquisar Atividade</h2>
                    <ListarAtividade/>
                </div>
            </div>
        </div>
    )
}

export default PesquisarAtividaePage;