import gsap, { Power4 } from "gsap"

export const humMenu = gsap.to('.header__hum', {
    duration: .5,
    rotate: 1080,
    ease: Power4.easeInOut,
})

export const toggleHumNav = () => {
    const nav = document.querySelector('.hum-nav')
    nav.classList.toggle('active')
    const hum = document.querySelector('.header__hum')
    hum.classList.toggle('active')
}