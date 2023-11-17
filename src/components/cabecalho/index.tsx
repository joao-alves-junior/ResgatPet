import '../style/style.css'
import Login from '../../paginas/Login'

function Cabecalho_ini() {
    return(
        <div className='cont_cabecalho'>


            <div className='imagem'>
                <img src="/DogIcon.png" className='Ft_perfil'/>
            </div>
            

            <div className='cab_vazio'></div>


            <div className='bot_navegacao'>

                <div className='bt1'>
                    <button>Quem somos?</button>
                </div>

                <div className='bt2'>
                    <button>Como ajudar?</button>
                </div>

                <div className='bt3'>
                    <button>Cadastre-se</button>
                </div>

                <div className='bt4'>
                    <button >Faça login</button>
                </div>


            </div>
        




        </div>
    )
}

export default Cabecalho_ini