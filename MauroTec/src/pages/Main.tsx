import './Main.css'

function Main(){

    return(
        <div className='mainDiv'>
            <section id='inicio' className='section'>
                <div className="colunaInicio">

                    <p className='tituloInicio'>Assistência técnica multimarcas em Fortaleza</p>
                    <p className='subtituloInicio'>MANTENHA SEU EQUIPAMENTO <br/> FUNCIONANDO SEMPRE: CONSERTO E <br/>MANUTENÇÃO EXPRESS</p>
                    <p className='descricaoInicio'>A maneira mais rápida, segura e eficiente de ter seu <br/>equipamento funcionando novamente.</p>
                    
                    
                    <div className='retangulos-eletronicos'>
                        <div className="retangulo">NOTEBOOKS</div>
                        <div className="retangulo">IMPRESSORAS</div>
                        <div className="retangulo">COMPUTADORES</div>
                        <div className="retangulo">SMART TVs</div>
                    </div>
                    <a href="https://wa.link/jmlqf0" target="_blank" rel="noopener noreferrer">
                        <div className='divWhatsInicio'>
                            <button className='botaoWhatsInicio'> <img src="src/assets/images/whatsapp-icon.svg" alt="whatsapp"  className='iconWhatsappInicio'/>Solicite seu orçamento agora </button>
                            <img src="src/assets/images/marcaPcNote.png" alt="marcasPcsNotebooks" className='marcasPcsNotebooks' />
                        </div>
                    </a>

                </div>
                <img src="src/assets/images/equipamentosInicio.png" alt="Equipamentos" className ='imgEquipamentos'/>
                {/* <h2 className='tituloInicio'>Assistência técnica multimarcas em Fortaleza</h2> */}
                

            </section>


        </div>

    )
}

export default Main