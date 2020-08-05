import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'
import Input from '../../components/Input'
import Select from '../../components/Select'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes sao os proffys disponiveis.">
            <form id="search-teachers">

            <Select 
                name="subject" 
                label="subject" 
                options ={[
                    {value: 'Artes', label: 'Artes'},
                    {value: 'Biologia', label: 'Biologia'},
                    {value: 'Ciencias', label: 'Ciencias'},
                    {value: 'Educacao FIsica', label: 'Educacao FIsica'},
                    {value: 'Geografia', label: 'Geografia'},
                    {value: 'Historia', label: 'Historia'},
                    {value: 'Matematica', label: 'Matematica'},
                    {value: 'Portugues', label: 'Portuguess'},
                    {value: 'Quimica', label: 'Quimica'},

                ]}
                />
                <Select 
                name="week_day" 
                label="Dia da semana" 
                options ={[
                    {value: '0', label: 'Domingo'},
                    {value: '1', label: 'Segunda-feira'},
                    {value: '2', label: 'Terça-feira'},
                    {value: '3', label: 'Quarta-feira'},
                    {value: '4', label: 'Quinta-feira'},
                    {value: '5', label: 'Sexta-feira'},
                    {value: '6', label: 'Sabado'},
                    

                ]}
                />
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