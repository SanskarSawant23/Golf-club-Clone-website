gsap.to("#nav-bar",{
    backgroundColor:"#000",
    height: 110,
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav-bar",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top - 11%",
        scrub:true

    }

  
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top - 50%",
        end:"top -100%",
        scrub: 2

    }

})

