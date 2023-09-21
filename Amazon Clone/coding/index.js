// slider button to hero section
let slidebtnleft=document.getElementById("slide-btn-left")
let slidebtnright=document.getElementById("slide-btn-right")
let imgItem=document.querySelectorAll(".image-item")
let startSlider = 0
let endSlider = (imgItem.length-1)*100

slidebtnleft.addEventListener("click",handleleftbtn)
function handleleftbtn(){
  if(startSlider < 0){
    startSlider+=100
  }
  imgItem.forEach(element=>{
    element.style.transform=`translateX(${startSlider}%)`
  })
 }
slidebtnright.addEventListener("click",handlerightbtn)
 function handlerightbtn(){
  if(startSlider >= -endSlider +100){
     startSlider = startSlider - 100
  }
     imgItem.forEach(element=>{
       element.style.transform = `translateX(${startSlider}%)`
     })
 }

 // automatic render
 function renderSlideAuto(){
 if(startSlider >= -endSlider +100){
  handlerightbtn()
 }else{
  startSlider = 0
       }
 }
 setInterval(renderSlideAuto,2000)

 //  sidebar navigations
 const sidebarEl=document.getElementById("sidebar-show")
const sidebaropenEl= document.getElementById("open-nav-sidebar")
const sidebarcloseEl=document.getElementById("sidebar-close")
sidebaropenEl.addEventListener("click",()=>{
   sidebarEl.classList.toggle("sidebar-show")
})
sidebarcloseEl.addEventListener("click",()=>{
  sidebarEl.classList.toggle("sidebar-show")
})

// deals button working




























