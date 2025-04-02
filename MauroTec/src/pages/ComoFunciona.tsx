import './ComoFunciona.css';

function ComoFunciona() {
  return (
    <div className="comoFuncionaMainDiv">
      <p className='titulo'>Como Funciona</p>
      
      <div className="conteudoComoFunciona">
        <div className="coletaEntregaDiv">
          <img
            src="/images/caminhão.png"
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



              <div className="numeroPC">1</div>
              <div className="fotoImagem">
                <div className="imagemnumero">
                  <div className="numeroCelular">1</div>
                  <img src="/images/iconediagnostico.png" alt=""  className='imagem-numero'/>
                </div>
                


                <p className='textoPasso'>Diagnóstico</p>

                <p className='fontDiagnosticos'>Solicite um orçamento<br></br> personalizado para o seu<br></br> equipamento</p>
                
                <p className='textosObservacaoExtra'><span className='textosObservacao'>Referência:</span>   3 dias</p>
              </div> 
          </div>

          <div className="passo">

            <div className="numeroPC">2</div>

            <div className="fotoImagem">
              <div className='imagemnumero'>
                <div className='numeroCelular'>2</div>
                <img src="/images/iconeOrcamento.png" alt="" className='imagem-numero'/>
              </div>
              

              <p className='textoPasso'>Orçamento</p>

              <p className='fontDiagnosticos'><span className='textosObservacao'>Após o Diagnóstico, <br></br></span> enviamos a você o orçamento<br></br> para avaliar e<br></br>autorizar a continuidade. </p>

            </div>
          </div>


          <div className="passo">


            <div className="numeroPC">3</div>
            <div className="fotoImagem">
              <div className="imagemnumero">
                <div className="numeroCelular">3</div>
                <img src="/images/iconeexecucao.png" alt=""  className='imagem-numero'/>
              </div>
              

              <p className='textoPasso'>Execução</p>

              <p className='fontDiagnosticos'><span className='textosObservacao'>Somente após<br></br>orçamento autorizado,</span><br></br>realizamos a execução.</p>

            </div>
          </div>

          <div className="passo">

            <div className="numeroPC">4</div>

              <div className="fotoImagem">
                <div className="imagemnumero">
                  <div className="numeroCelular">4</div>
                  <img src="/images/iconetestes.png" alt=""  className='imagem-numero'/>
                </div>
                

                <p className='textoPasso'>Testes</p>

                <p className='fontDiagnosticos'>Para garantir a melhor<br></br>experiência de uso com seu<br></br> equipamento, realizamos<br></br>rigorosos testes para garantir<br></br>que o reparo foi efetivo.</p>

            </div>

          </div>
        </div>
      </div>
      <p className = 'tituloPrazos'>PRAZOS</p>
      <div className="servicosExpressComoFunciona">
        <img src="/images/ícone_Express.png" alt="iconeExpress" className="iconeExpress" />
        
        <div className="centralExpress">

          <p className="textoExpress"> Serviços express em até 24h,</p>
          <p className="descricaoTextoExpress">mediante avaliação (Troca de Tela, Troca de Teclado, Upgrade SSD/Memória)</p>

          <p className="diasUteisExpress"> 7 dias úteis para demais serviços  </p>
          <p className="excecaoExpress">(Exceto conserto de placas de notebooks, não inclui o tempo para diagnóstico e a aprovação do orçamento pelo cliente)</p>

          <p className="atencaoExpress"> Atenção: Alterações e necessidades de prazos adicionais são expressamente comunicadas ao cliente.</p>

          

        </div>

      </div>
      <p className="tipoAceito">Aceitamos cartões, parcelamos em até 12x (com acréscimo da maquineta);<br></br>
      5% de desconto para pagamentos em Espécie ou Pix</p>



    </div>
  );
}

export default ComoFunciona;
