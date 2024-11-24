gsap.registerPlugin(ScrollTrigger);

const lenis= new Lenis();

lenis.on('scroll',(e)=>{
    // console.log(e)
})

lenis.on('scroll',ScrollTrigger.update)

gsap.ticker.add((time)=>{
    lenis.raf(time*1000)
})


//pin animation

const cross=document.querySelector('.cross');

gsap.to(cross,{
    
    scrollTrigger:{
        trigger:'.container-hero-2',
        start:'top top',
        end:'bottom bottom',
        scrub:true,
        pin:true,
        markers:true
    },
    yPercent:100,
    ease:'none'
})
const hero2=document.querySelector('.hero-2');

gsap.to(hero2,{
    visibility:"hidden"
})


window.onload=function(){
    const hero=document.querySelector('.hero')
    gsap.to(hero,{
        delay:2,
        duration:0.7,
        width:'100%',
        height:'100vh',
        fontSize:'200px',
        ease:'power3.out',
        backgroundImage:"url(./images/StockSnap_UV4PIZ1DEK.jpg)",
        display:'block'
    })


    gsap.to(hero2,{
        delay:2,
        duration:1,
        visibility:"visible"
    })
}


gsap.to('.bar',1.5,{
    delay:1.5,
    height:0,
    stagger:{
        amount:0.5,
    },
    ease:'power4.inOut'

})

