import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import CriarUsuarioPage from './pages/CriarUsuario/index';
import ConsultarUsuarioPage from './pages/ConsultarUsuario/index';
import ListarUsuarioPage from './pages/ListarUsuarios/index';
import PesquisarAtividadePage from './pages/PesquisarAtividade/index';
import NaoEncontradoPage from './pages/NaoEncontrado/index';
import Home from './pages/Home/index';

const Router = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/listarusuarios" component={ListarUsuarioPage}/>
                <Route path="/criarusuario" component={CriarUsuarioPage}/>
                <Route path="/consultarusuario/:id" component={ConsultarUsuarioPage}/>
                <Route path="/pesquisaratividade" component={PesquisarAtividadePage}/>
                <Route path="*" component={NaoEncontradoPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
