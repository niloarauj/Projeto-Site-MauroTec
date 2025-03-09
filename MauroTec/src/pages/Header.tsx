import './Header.css'

function Header(){

return(
    <div className='header'>
        <img src="src\assets\images\Logo1.png" alt="Imagem no React" className='logo'/>
        <nav className='nav-buttons'>
            <ul>
                <li className = "nav-button"><a href="#main-section">Início</a></li>
                <li className = "nav-button"><a href="#servicos-section">Serviços</a></li>
                <li className = "nav-button"><a href="#como-funciona-section">Como Funciona</a></li>
                <li className = "nav-button"><a href="#avaliacoes-section">Avaliações</a></li>
                <li className = "nav-button"><a href="#localizacao-section">Localização</a></li>
                <li className = "nav-button"><a href="#quemsomos-section">Quem Somos</a></li>
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