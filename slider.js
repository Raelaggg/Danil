const sliderLine = document.querySelector('.weOfferSlides'),
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
        position = 100 * index
        sliderLine.style.left = -position + 'vw'
        thisSlide(index)
    })
})

const nextSlide = () => {
    if (position < (dots.length - 1) * 100) {
        position += 100
        dotIndex++
    } else {
        position = 0
        dotIndex = 0
    }
    sliderLine.style.left = -position + 'vw'
    thisSlide(dotIndex)
}

setInterval(() => {
    nextSlide()
}, 5000)

// Sidebar// 
function sideBar() {
    let navigations = document.querySelector(".nav"),
     x = document.getElementById("myLinks"),
     y = document.querySelector(".logoMobile"),
     open = document.querySelector('.openSideBar'),
     close = document.querySelector('.closeSideBar')
    if (x.style.display === "flex" ) {
      x.style.display = "none"
      y.style.display = "block"
      open.style.display = "flex"
      close.style.display = "none"
      navigations.style.justifyContent = "space-between"
    } else {
      x.style.display = "flex"
      y.style.display = "none"
      open.style.display = "none"
      close.style.display = "flex"
      navigations.style.justifyContent = "center"
    }
    if (x.style.width > 500) {
        x.style.display = "flex"
    }
  }


