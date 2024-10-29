const parallex=document.querySelectorAll(".web");

// let -> used to create a variable 
let xValue=0, yValue=0;

// to remove those scrollbar 
document.documentElement.style.overflow = 'hidden';

window.addEventListener("mousemove",(e)=>{
    xValue=e.clientX-window.innerWidth/2;
    yValue=e.clientY-window.innerHeight/2;

    // console.log(xValue,yValue);
    // => -> a shorter way to write a function 
    
    parallex.forEach((el) => {
        let speedx=el.dataset.speedx;
        let speedy=el.dataset.speedy;
        el.style.transform = `translate(0.1%, 0.1%) translate(${-xValue*speedx}px, ${yValue*speedy}px)`;
    });
    
});


// e.clientX -> horizontal position of the mouse pointer within the window.
// e-> event object 

const te1=document.querySelector('.text1');
const te2=document.querySelector('.text2');

const t = gsap.timeline();

t.to([te1,te2], {
    opacity: 1,
    duration: 1,
    delay: 1,
    ease: 'power2.inOut'
});
t.to([te1,te2], {
    opacity: 0.5,
    duration: 3,
    repeat: -1,
});
t.play();

const te3 = document.querySelectorAll('li');
const te4 = document.querySelectorAll('.logo');

const t1 = gsap.timeline();

    t1.to([te3,te4], {
        duration:3,
        opacity: 1,
        ease: 'power2.inOut'
    });
t1.play();

const te5= document.querySelectorAll('.img2');
const te6= document.querySelectorAll('.img3');

// const t2 = gsap.timeline();

//     t2.to([te5,te], {
//         duration:3,
//         opacity: 1,
//         ease: 'power2.inOut'
//     });
// t2.play();