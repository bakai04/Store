let fon=document.querySelector(".fon");
let a=0;
let burger=document.querySelector(".burger");
let line=document.querySelector(".line");
let menu2=document.querySelector(".menu2");
let img=document.querySelectorAll(".new-advice");
let sliderline2=document.querySelector(".sliderline");
let img2=document.querySelectorAll(".new-advice2");
let sliderline=document.querySelector(".sliderline2");
let prev=document.querySelector(".prev");
let next=document.querySelector(".next");
let prev2=document.querySelector(".prev2");
let next2=document.querySelector(".next2");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
let btn4=document.querySelector(".btn4");
let btn5=document.querySelector(".btn5");
let btn6=document.querySelector(".btn6");
let spisok=document.querySelector(".spisok-prev2");
let spisok3=document.querySelector(".spisok-prev3");
let spisok4=document.querySelector(".spisok-prev4");
let spisok5=document.querySelector(".spisok-prev5");
let spisok6=document.querySelector(".spisok-prev6");
let width;
let width2;
window.addEventListener("resize", function(){
    fon.style.width=document.querySelector(".container").offsetWidth + "px";
    fon.style.height="auto";
});
burger.addEventListener("click", function(){
    burger.classList.toggle("active");
    menu2.classList.toggle("active");
})


next.addEventListener("click", function(){
    a++;
    if(a > img.length){
        a=0;
    }
    width=-img[1].offsetWidth;
    sliderline.style.left= a*width + "px";
})
prev.addEventListener("click", function(){
    a--;
    if(a < 0){
        a=img.length;
    }
    width=-img[1].offsetWidth;
    sliderline.style.left= a*width + "px";
})
next2.addEventListener("click", function(){
    a++;
    if(a > img2.length){
        a=0;
    }
    width2=-img[1].offsetWidth;
    sliderline2.style.left= a*width2 + "px";
})
prev2.addEventListener("click", function(){
    a--;
    if(a < 0){
        a=img2.length;
    }
    width2=-img[1].offsetWidth;
    sliderline2.style.left= a*width2 + "px";
})



btn2.addEventListener("click", function(){
    spisok.classList.toggle("active");
    btn2.classList.toggle("active");
})
btn3.addEventListener("click", function(){
    spisok3.classList.toggle("active");
    btn3.classList.toggle("active");
})
btn4.addEventListener("click", function(){
    spisok4.classList.toggle("active");
    btn4.classList.toggle("active");
})
btn5.addEventListener("click", function(){
    spisok5.classList.toggle("active");
    btn5.classList.toggle("active");
})
btn6.addEventListener("click", function(){
    spisok6.classList.toggle("active");
    btn6.classList.toggle("active");
})


