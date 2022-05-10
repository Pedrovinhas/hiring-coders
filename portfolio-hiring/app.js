const aboutMe = document.querySelector('.fa-solid')
const description = document.querySelector('.active')

aboutMe.addEventListener('click', () => {
    description.classList.toggle('active')
    description.classList.toggle('fade-in')
    aboutMe.classList.toggle('rotate')
})