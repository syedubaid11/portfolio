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
        onComplete: function() {
            // After the animation completes, set the visibility to hidden
            document.querySelector('.overlay').style.visibility = 'hidden';
        },
    
    },
    ease:'power4.inOut'

})

gsap.fromTo('.hero',2,{
    opacity:0,
    y:-10
},{opacity:1,
    y:0,
    ease:"power2.out",
    delay:1.4
})

gsap.fromTo('.bar-text',
{opacity:1},{ opacity:0,duration:3.2
    
})


//cross animations
ScrollTrigger.create({
    trigger:".cross",
    start:'top center',
    pin:true,
    endTrigger:'.end-animation',
    end:'bottom bottom',
    pinSpacing:false,
    

})


ScrollTrigger.create({
    trigger:".cross",
    start:'top center',
    endTrigger:'.end-animation',
    end:'bottom bottom',
    onUpdate:(self)=>{
        const rotation=self.progress *360;
        gsap.to(".cross",{rotation})
    }
})


ScrollTrigger.create({
    trigger:".white-text-container",
    start:"top 50%",
    end:"bottom bottom",
    scrub:1,
    onUpdate:(self)=>{
        console.log('updating')
        const scale=1+ 12 * self.progress;
        gsap.to(".white-text-container",{
            scale:scale,
            ease:'none',
            duration:0
        })
    }
})