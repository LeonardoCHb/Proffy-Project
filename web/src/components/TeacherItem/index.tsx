import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
                 <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/52171813?s=460&u=ec20e0d8cca41b8a516ebabcd36849863b178adc&v=4" alt="Gol D Roger"/>
                        <div>
                            <strong>Gol D Roger</strong>
                            <span>Pirataria</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de quimica avançada.
                        <br/>
                        Apaixonado por explodir coisas em laboratorio e por mduar a vida das pesoas atraves de experiencias. Mais de 200.000 pessoas ja passaram por umas das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preco/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem