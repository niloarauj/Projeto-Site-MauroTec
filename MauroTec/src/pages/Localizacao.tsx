import './Localizacao.css'

function Localizacao(){
    return(
        <div className="localizacaoMainDiv">
            <p className='titulo'>Localização</p>
            <p className="textoLocalizacao">Estamos bem localizados no Bonsucesso, na Rua André Rebouças, número 110.<br></br>
            (próximo ao Center Box do João XXIII, Avenida Perimetral e a 10 minutos do North Shopping Jóquei)</p>
            <div className='mapaLoc'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.164154268505!2d-38.59192642424648!3d-3.7744372961994292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74d35a9c204f3%3A0x6188ca2236aa3e5!2sMAURO%20TEC%20-%20ASSIST%C3%8ANCIA%20T%C3%89CNICA%20DE%20INFORM%C3%81TICA!5e0!3m2!1spt-BR!2sbr!4v1740599421243!5m2!1spt-BR!2sbr"  ></iframe>
            </div>
            
        </div>
    )
}

export default Localizacao