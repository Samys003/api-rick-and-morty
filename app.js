'use strict'



 async function preExibicao() {
    const url = `https://rickandmortyapi.com/api/character/`

    

    const response = await fetch(url)
    const characters = await response.json()
     
    return characters

    
}

 function estilodasImagens(){

    const container = document.getElementById('imagens')
    const imagem = document.createElement('img')

    container.appendChild(imagem)



}

preExibicao()

