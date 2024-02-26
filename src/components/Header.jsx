import React from 'react';
import '../assets/App.css'


function Header(){
    return(

        <nav id="desktop-nav">
            <div className="logo"><p>Vinicius Kener Souza</p></div>
            <div>
                <ul className="nav-links">
                    <li><a href="#about">Home</a></li>
                    <li><a href="#experience">Experiencias</a></li>
                    <li><a href="#project">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;