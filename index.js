gsap.registerPlugin(ScrollTrigger);

const lenis= new Lenis();

lenis.on('scroll',(e)=>{
    // console.log(e)
})

lenis.on('scroll',ScrollTrigger.update)

gsap.ticker.add((time)=>{
    lenis.raf(time*1000)
})



gsap.to('.hero',1,{
    delay:1.3,
    ease:'power3.inOut'
})

//bar animate
gsap.to('.bar',1.5,{
    delay:1.5,
    height:0,
    stagger:{
        amount:0.5,
    },
    ease:'power4.inOut'

})

gsap.fromTo('.bar-text',
{opacity:1},{ opacity:0,duration:3
    
})

ScrollTrigger.create({
    trigger:".cross",
    start:'top top',
    pin:true,
    endTrigger:'.end-animation',
    end:'bottom bottom',

})