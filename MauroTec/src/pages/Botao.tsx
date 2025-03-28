import './Botao.css'

function Botao(){
    return(

        <div className="botaoMainDiv">

            <button className="buttonParado">
            <a href="https://api.whatsapp.com/send/?phone=5585986625606&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site.+Gostaria+de+fazer+um+or%C3%A7amento.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">

                <div className="dentroDoButton">
                        <img src="/images/whatsapp-icon.svg" alt="zap" className='iconeZap'/>
                </div>
            </a>


            </button>

        </div>

    )
}

export default Botao