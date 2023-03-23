import gsap, { Power4 } from "gsap"

export const humMenu = gsap.to('.header__hum', {
    duration: 1,
    rotate: 1080,
    ease: Power4.easeInOut,
})