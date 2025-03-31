import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src="/images/Logo1.png" alt="Logo" className="logo" />

      {/* Menu de navegação */}
      <nav className={`nav-buttons ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className="nav-button"><a href="#main-section" onClick={() => setMenuOpen(false)}>Início</a></li>
          <li className="nav-button"><a href="#servicos-section" onClick={() => setMenuOpen(false)}>Serviços</a></li>
          <li className="nav-button"><a href="#avaliacoes-section" onClick={() => setMenuOpen(false)}>Avaliações</a></li>
          <li className="nav-button"><a href="#localizacao-section" onClick={() => setMenuOpen(false)}>Localização</a></li>
          <li className="nav-button"><a href="#quemsomos-section" onClick={() => setMenuOpen(false)}>Quem Somos</a></li>
          <li className="nav-button"><a href="#blog-section" onClick={() => setMenuOpen(false)}>Blog</a></li>
        </ul>
      </nav>

      {/* Botão do WhatsApp */}
      <div className="whatsapp-container">
        <a href="https://wa.link/jmlqf0" target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-button">
            <img src="/images/whatsapp-icon.svg" alt="WhatsApp" className="whatsapp-icon" />
            (85) 98662-5606
          </button>
        </a>
      </div>

      {/* Botão do menu hambúrguer */}
      <div className="menu-button-div">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
    </div>
  );
}

export default Header;
