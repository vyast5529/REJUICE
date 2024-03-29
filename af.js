gsap.registerPlugin(ScrollTrigger);
 
 // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
 
 const locoScroll = new LocomotiveScroll({
   el: document.querySelector("#main"),
   smooth: true,
   smoothMobile: true
 });
 // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
 locoScroll.on("scroll", ScrollTrigger.update);
 
 // tell ScrollTrigger to use these proxy methods for the ".data-scroll-container" element since Locomotive Scroll is hijacking things
 ScrollTrigger.scrollerProxy("#main", {
   scrollTop(value) {
     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
   },
   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
 });
 


let images = gsap.utils.toArray('.z-out')

images.forEach((item, index) => {

  let exptl = gsap.timeline({
    scrollTrigger:{
      trigger: item,
      start: "top 85%",
      end: "top 5%",
      scrub: 2,
      markers: true,
      scroller: '.data-scroll-container'
    }
  });
  exptl.from(item, {
    x: 100,
    opacity: 0,
    duration: 1
  });
  
});



 
 
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
 
 
 let mouse = document.querySelector("#mouse");
let p1 = document.querySelector("#page1");
let p2 = document.querySelector("#page2");
let p4 = document.querySelector("#page4");
function cursereffect(){
    p1.addEventListener("mousemove",function(details){
        mouse.style.left=details.x+"px";
        mouse.style.top=details.y+"px";
        
    })
    p2.addEventListener("mouseenter",function(){
        gsap.to(mouse,{
            scale:0,duration:1,
           opacity:0 
            
        })
    })
    p2.addEventListener("mouseleave",function(){
        gsap.to(mouse,{
            scale:1,
           opacity:1 
            
        })
    })
    
   
}
cursereffect();

  



let r = document.querySelector("h1")
gsap.from(r,{
    y:300,delay:2,

})
let m2 = document.querySelector("#c2");
let tk = document.querySelector("#tk");
tk.addEventListener("mouseenter",function(){
    gsap.to(m2,{
       scale:1,duration:1,opacity:1 
    })
    tk.addEventListener("mousemove",function(details){
        m2.style.top=details.y+"px";
        m2.style.left=details.x+"px"

    })
   
})
tk.addEventListener("mouseleave",function(){
    gsap.to(m2,{
        scale:0,duration:1,opacity:0
     })
})
let mama = document.querySelector("#mama");
let mnu = document.querySelector("#mnu");
mnu.addEventListener("mouseenter",function(){
    mama.style.left=0;
   

});
mnu.addEventListener("mouseleave",function(){
    mama.style.left=100+"%";
    setTimeout(function(){
        mama.style.left=-100+"%";
        mama.style.borderBottom=" transparent";

    },2000)
    setTimeout(function(){
        
        mama.style.borderBottom="2px solid white";

    },4000)
    
})

let cs = document.querySelector("#cont-shit");
let exp = document.querySelector("#exp-s");
let eng = document.querySelector("#eng-s");
let bf1 = document.querySelector("#bf1");
let bf2 = document.querySelector("#bf2");
cs.addEventListener("mouseenter",function(){
    bf1.style.left=0;
    bf2.style.left=0;
    bf1.style.transitionDuration="1s";
    bf2.style.transitionDuration="1s";


});
cs.addEventListener("mouseleave",function(){
    bf1.style.left=100+"%";
    bf2.style.left=100+"%";
    bf1.style.transitionDuration="1s";
    bf2.style.transitionDuration="1s";
    setTimeout(function(){
        bf1.style.left=-100+"%";
        bf2.style.left=-100+"%";
        bf1.style.borderBottom=" transparent";
        bf2.style.borderBottom=" transparent";

    },2000)
    setTimeout(function(){
        
        bf1.style.borderBottom="3px solid black";
        bf2.style.borderBottom="3px solid black";

    },4000)
});
let tl = gsap.timeline();
tl.from("#loader h3",{
    opacity:0,x:10+"vw",duration:1,stagger:0.3
})
tl.to("#loader h3",{
    opacity:0,duration:1,stagger:0.1,x:-10+"vw"
})
tl.to("#loader",{
   opacity:0,display:"none",duration:1,
})
tl.from("#page1-cont h1 span",{
   opacity:0, y:150,duration:1,stagger:0.1
})
let ank = document.querySelector("#team #cont #myt a");
ank.addEventListener("mouseenter",function(){
    ank.style.textdecoration.opacity="0";
}
);
let x = document.querySelector("#x");
let inst = document.querySelector("#insta");
let lind= document.querySelector("#LinkedIn");
let bek1 = document.querySelector("#x #bf1");
x.addEventListener("mouseenter",function(){
    bek1.style.left="0";
    bek1.style.transitionDuration="1s";
})
x.addEventListener("mouseleave",function(){
    bek1.style.left="100%";
    bek1.style.transitionDuration="1s";
    setTimeout(function(){
        bek1.style.left="-100%";

    },4000)
})
let bek2 = document.querySelector("#insta #bf2");
inst.addEventListener("mouseenter",function(){
    bek2.style.left="0";
    bek2.style.transitionDuration="1s";
})
inst.addEventListener("mouseleave",function(){
    bek2.style.left="100%";
    bek2.style.transitionDuration="1s";
    setTimeout(function(){
        bek2.style.left="-100%";

    },4000)
})
let bek3 = document.querySelector("#LinkedIn #bf3");
lind.addEventListener("mouseenter",function(){
    bek3.style.left="0";
    bek3.style.transitionDuration="1s";
})
lind.addEventListener("mouseleave",function(){
    bek3.style.left="100%";
    bek3.style.transitionDuration="1s";
    setTimeout(function(){
        bek3.style.left="-100%";

    },4000)
})
let hm = document.querySelector("#hm");
let wrk = document.querySelector("#wrk");
let abt = document.querySelector("#abt");
let sm = document.querySelector("#sm");
let cnt = document.querySelector("#cnt");
let bfu1 = document.querySelector("#hm #bfu1");
let bfu2 = document.querySelector("#wrk #bfu2");
let bfu3 = document.querySelector("#abt #bfu3");
let bfu4= document.querySelector("#sm #bfu4");
let bfu5 = document.querySelector("#cnt #bfu5");
hm.addEventListener("mouseenter",function(){
    bfu1.style.left="0";
    bfu1.style.transitionDuration="1s";
})
hm.addEventListener("mouseleave",function(){
    bfu1.style.left="100%";
    bfu1.style.transitionDuration="1s";
    setTimeout(function(){
        bfu1.style.left="-100%";

    },4000)
})
wrk.addEventListener("mouseenter",function(){
    bfu2.style.left="0";
    bfu2.style.transitionDuration="1s";
})
wrk.addEventListener("mouseleave",function(){
    bfu2.style.left="100%";
    bfu2.style.transitionDuration="1s";
    setTimeout(function(){
        bfu2.style.left="-100%";

    },4000)
})
abt.addEventListener("mouseenter",function(){
    bfu3.style.left="0";
    bfu3.style.transitionDuration="1s";
})
abt.addEventListener("mouseleave",function(){
    bfu3.style.left="100%";
    bfu3.style.transitionDuration="1s";
    setTimeout(function(){
        bfu3.style.left="-100%";

    },4000)
})
sm.addEventListener("mouseenter",function(){
    bfu4.style.left="0";
    bfu4.style.transitionDuration="1s";
})
sm.addEventListener("mouseleave",function(){
    bfu4.style.left="100%";
    bfu4.style.transitionDuration="1s";
    setTimeout(function(){
        bfu4.style.left="-100%";

    },4000)
})
cnt.addEventListener("mouseenter",function(){
    bfu5.style.left="0";
    bfu5.style.transitionDuration="1s";
})
cnt.addEventListener("mouseleave",function(){
    bfu5.style.left="100%";
    bfu5.style.transitionDuration="1s";
    setTimeout(function(){
        bfu5.style.left="-100%";

    },4000)
})
let bgm = document.querySelector("#bgm");
let bo1 = document.querySelector("#bo1");
bo1.addEventListener("mouseenter",function(){
    bgm.style.left="0";
    bgm.style.transitionDuration="1s";
})
bo1.addEventListener("mouseleave",function(){
    bgm.style.left="100%";
    bgm.style.transitionDuration="1s";
    setTimeout(function(){
        bgm.style.left="-100%";
        bgm.style.borderBottom="none"

    },4000)
    setTimeout(function(){
        
        bgm.style.borderBottom="1px solid #DDDAD1"

    },6000)

})
gsap.from("#page8 h1 span",{
   opacity:0,y:-110,duration:1,stagger:0.2,scrollTrigger:{
    trigger:"#page8 h1 span",scroller:"#main"
   },
})
gsap.from("#page2 #page2cont",{
    opacity:0,y:"10vw",duration:1.5,scrollTrigger:{ trigger:"#page2 #page2cont",scroller:"#main",
}
    


})
gsap.from("#page2 #p2nav-s1",{
    opacity:0,y:"2vw",duration:1.5,scrollTrigger:{ trigger:"#page2 #p2nav-s1"
    ,scroller:"#main",
}


})
gsap.from("#page2 #p2nav-s2",{
    opacity:0,y:"2vw",duration:1.5,scrollTrigger:{
        trigger: "#page2 #p2nav-s2",scroller:"#main"
    }
   
    


})
gsap.from("#page3 #page3-top",{
    opacity:0,y:"2vw",duration:1.5,scrollTrigger:{
        trigger:"#page3 #page3-top",scroller:"#main"

    }
    


})
gsap.from("#page4 #cont1",{
    opacity:0,y:"2vw",duration:1.5,scrollTrigger:{
        trigger:"#page4 #cont1",scroller:"#main"
    }
    


})
gsap.from("#page4 #cont2",{
    opacity:0,y:"10vw",duration:1.5,scrollTrigger:{
        trigger:"#page4 #cont2",scroller:"#main"
    }
    


})
gsap.from("#page6 #cont1",{
    opacity:0,y:"2vw",duration:1.5,scrollTrigger:{
        trigger:"#page6 #cont1",scroller:"#main"
    }
    


})
gsap.from("#page6 #cont2",{
    opacity:0,y:"10vw",duration:1.5,scrollTrigger:{
        trigger:"#page6 #cont2",scroller:"#main"
    }
    


})
gsap.from("#page7 #cont1",{
    opacity:0,y:"2vw",duration:1.5,scrollTrigger:{
        trigger:"#page7 #cont1",scroller:"#main"
    }
    


})
gsap.from("#page7 #team",{
    opacity:0,y:"10vw",duration:1.5,scrollTrigger:{
        trigger:"#page7 #team",scroller:"#main"
    }
    


})
gsap.to("#page7 #scroller #pic-cont",{
   left:"-200%",duration:50, repeat:-1,scrollTrigger:{
        trigger:"#page7 #scroller #pic-cont ",scroller:"#main"
    }
    


})