import { domquery } from "./domquery";

var myIndex = 0;
transition();

function transition() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(transition, 2000); // resim 2 saniyede bir yer değiştirir
}

domquery.textContent=" ";

