import gsap, { Power4 } from "gsap"

export const hero = () => {
    gsap.from('.hero__block1', {
        delay: 2,
        duration: 1.5,
        x: '100vw',
        ease: Power4.easeInOut,
    })
    gsap.from('.hero__block2', {
        delay: 2.4,
        duration: 1,
        x: '100vw',
        ease: Power4.easeInOut,
    })
    gsap.from('.hero__block3', {
        delay: 2.5,
        duration: 1,
        x: '100vw',
        ease: Power4.easeInOut,
    })
    gsap.from('.hero__block4', {
        delay: 2.6,
        duration: 1,
        x: '100vw',
        ease: Power4.easeInOut,
    })
    gsap.to('.header__ttl', {
        delay: 3.1,
        duration: 1,
        color: "white",
        ease: Power4.easeInOut,
    })

}