import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'
import Input from '../../components/Input'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes sao os proffys disponiveis.">
            <form id="search-teachers">

                <Input name="subject" label="Matéria"/>
                <Input name="week_day" label="Dia da semana"/>
                <Input type="time"name="time" label="Hora"/>

            </form>
            </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>

            </main>
        </div>
    )
}

export default TeacherList