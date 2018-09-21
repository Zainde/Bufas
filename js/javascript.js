window.onload=lazyload;

// LAZYLOAD
function lazyload(){

var lazyimg=Array.from(document.getElementsByClassName('product_box'));
for (var i = 0; i < lazyimg.length; i++) {
  lazyimg[i].classList.remove("hide");
}
}
