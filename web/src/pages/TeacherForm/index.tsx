import React from 'react'
import PageHeader from '../../components/PageHeader'

import './styles.css'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
        <PageHeader 
        title="Que incrivel que voce quer dar aulas."
        description= "O primeiro passo e preencher o formulario de inscricao."
        />
        

        <main>
            <fieldset>
                <legend>Seus dados</legend>

                <Input name="name" label="Nome completo" />
                <Input name="avatar" label="Avatar" />
                <Input name="whatsapp" label="WhatsApp" />

            </fieldset>

            <fieldset>
                <legend>Sobre a aula</legend>

                <Input name="subject" label="subject" />
                <Input name="cost" label="Custo da sua hora por aula" />

            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante! <br/>
                    Preencha todos os dados
                
                </p>
                <button type="button">
                    Salvar cadastro
                </button>
            </footer>
        </main>
        </div>
    )
}

export default TeacherForm