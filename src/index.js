import $ from "jquery";
import gsap from "gsap";


console.log('start');


$('body').css('background-color' , 'red');
gsap.to('.box' , {
     x: 300,
     y: 700,
     duration : .5,
     rotation : 270,
     scale: 2
})
