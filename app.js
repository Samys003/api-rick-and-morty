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

        imagem.src = personagem.image
        nome.textContent = personagem.name

        card.appendChild(imagem)
        card.appendChild(nome)
        card.classList.add('card')
        
        cards.appendChild(card)
        
       
     

    })  

}

estilodasImagens()

