let $carousel = document.getElementById('carousel')

let index = 0

function SetSlide() {
    // let $images = $carousel.children
    let $images = $carousel.querySelector('.images').children

    console.log($images)
    // index += 1
    // index = index + 2

    if (index >= $images.length) {
        index = 0
    } else if (index < 0) {
        index = $images.length - 1
    }

    for (let i = 0; i < $images.length; i++) {
        if (i == index) {
            $images[i].classList.remove('hidden')
        } else {
            $images[i].classList.add('hidden')
        }
    }

    // for (let $image of $images) {
    // }
}

function AdvanceSlide() {
    index++
    SetSlide()
    clearInterval(slideInterval)
    StartSlideshow()
}

function ReverseSlide() {
    index--
    SetSlide()
    clearInterval(slideInterval)
    StartSlideshow()
}

let slideInterval
function StartSlideshow() {
    slideInterval = setInterval(() => {
        index++
        SetSlide()
    }, 3000)
}

StartSlideshow()
