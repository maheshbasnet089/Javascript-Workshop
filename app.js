const h1 = document.querySelector('.helloworld')
const button = document.getElementsByTagName('button')[0]

button.addEventListener('click',function(){
    h1.textContent = "Bye world"
    h1.style.color = "red"
    let newParagraph = document.createElement('p')
    newParagraph.textContent = "hahaha"
   document.body.appendChild(newParagraph)
})

