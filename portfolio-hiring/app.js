const aboutMe = document.querySelector('.fa-solid')
const description = document.querySelector('.active')

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