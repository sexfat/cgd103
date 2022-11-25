// import $ from "jquery";
import gsap from "gsap";
import './css/style.css'; //css注入
import './css/footer.css'; //css注入
import './sass/style.scss' // sass 

console.log('start');

// jquery
$('body').css('background-color' , '#333');

// gsap
gsap.set('.box' , {
     x : 300,
     y: 400


})
const tl = gsap.timeline();
tl.to('.box' , {
     //x: 300,
     //y: 700,
     duration : 2,
     rotation : 360,
     scale: 3
}).to('.box' , {
     x: 700,
     y: 500,
     backgroundColor : '#f20'
})
