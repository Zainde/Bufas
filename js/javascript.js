// variable for filter buttons
var filterButton=Array.from(Array.from(document.getElementsByClassName('filter'))[0].firstElementChild.firstElementChild.firstElementChild.children);
// variable for categories to be filtered
var categories=Array.from(document.getElementsByClassName('product_box'));
// variable for salesarticles
var SalesArt=Array.from(document.getElementsByClassName('product_box'));
// adds onclick function for all buttons
function addclick(){
  // LAZYLOAD
var lazyimg=Array.from(document.getElementsByClassName('product_box'));
for (var i = 0; i < lazyimg.length; i++) {
  lazyimg[i].classList.remove("hide");
}
// LAZYLOAD END
// FILTER PRODUCTS
for (var i = 0; i < filterButton.length; i++) {
  filterButton[i].addEventListener('click',function () {
    // variable for filter category
  var filterCat=this.classList[0];
  // loop going through all sales articles
  for (var i = 0; i < SalesArt.length; i++) {
    // shows/hides so only the sales articles with the same class as the button pressed
  if (SalesArt[i].classList.contains(filterCat)) {
    categories[i].classList.remove("hide");
  }
  else {
    categories[i].classList.add("hide");
  }
}
});

}
}


// window.onload=lazyload;
window.onload=addclick;
