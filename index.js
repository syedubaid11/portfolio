gsap.registerPlugin(ScrollTrigger);

const lenis= new Lenis();

lenis.on('scroll',(e)=>{
    // console.log(e)
})

lenis.on('scroll',ScrollTrigger.update)

gsap.ticker.add((time)=>{
    lenis.raf(time*1000)
})

gsap.ticket.lagSmoothing(0);

//pin animation

const cross=document.querySelector('.cross');

gsap.to(cross,{
    scrollTrigger:{
        trigger:'.container-hero-2',
        start:'top top',
        end:'bottom bottom',
        scrub:true,
        pin:true
    },
    yPercent:100,
    ease:'none'
},console.log('works'))