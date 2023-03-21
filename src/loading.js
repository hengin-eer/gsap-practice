import gsap, { Power4 } from "gsap";

export const loading = () => {
    const tl = gsap.timeline()

    tl.from(".header__ttl", {
        delay: .5,
        duration: 1.5,
        position: "absolute",
        top: "50vh",
        left: "50vw",
        x: "-50%",
        y: "-50%",
        scale: 3,
        ease: Power4.easeInOut,
    })
    tl.from('.header__hum', {
        delay: 1,
        duration: 2,
        ease: "elastic.out(1, 0.2)",
        y: '100vh',
    })
}