var nav = gsap.timeline({defaults: {}})

nav.fromTo('#body-wrapper', {opacity: 0}, {opacity: 1, duration: 1, ease: "power2.in"})
nav.fromTo('#navigation', {y: 120}, {y: 0, duration: 0.5, ease: "power2.out"}, "<50%")

function pageOut() {
    nav.fromTo('#body-wrapper', {opacity: 1}, {opacity: 0, duration: 1, ease: "power2.out"})
    nav.fromTo('#navigation', {y: 0}, {y: 120, duration: 0.5, ease: "power2.in"}, "<")
}