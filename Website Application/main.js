$(document).ready(function(){
$('#icon').click(function(){
    $('ul').toggleClass('show');
});
});

const tl = gsap.timeline({default: {ease: "power1.out"}})

tl.to(".text", {y:"0%", duration: 1, stagger: 0.25});
tl.to(".slider", {y: "-100%", duration: 1.5, delay:0.5});
tl.to(".intro", {y: "-100%", duration: 1}, "-=1");
tl.fromTo("nav",{opacity: 0},{opacity: 1, duration: 1});
tl.fromTo(".big-text",{opacity: 0},{opacity: 1, duration: 1}, "-=1");
tl.fromTo(".small-text",{opacity: 0},{opacity: 1, duration: 1}, "-=1");
tl.fromTo(".cta",{opacity: 0},{opacity: 1, duration: 1}, "-=1");

const boxes=document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop <triggerBottom){
            box.classList.add('show');
        } else{
            box.classList.remove('show');
        }
        
    });
}