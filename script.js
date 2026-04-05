const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function mousefollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

function page1animation(){
    var tl = gsap.timeline();

tl.from("#navbar",{
    y : '-10',
    opacity : 0,
    duration : 1.5,
    ease : Expo.easeInOnt
})

tl.to(".boundingelem",{
    y : '0',
    duration : 0.5,
    ease : Expo.easeInOnt,
    delay : -1,
    stagger : .1
})

tl.to(".boundingelem1",{
    y:'0',
    duration:0.5,
    ease : Expo.easeInOnt,
    delay : -0.5,
    stagger : .1
})


tl.from("#content4",{
    y : '-10',
    opacity : 0,
    duration : -0.5,
    ease : Expo.easeInOnt
    
})

tl.from("#subscribe",{
    y : '10',
    opacity : 0,
    duration : 0.5,
    ease : Expo.easeInOnt,
    scrollTrigger : "#subscribe",
})
}



mousefollower();
page1animation();



    document.querySelectorAll(".elem").forEach(function(elem){
        var rotate = 0;
        var diff = 0;
        elem.addEventListener("mousemove",function(dets){
            const img = elem.querySelector("img");
            const elemRect = elem.getBoundingClientRect();

            diff = dets.clientx - rotate;
            rotate = dets.clientx;
            
            
            gsap.to(img,{
                opacity : 1,
                top : dets.clientY - elemRect.top - (img.offsetHeight / 2),
                left : dets.clientX - elemRect.left - (img.offsetWidth / 2),
                rotate : gsap.utils.clamp(-20,20,diff),
                paddingleft :100,
                duration: 0.3,
                ease : "expo.out"
            }) ;
        });
        
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.querySelector("img"),{
                opacity : 0,
                paddingleft: 0,
                duration:0.3,
                ease : "expo.out"
            });
        });
    });
    
