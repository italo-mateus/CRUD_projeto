'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Maria",
    email: "maria@gmail.com",
    celular: 123456,
    cidade: "Fortaleza"
}

//Função que entra no localStorange e transforma tudo em JSON
const getLocalStorange = () => JSON.parse(localStorage.getItem('db_client')) ?? []

//Função que transforma tudo em string dentro do LocalStorange
const setLocalStorange = () => localStorage.setItem("db_client", JSON.stringify(dbClient))

//Cadastrar cliente 
const createClient = (client) => {
    const dbClient = getLocalStorange(dbClient)
    dbClient.push(client)
    setLocalStorange(client)
}

//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)