$(function () {  
 
    $('.reviews__slider').slick({ 
        prevArrow:'<button type="button" class="slick-prev"><img src="images/reviews-slider/arrow-left.svg" alt=""></button>', 
        nextArrow:'<button type="button" class="slick-next"><img src="images/reviews-slider/arrow-right.svg" alt=""></button>', 
         

      

        slidesToShow: 3,
        slidesToScroll: 1, 
    }) 

 

const counterUp = window.counterUp.default

const callback = entries => {
    entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 2000,
                delay: 16,
            })
            el.classList.add('is-visible')
        }
    })
}


const IO = new IntersectionObserver(callback, { threshold: 1 })
const IO1 = new IntersectionObserver(callback, { threshold: 1 })
const IO2 = new IntersectionObserver(callback, { threshold: 1 })
const IO3 = new IntersectionObserver(callback, { threshold: 1 })

const el = document.querySelector('.numbers__item-title')
const el1 = document.querySelector('.numbers__item-title1')
const el2 = document.querySelector('.numbers__item-title2')
const el3 = document.querySelector('.numbers__item-title3')
IO.observe(el)
IO1.observe(el1)
IO2.observe(el2)
IO3.observe(el3)

});