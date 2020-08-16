import React from "react";
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './style.css';

import MenuVertical from '../../components/MenuVertical/MenuVertical';

const Home = ()=>{
    return(
        <div>
            <MenuVertical/>
            <div className="content">
                <div className="left-layout_img">
                    <img src={require('../../public/imgs/job.png')}/>
                </div>
                <div className="right-layout_Links">
                    <h1 className="h1-titulo">Insight Tracking Platform</h1>
                    <Link to="/listarusuarios"><Button variant="primary" className="btn-home_Button">Listar Usuarios</Button></Link>
                    <Link to="/criarusuario"><Button variant="primary" className="btn-home_Button">Criar Usuario</Button></Link>
                    <Link to="/pesquisaratividade"><Button variant="primary" className="btn-home_Button">Pesquisar Atividade</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
