import React from "react";
import "./Servicos.css";
import acessoriosTv from '../assets/images/imagensServicos/acessoriosTv.png';
import manutencaoImpressora from '../assets/images/imagensServicos/manutencaoImpressora.jpg';
import manutencaoComputadoresServicos from '../assets/images/imagensServicos/manutencaoServicos.jpg';
import manutencaoTVs from '../assets/images/imagensServicos/manutencaoTVServicos.jpg';
import performanceServicos from '../assets/images/imagensServicos/performanceServicos.jpg';
import perifericosServicos from '../assets/images/imagensServicos/perifericosServicos.jpg';
import reparosServicos from '../assets/images/imagensServicos/reparosServicos.jpg';
import suprimentoImpressorasServicos from '../assets/images/imagensServicos/suprimentoImpressorasServicos.jpg';

const categories = [
  {
    title: "NOTEBOOKS E COMPUTADORES",
    items: [
      { title: "+ PERFORMANCE", description: "Montagem de PC Gamer - Upgrade SSD - Upgrade Memória RAM", image: performanceServicos },
      { title: "Manutenções Preventivas", description: "Limpeza interna de componentes - Aplicação de Pasta Térmica", image: manutencaoComputadoresServicos },
      { title: "Periféricos de Alta Qualidade", description: "Headphones - Mouses - Teclados - Mousepads", image: perifericosServicos },
      { title: "Reparos (Corretivas)", description: "Troca de Tela - Reparos de carcaças - Formatação", image: reparosServicos }
    ],
    
  },
  {
    title: "IMPRESSORAS",
    items: [
      { title: "Manutenção", description: "Cabeça de Impressão - Recarga de Cartuchos - Bulk Ink", image: manutencaoImpressora },
      { title: "Suprimentos", description: "Tinta - Cabos - Resmas de Papel", image: suprimentoImpressorasServicos }
    ],
    
  },
  {
    title: "SMART TVs",
    items: [
      { title: "Manutenção", description: "Reparo de placa - Sincronização de canais", image: manutencaoTVs },
      { title: "Acessórios", description: "Controles Remotos - Suportes", image: acessoriosTv }
    ],
    
  }
];

const Servicos: React.FC = () => {
  return (
    <div className="titulo">
      <h1>TUDO O QUE VOCÊ PRECISA EM ASSISTÊNCIA DE INFORMÁTICA</h1>
    
      <div className="catalog-grid">
        {/* NOTEBOOKS E COMPUTADORES */}
        <div className="single-category">
          <div className="category-box">
            <div className="retangulo-servicos">
              <h2 className="category-title">{categories[0].title}</h2>
            </div>
            <div className="category-items">
              {categories[0].items.map((item, i) => (
                <div key={i} className="item-box">
                  <img src={item.image} alt={item.title} className="item-image" />
                  <div className="items-info">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* IMPRESSORAS E SMART TVs */}
        <div className="stacked-categories">
          {categories.slice(1).map((category, index) => (
            <div key={index} className="category-box">
              <div className="retangulo-servicos">
                <h2 className="category-title">{category.title}</h2>
              </div>
              <div className="category-items">
                {category.items.map((item, i) => (
                  <div key={i} className="item-box">
                    <img src={item.image} alt={item.title} className="item-image" />
                    <div className="items-info">
                      <h3 className="item-title">{item.title}</h3>
                      <p className="item-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicos;
