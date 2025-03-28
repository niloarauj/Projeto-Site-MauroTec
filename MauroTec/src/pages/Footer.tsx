import './Footer.css'


function Footer(){
    
    return (
        <div className='footerContainer'>
            <div className='mainDivFooter'>
                <div className="logoRedesSociais">
                    <img src="/images/Logo1.png" alt="logo" className='logoMauroTec'/>
                    <div className="redesSociais">
                        <a href="https://www.instagram.com/maurotec.informatica/" target="_blank" rel="noopener noreferrer"><img src="/images/instagramPNG.png" alt="instagramIcon" className='logoInstagram'/></a>
                        <a href="https://api.whatsapp.com/send/?phone=5585986625606&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site.+Gostaria+de+fazer+um+or%C3%A7amento.&type=phone_number&a" target="_blank" rel="noopener noreferrer"><img src="/images/whatsappIcon.png" alt="whatsappIcon" className='logoWhatsApp' /></a>
                    </div>
                </div>
                
                <div className="subDivFooter">

                    <div className="divContatos">
                        <h2>CONTATO</h2>
                        <p className='paragrafo'>(85) 98662-5606</p>
                        <p className='paragrafo'>mt.informatica77@gmail.com</p>
                    </div>
                        
                    <div className="divEndereco">
                        <h2>ENDEREÇO</h2>
                        <p className='paragrafo'><b>Loja 1:</b> Rua Manoel Antônio Leite, 243 - Bonsucesso, Fortaleza – CE, 60545-300</p>
                        <p className='paragrafo'><b>Loja 2:</b> Rua André Rebouças, 110 - Bonsucesso, Fortaleza - CE, 60520-797</p>
                    </div>

                    <div className="divHorarioAtendimento">
                        <h2>HORÁRIO DE ATENDIMENTO</h2>
                        <p className='paragrafo'><b>Segunda à sexta:</b> 08:00 às 19:00</p>
                        <p className='paragrafo'><b>Sábado:</b> 08:00 às 18:00 </p>
                        <p className='paragrafo'><b> (Fechamos para almoço:</b> 12:30 às 14:30)</p>
                    </div>
                </div>
            </div>

            <div className="divDireitosReservados">
                <p className="direitosReservados">© 2025 - <b>Mauro Tec Informática</b>. Todos os direitos reservados.</p>
            </div>

        </div>        



    )
}

export default Footer