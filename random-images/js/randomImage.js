const imageTag = document.getElementsByClassName('image')[0]
const index = Math.floor(Math.random() * 9 + 1)
imageTag.src = `./images/${index}.jpg`
imageTag.alt = `Image number is ${index}`
