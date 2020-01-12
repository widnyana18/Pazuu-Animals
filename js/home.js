var ctrl = new ScrollMagic.Controller();
var tl1 = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();


tl1.to($("#e"), 2, {
  xPercent: -60, 
  yPercent: -30, 
  ease: Linear.easeNone
});

tl2.to($(".head"), 2, {
  xPercent: 20, 
  yPercent: -30,
  scale: .5,   
  ease: Linear.easeNone
});

tl3.to($(".tree"), 1, {yPercent: -70, ease: Linear.easeNone});

tl4.to($(".animal"), 1, { 
  opacity: 0, 
  scale: 2,
  ease: Linear.easeNone
});

var scene = new ScrollMagic.Scene({
    triggerElement: ".content",
    triggerHook: 0,
    duration: "80%"
  })
    .setTween(tl1)
    .addTo(ctrl);

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".content",
  triggerHook: 0,
  duration: "100%"
})
  .setTween(tl2)
  .addTo(ctrl);    

var scene3 = new ScrollMagic.Scene({
  triggerElement: ".content",
  triggerHook: 0,
  duration: "100%"
})
  .setTween(tl3)
  .addTo(ctrl); 

var scene4 = new ScrollMagic.Scene({
  triggerElement: ".content",
  triggerHook: 0,
  duration: "100%"
})
  .setTween(tl4)
  .addTo(ctrl); 