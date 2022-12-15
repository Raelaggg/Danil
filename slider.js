const sliderLine = document.querySelector('.weOfferContent'),
      dots = document.querySelectorAll('.dot')

let position = 0,
    dotIndex = 0

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active')
    }
    dots[index].classList.add('active')
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = 94 * index
        sliderLine.style.left = -position + '%'
        thisSlide(index)
    })
})

