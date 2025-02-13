import './Header.css'

function Header(){

return(
    <div className='header'>
        <img src="src\assets\images\Logo1.png" alt="Imagem no React" className='logo'/>
        <nav className='nav-buttons'>
            <ul>
                <li className = "nav-button">Início</li>
                <li className = "nav-button">Serviços</li>
                <li className = "nav-button">Como Funciona</li>
                <li className = "nav-button">Avaliações</li>
                <li className = "nav-button">Localização</li>
                <li className = "nav-button">Quem Somos</li>
            </ul>
        </nav>
        <div className="whatsapp-container">
            <a href="https://wa.link/jmlqf0" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-button"> <img src="src/assets/images/whatsapp-icon.svg" alt="WhatsApp" className="whatsapp-icon" />(85) 98662-5606 </button>
            </a>
            
        </div>
    </div>
)
}

export default Header  