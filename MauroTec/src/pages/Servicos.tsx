import './Servicos.css'
import acessoriosTv from '../assets/images/imagensServicos/acessoriosTv.png'
import manutencaoImpressora from '../assets/images/imagensServicos/manutencaoImpressora.jpg'
import manutencaoComputadoresServicos from '../assets/images/imagensServicos/manutencaoServicos.jpg'
import manutencaoTVs from '../assets/images/imagensServicos/manutencaoTVServicos.jpg'
import performanceServicos from '../assets/images/imagensServicos/performanceServicos.jpg'
import perifericosServicos from '../assets/images/imagensServicos/perifericosServicos.jpg'
import reparosServicos from '../assets/images/imagensServicos/reparosServicos.jpg'
import suprimentoImpressorasServicos from '../assets/images/imagensServicos/suprimentoImpressorasServicos.jpg'


const servicoItens = {
    "Notebooks e Computadores": [
        {title: 'Montagem de PCs Gamer - Upgrade SSD - Upgrade Memória RAM', description: 'Performance', image:performanceServicos },
        {title: 'Limpeza interna de componentes - Aplicação de Pasta Termica', description: 'Manutenções Preventivas', image: manutencaoComputadoresServicos },
        {title: 'Mouses - Teclados - Headphones - Mousepads', description: 'Periféricos de Alta Qualidade', image: perifericosServicos},
        {title: 'Troca de Tela - Reparo de Carcaças - Troca de Teclado - Formatação', description: 'Reparos (Corretivas)', image: reparosServicos},
    ],
    "Impressoras": [
        {title: 'Cabeça de Impressão - Recarga de Cartuchos - Instalação de Bulk Ink', description: 'Manutenção', image: manutencaoImpressora},
        {title: 'Tintas - Cabos - Resma de Papel', description: 'Suprimentos', image: suprimentoImpressorasServicos},
    ],
    "Smart TVs": [
        {title: 'Reparo de placa - Sincronização de Canais', description: 'Manutenção', image: manutencaoTVs},
        {title: 'Controles remotos - Antenas Digitais - Suportes', description: 'Acessórios', image: acessoriosTv},
    ]
}

const Servicos: React.FC = () => {
    return(
        <div className="Servicos">
            <h1>TUDO O QUE VOCÊ PRECISA EM ASSISTÊNCIA EM INFORMÁTICA</h1>
            <section id='secao-servicos'>
                {Object.entries(servicoItens).map(([category, items]) => 
                    <div 
                        key={category} 
                        className={`secao-categoria ${category === "Notebooks e Computadores" ? "categoria-especial" : ""}`}
                    >
                        <div className='fundo'>
                            <div className='retangulos1'>
                                <div className='retangulo-categoria'>
                                    <h2>{category}</h2>
                                </div>
                            </div>
                        
                            <div className="grid-container">
                                {items.map((item, index) => (
                                    <div key={index} className='grid-item'>
                                        <img src={item.image} alt="" className='imagem'/>
                                        <div className="texto-grid-item">
                                            <h3>{item.description}</h3>
                                            <p>{item.title}</p>
                                        </div>
                                    </div>   
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}


export default Servicos