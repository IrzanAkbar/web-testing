// parallax.js
const controller = new ScrollMagic.Controller();

// Portfolio Section
new ScrollMagic.Scene({
    triggerElement: "#portfolio",
    triggerHook: "onLeave" 
})
.setPin("#portfolio") 
.addTo(controller);

// Add more scenes for other sections if needed
// ... 