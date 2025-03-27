import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src="src/assets/images/Logo1.png" alt="Imagem no React" className="logo" />

      

      {/* Menu de navegação - Mostra/Esconde no mobile */}
      <nav className={`nav-buttons ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className="nav-button"><a href="#main-section">Início</a></li>
          <li className="nav-button"><a href="#servicos-section">Serviços</a></li>
          <li className="nav-button"><a href="#como-funciona-section">Como Funciona</a></li>
          <li className="nav-button"><a href="#avaliacoes-section">Avaliações</a></li>
          <li className="nav-button"><a href="#localizacao-section">Localização</a></li>
          <li className="nav-button"><a href="#quemsomos-section">Quem Somos</a></li>
        </ul>
      </nav>

      
      <div className="whatsapp-container">
        <a href="https://wa.link/jmlqf0" target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-button">
            <img src="src/assets/images/whatsapp-icon.svg" alt="WhatsApp" className="whatsapp-icon" />
            (85) 98662-5606
          </button>
        </a>
      </div>
      <div className="menu-button-div">
        {/* Botão do menu hamburguer - Só aparece no mobile */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
        </button>
      </div>
      
    </div>
  );
}

export default Header;
