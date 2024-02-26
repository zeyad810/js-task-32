let next =document.getElementById("next");
let img =document.getElementById("img");
let prev =document.getElementById("prev");
let imgs=['imgs/1.jpg','imgs/2.jpg', 'imgs/3.jpeg'];


let start =0
next.onclick=function nextStep() {
    start++
    if (start >=imgs.length) {
        start =0
    }
    img.src=imgs[start]
    
}
prev.onclick=function prevStep() {
    start--
    if (start < 0) {
        start = imgs.length -1
    }
    img.src=imgs[start]
    
}

