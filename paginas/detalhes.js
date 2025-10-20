'use strict'

async function detalhes() {

    const url = new URLSearchParams(window.location.search)

    const personagemId = url.get('personagemId')

    const urlAPI = `https://rickandmortyapi.com/api/character/${personagemId}`

    const response = await fetch(urlAPI);
    const personagem = await response.json();

    return personagem


}

async function detalhesPersonagem() {
    const main = document.getElementById('main')
    const personagem = await detalhes()


    const div = document.createElement('div')
    const imagem = document.createElement('img')
    const info = document.createElement('div')

    info.id = 'info'
    imagem.id = 'imagem'
    div.id = 'div-personagem'

    imagem.src = personagem.image
    info.innerHTML = `
        <h2>${personagem.name}</h2>
        <ul>Status: ${personagem.status}</ul>
        <ul>Espécie: ${personagem.species}</ul>
        <ul>Gênero: ${personagem.gender}</ul>
        <ul>Origem: ${personagem.origin.name}</ul>`



    div.appendChild(imagem)
    div.appendChild(info)

    main.appendChild(div)
}

async function funcaoInput() {
    const input = document.getElementById('input')
    const inputSugestion = document.getElementById('input-sugestion')

    input.addEventListener('input', async (e) => {
        const termo = e.target.value.trim()

        const urlBuscaNome = `https://rickandmortyapi.com/api/character/?name=${termo}`;


        const response = await fetch(urlBuscaNome)
        const data = await response.json()

        exibirSugestoes(data.results, inputSugestion)


    })
}

function exibirSugestoes(personagem, contemSugestao) {
    contemSugestao.innerHTML = '';

    personagem.forEach(function (personagem) {
        const item = document.createElement('div')
        item.classList.add('sugestao-item')

        item.innerHTML = `
        <img src="${personagem.image}" alt="${personagem.name}">
        <span>${personagem.name}</span>`

        item.addEventListener('click', () => {  
            window.location.href = `detalhes.html?personagemId=${personagem.id}`
        })

        contemSugestao.appendChild(item)

    })

    contemSugestao.style.display = 'block'
}

funcaoInput()





document.addEventListener('DOMContentLoaded', detalhesPersonagem);



