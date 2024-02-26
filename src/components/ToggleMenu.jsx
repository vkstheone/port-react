import React from 'react';
import '../assets/App.css'



function ToggleMenu(){

    function toggleMenus(){
        const menu = document.querySelector(".menu-links")
        const icon = document.querySelector(".toggle-icon")
        menu.classList.toggle("open");
        icon.classList.toggle("open");

    }

    return (
        <div>
         <nav id="toggle-nav">
            <div className="logo1">Vinicius Souza</div>
            <div className="toggle-menu" >
                  <div className="toggle-icon " onClick={''}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>  
                </div>
            <div className="menu-links">
                    <li><a href="#about"  onClick={''}>Home</a></li>
                    <li><a href="#experience" onClick={''}>Experiencias</a></li>
                    <li><a href="#project" onClick={''}>Projetos</a></li>
                    <li><a href="#contact" onClick={''}>Contato</a></li>    
                
            </div>
            
            
         </nav>
        </div>
    )
}

export default ToggleMenu;