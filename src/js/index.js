const buttons = document.querySelectorAll('.button');

const image = document.querySelectorAll('.image');
const text = document.querySelectorAll('.text');

buttons.forEach((button, indice) => {
    button.addEventListener('click', () => {

        const buttonSelected = document.querySelector('.selected');
        buttonSelected.classList.remove('selected');

        button.classList.add('selected');
       
        const imageSelected = document.querySelector('.selected');
        imageSelected.classList.remove('selected');
        
        const textSelected = document.querySelector('.selected');
        textSelected.classList.remove('selected');

        image[indice].classList.add('selected');
        text[indice].classList.add('selected');

    })
})
