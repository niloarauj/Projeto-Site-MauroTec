import './Consultoria.css'

function Consultoria(){
    return(
        <div className="consultoriaMainDiv">
            <h1>Consultoria para montagem de computador gamer</h1>
            <p className='subtituloConsultoria'>A MauroTEC oferece consultoria para a montagem de computadores<br></br> gamers. Ajudamos você a montar seu equipamento, da escolha das peças<br></br> até a montagem para garantir desempenho e custo-benefício.</p>
            <div className="conteudoConsultoria">
            <img src="/images/setup gamer.png" alt="SetupGamer" className='setupGamerConsultoria'/>
                <p className="descricaoConsultoria"> <b>01. Escolha de Componentes</b><br></br> Orientamos na seleção dos melhores componentes para sua necessidade e orçamento. <br></br><br></br><b>02. Orientação na Montagem </b><br></br>Fornecemos instruções e suporte técnico para a montagem da sua máquina, garantindo que todos os componentes funcionem em perfeita harmonia. Caso prefira, também realizamos a montagem. <br></br><br></br><b>03. Suporte Técnico </b><br></br>Não paramos na montagem, ajutamos você com os testes e ajustes para otimizar o desempenho do seu PC gamer. <br></br><br></br><b>Por que escolher a Mauro TEC:</b> <br></br><b>• Especialização:</b> Equipe experiente e atualizada com as últimas tendências. <br></br><b>• Qualidade:</b> Uso de componentes de alta qualidade para garantir durabilidade e desempenho. <br></br><b>• Suporte Completo:</b> Assistência em todas as etapas, desde a escolha dos componentes até a configuração final. <br></br><br></br>Entre em contato com a MauroTec para agendar sua consultoria e monte o seu PC dos sonhos com a nossa ajuda.</p>
               
            </div>
        </div>
    )

}

export default Consultoria