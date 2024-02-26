import '../assets/App.css'
import '../assets/section.css'

import me from "../assets/imgs/me.jpg"
import React from 'react';






function Section(){

    return (
        <section id="profile">
            <div className="section_pic-container">
                <img src={me} alt="Vinicius Foto de Perfil" />
            </div>
            <div className="section_text">
                <p className="section_text_p1">Olá Eu sou</p>
                <h1 className="title">ViniCius Souza</h1>
                <p className="section_text_p2">Front-end Developer</p>
                    <div className="btn-container">
                        <button
                        className='btn btn-color-2'
                        onClick={''}
                        >Baixar Curriculo</button>
                    </div>
                    <div className="btn-container">
                        <button
                        className='btn btn-color-1'
                        onClick={"  "}
                        >Baixar Curriculo</button>
                    </div>
               
                <div className="socials-container">
                    <img src='' 
                        alt="Meu Perfil no likendin"
                        className='icon'
                        onclick={''}
                    />
                    <img src='' 
                        alt="Meu Perfil Github"
                        className='icon'
                        onclick={''}
                    />

                </div>    
            </div>
        </section>

    )
}

export default Section