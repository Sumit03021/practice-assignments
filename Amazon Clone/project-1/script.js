const slides = document.querySelectorAll(".slide");
var counter=0;

slides.forEach((slide,index)=>{
    slide.style.bottom =`${index * 100}%`;
})
const goPrev = ()=>{
    counter--;
    if (counter<0){
        counter= slides.length-1;
    }
    // alert("go prev")
    slideimage();
}
const goNext =()=>{
    counter++;
    if(counter > slides.length-1){
        counter = 0;
    }
    // alert("go next")
    slideimage();
}
const slideimage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateY(${counter *100}%)`;
    })
}
