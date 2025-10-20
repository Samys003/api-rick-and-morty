'use strict'

 async function preExibicao() {
    const url = `https://rickandmortyapi.com/api/character/`

    

    const response = await fetch(url)
    const characters = await response.json()
    
    
     return characters.results
    

    
}

 async function estilodasImagens(){
    const imagens = document.getElementById('imagens')
    const cards = document.getElementById('cards')
    const personagens = await preExibicao()

   
    const limited = personagens.slice(0,8)
  
    limited.forEach(function(personagem){
        const imagem = document.createElement('img')
        const nome = document.createElement('p')
        const card = document.createElement('div')

          card.onclick = function(){
            detalhes(personagem.id)
        }
        

        imagem.src = personagem.image
        nome.textContent = personagem.name 

      

        card.appendChild(imagem)
        card.appendChild(nome)
      
        card.classList.add('card')
        
        cards.appendChild(card)
        
      
     

    })  

}

async function detalhes(id) {

    window.location.href = `./paginas/detalhes.html?personagemId=${id}`
    
}

async function funcaoInput() {
    const input = document.getElementById('input')
    const inputSugestion =  document.getElementById('input-sugestion')

    input.addEventListener('input', async (e) => {
        const termo = e.target.value.trim()

        const urlBuscaNome = `https://rickandmortyapi.com/api/character/?name=${termo}`;
    

        const response = await fetch(urlBuscaNome)
        const data = await response.json()

        exibirSugestoes(data.results , inputSugestion)


    })
}

function exibirSugestoes (personagem, contemSugestao) {
    contemSugestao.innerHTML = '';

    personagem.forEach(function(personagem){
        const item = document.createElement('div')
        item.classList.add('sugestao-item')
    
    item.innerHTML =`
        <img src="${personagem.image}" alt="${personagem.name}">
        <span>${personagem.name}</span>`

    item.addEventListener('click' , () => {
        detalhes(personagem.id)
    })

        contemSugestao.appendChild(item)

    })

    contemSugestao.style.display = 'block'
}

funcaoInput()

estilodasImagens()


