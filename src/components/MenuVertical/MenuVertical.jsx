import React from 'react';
import './MenuVertical.css';


const MenuVertical = () =>{

    return(
        <div className="content-menu_superior">
            <div className="content-menu">
                <input type="checkbox" id="chec"/>
                <label for="chec">
                    <img src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png" className="img-menu_icon"/>
                </label>
                <nav>
                    <ul>
                        <li><a href="/"><img src="http://pixsector.com/cache/afb480a4/aveb8d3f1fac7a77e24f0.png" className="img-home_icon"/>Home</a></li>
                        <li><a href="/listarusuarios"><img src="https://i.pinimg.com/originals/d9/19/b6/d919b64c019c19a98efdc361ef81cf5e.png" className="img-listar_icon"/>Listar Usuarios</a></li>
                        <li><a href="/criarusuario"><img src="https://img.icons8.com/pastel-glyph/2x/create-new--v2.png" className="img-criar_icon"/>Criar Usuario</a></li>
                        <li><a href="/pesquisaratividade"><img src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" className="img-pesquisar_icon"/>Pesquisar Atividade</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MenuVertical;