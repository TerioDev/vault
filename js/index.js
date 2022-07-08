gsap.registerPlugin(TextPlugin);

var countdown = gsap.timeline({});
    
countdown.fromTo("#demo", {opacity: 0}, {opacity: 1, duration: 6}, 1)