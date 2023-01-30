const inputElement = document.getElementsByClassName('input')[0]
const divElement = document.getElementsByClassName('ghost-div')[0]
inputElement.addEventListener('focus', () => {
    divElement.style.display = 'inline-block'
})
inputElement.addEventListener('blur', () => {
    divElement.style.display = 'none'
})
