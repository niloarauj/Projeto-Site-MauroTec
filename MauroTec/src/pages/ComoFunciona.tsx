import './ComoFunciona.css';

function ComoFunciona() {
  return (
    <div className="comoFuncionaMainDiv">
      <h1>Como Funciona</h1>
      
      <div className="conteudoComoFunciona">
        <div className="coletaEntregaDiv">
          <img
            src="src/assets/images/caminhão.png"
            alt="caminhao"
            className="caminhao"
          />
          <div className="textoColetaEntregaDiv">
            <p className="coletaEntrega">Coleta e entrega do seu equipamento</p>
            <p className="ganheFreteGratis">
              (Ganhe frete grátis em toda Fortaleza a partir de R$ 300 em compras ou serviços)
            </p>
          </div>
        </div>


        <div className="passosContainer">
          <div className="passo">
            <div className="numero">1</div>
            <h3 className='textoPasso'>Diagnóstico</h3>
            <p>Solicite um orçamento personalizado para o seu equipamento</p>
          </div>

          <div className="passo">
            <div className="numero">2</div>
            <h3 className='textoPasso'>Orçamento</h3>
            <p>Aprovando o diagnóstico, ajustamos o prazo e forma de pagamento</p>
          </div>

          <div className="passo">
            <div className="numero">3</div>
            <h3 className='textoPasso'>Execução</h3>
            <p>Sem surpresas e com transparência, executamos o serviço com qualidade</p>
          </div>

          <div className="passo">
            <div className="numero">4</div>
            <h3 className='textoPasso'>Testes</h3>
            <p>Garantimos a qualidade final realizando testes completos no seu equipamento</p>
          </div>
        </div>

      </div>

      <div className="servicosExpressComoFunciona">
        <img src="src/assets/images/ícone_Express.png" alt="iconeExpress" className="iconeExpress" />
        
        <div className="centralExpress">
          <p className="textoExpress"> Serviços express em até 24h,</p>
          <p className="descricaoTextoExpress">mediante avaliação (Troca de Tela, Troca de Teclado, Upgrade SSD/Memória)</p>

          <p className="diasUteisExpress"> 7 dias úteis para demais serviços  </p>
          <p className="excecaoExpress">(Exceto conserto de placas de notebooks, não inclui o tempo para diagnóstico e a aprovação do orçamento pelo cliente)</p>

          <p className="atencaoExpress"> Atenção: Alterações e necessidades de prazos adicionais são expressamente comunicadas ao cliente.</p>

          <p className="tipoAceito">Aceitamos cartões, parcelamos em até 12x (com acréscimo da maquineta);<br></br>
          5% de desconto para pagamentos em Espécie ou Pix</p>

        </div>

      </div>



    </div>
  );
}

export default ComoFunciona;
