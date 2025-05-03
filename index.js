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
    end:'top center',
    pinSpacing:false,
    

})

//cross animation
ScrollTrigger.create({
    trigger:".cross",
    start:'top center',
    endTrigger:'.end-animation',
    end:'top center',
    onUpdate:(self)=>{
        const rotation=self.progress *360;
        gsap.to(".cross",{rotation})
    }
})

//cross animation becoming square
ScrollTrigger.create({
    trigger:".cross",
    start:"top center",
    endTrigger:".end-animation",
    end:"top center",
    onUpdate:(self)=>{
        const progress=self.progress;
        console.log(progress);//checking the progress
        const clipPath=`polygon(
            ${45 - 45*progress}% ${0+0*progress}%,
            ${55 + 45*progress}% ${0+0*progress}%,
            ${55+ 45*progress}% ${100-0*progress}%,
            ${45- 45* progress}% ${100-0 *progress}%    
        )`;
        gsap.to(".cross-1 , .cross-2",{
            clipPath:clipPath,
            duration:0,
            ease:"none"
        })
    }

})
//animation to bring the cross to the center
ScrollTrigger.create({
    trigger:".end-animation",
    start:'top center',
    end:'top top',
    scrub:1,
    onUpdate:(self)=>{
        const progress=self.progress;
        console.log(50+15*progress);
        const left = 50 + 450 * progress;        
        const scale=1 + 16 * self.progress;

        gsap.to('.cross',{
            left:`${left}`,
            scale:scale,
            scrub:1,
            ease:"none",
            duration:0

        })

    }
})


// ScrollTrigger.create({
//     trigger:".white-text-container",
//     start:"top 50%",
//     end:"bottom bottom",
//     scrub:1,
//     onUpdate:(self)=>{
//         console.log('updating')
//         const scale=1+ 12 * self.progress;
//         gsap.to(".cross",{
//             scale:scale,
//             ease:'none',
//             duration:0
//         })
//     }
// })


