const aboutMe = document.querySelector('.fa-solid')
const description = document.querySelector('.active')
const jobTitle = document.querySelector('h2')

window.addEventListener('load', () => {
    setTimeout(
        animation, 
        1500)
})

const animation = () => {
    jobTitle.classList.remove('invisible')
    jobTitle.classList.add('type-letters')
}

aboutMe.addEventListener('click', () => {
    description.classList.toggle('active')
    description.classList.toggle('fade-in')
    aboutMe.classList.toggle('rotate')
})

aboutMe.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        description.classList.toggle('active')
        description.classList.toggle('fade-in')
        aboutMe.classList.toggle('rotate')
    }

})