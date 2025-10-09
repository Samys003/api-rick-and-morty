'use strict'



 async function preExibicao() {
    const url = `https://rickandmortyapi.com/api/character/`

    

    const response = await fetch(url)
    const characters = await response.json()
    
    
     return characters.results
    

    
}

 async function estilodasImagens(){
    const imagens = document.getElementById('imagens')
    const container = document.getElementById('container')
    const personagens = await preExibicao()

   
    const limited = personagens.slice(0,6)
  
    limited.forEach(function(personagem){
        const imagem = document.createElement('img')
        const nome = document.createElement('p')

        imagem.src = personagem.image
        nome.textContent = personagem.name
        
        container.appendChild(imagem)
        container.appendChild(nome)
       
     

    })  

}

estilodasImagens()

