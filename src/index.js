import gsap from "gsap"
import { loading } from "./loading"
import { hero } from "./hero"

window.onload = () => {
    document.body.classList.remove('active')
    loading()
    hero()
    setTimeout(() => {
        document.body.classList.add('active')
    }, 4000);
}