const btnCreate = document.querySelector('#btn-register')
const cards = document.querySelectorAll('#cards img') 

function vanish(){
    for(i=0;i<2;i++){
        cards[i].classList.toggle("invisible")
    }
    
}

btnCreate.addEventListener('click', vanish)

