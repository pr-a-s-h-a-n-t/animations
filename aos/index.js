let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".cards",
    pin: true,
    pinSpacing: true,
    markers: true,
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "+=1000", // end after scrolling 1000px beyond the start
    scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  }
});

tl.from(".card1", {
  yPercent: 100,
  opacity: 0
});
tl.from(".card2", {
  yPercent: 200,
  opacity: 0
});
tl.from(".card3", {
  yPercent: 200,
  opacity: 0
});