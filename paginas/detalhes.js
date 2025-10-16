'use strict'

async function detalhes(){

    const url = new URLSearchParams(window.location.search)

    const personagemId = url.get('personagemId')

    const urlAPI = `https://rickandmortyapi.com/api/character/${personagemId}`

    const response = await fetch(urlAPI);
    const personagem = await response.json();

    return personagem

    
}

async function detalhesPersonagem () {
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
        <p>Status: ${personagem.status}</p>
        <p>Espécie: ${personagem.species}</p>
        <p>Gênero: ${personagem.gender}</p>
        <p>Origem: ${personagem.origin.name}</p>`

        
        
        div.appendChild(imagem)
        div.appendChild(info)
        
       
        main.appendChild(div)
        


    


    
}


document.addEventListener('DOMContentLoaded', detalhesPersonagem);



