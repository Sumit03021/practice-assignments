const header=document.getElementsByClassName('header')
const lastscroll=0
header.addEventListener=("scroll",()=>{
    const scrolltop=window.scrollY
    if(scrolltop >lastscroll){
    header.style.transform='translateY(50%)'
    }
})