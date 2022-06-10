var nav = gsap.timeline({defaults: {}})

nav.fromTo('#navigation', {y: 120}, {y: 0, delay: 0.2, duration: 0.5, ease: "power2.out"}, "<50%")

function navOut() {
    var nav = gsap.timeline({defaults: {}})
    nav.fromTo('#navigation', {y: 0}, {y: 120, duration: 0.5, ease: "power2.in"}, "<")
}