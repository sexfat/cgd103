import $ from "jquery";
import gsap from "gsap";
import './css/style.css'; //css注入
import './css/header.css'; //css注入
import './css/footer.css'; //css注入

console.log('start');

// jquery
$('body').css('background-color' , '#333');

// gsap
gsap.set('.box' , {
     x : 300,
     y: 400


})
gsap.to('.box' , {
     //x: 300,
     //y: 700,
     duration : 2,
     rotation : 360,
     repeat: -1,
     scale: 3
})
