import '../App.css'

function Header(){
    return(

        <nav id="dekstop-nav">
            <div className="logo">Vinicius Kener</div>
            <div>
                <ul className="nav-links">
                    <li className=""><a href="#about">Home</a></li>
                    <li className=""><a href="#experience">Experiencias</a></li>
                    <li className=""><a href="#project">Projetos</a></li>
                    <li className=""><a href="#contact">Contato</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header