import gsap, { Linear, Power4 } from "gsap"
import { loading } from "./loading"
import { hero } from "./hero"
import { humMenu, toggleHumNav } from "./humMenu"
import ScrollTrigger from "gsap/ScrollTrigger"

window.onload = () => {
    loading()
    hero()
    subTtl()
    setTimeout(() => {
        document.body.classList.add('active')
    }, 4000);
}

gsap.registerPlugin(ScrollTrigger)

gsap.from('.rabit1', {
    scrollTrigger: {
        trigger: '.rabit1',
        start: 'top 75%',
        toggleActions: 'restart none none none'
    },
    duration: 1.5,
    x: -100,
    rotate: -360,
    opacity: 0,
    ease: Power4.easeInOut,
})
gsap.from('.rabit2', {
    scrollTrigger: {
        trigger: '.rabit2',
        start: 'top 75%',
        toggleActions: 'restart none none none'
    },
    duration: 1.5,
    x: 100,
    rotate: 360,
    opacity: 0,
    ease: Linear,
})

// Colo-Colo
gsap.set('.rabit3', {
    rotate: -10,
})
gsap.to('.rabit3', {
    duration: .5,
    rotate: 10,
    repeat: -1,
    yoyo: true,
    ease: Power4.easeInOut,
})

// Sub title
const subTtl = () => {
    gsap.from('.header__subttl', {
        delay: 3.5,
        duration: 1,
        x: -20,
        opacity: 0,
        ease: Linear,
    })
}

// hum-menu
let hum = document.querySelector('.header__hum')

hum.addEventListener('click', () => {
    humMenu.restart()
    toggleHumNav()
})