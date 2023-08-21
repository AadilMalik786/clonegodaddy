let container17 = document.querySelectorAll(".container17 ul .listi")[0];
// console.log(container17);
// console.log(container17.children);
let container18 = document.querySelectorAll(".container18 ul .listione")[0];
let minus1=document.querySelector(".minus1");
let minus2=document.querySelector(".minus2");
let minus3=document.querySelector(".minus3");
let minus4=document.querySelector(".minus4");
let plus1=document.querySelector(".plus1");
let plus2=document.querySelector(".plus2");
let plus3=document.querySelector(".plus3");
let plus4=document.querySelector(".plus4");
function toggleElements() {
  //---------------for plus1 and minus1--------------------
  for (let alex of container17.children ) {
    if (alex.style.display === "none") {
      alex.style.display = "block";
      minus1.style.display="block"
      plus1.style.display="none"
      alex.style.marginTop="20px";
      
      
    } else {
        alex.style.display = "none";
        minus1.style.display="none"
        plus1.style.display="block"
        alex.style.marginTop="0px";
    }
}
}
//---------------for plus2 and minus2--------------------
function toggleElementsone() {
  
    //   console.log(container17);
    for (let alex of container18.children ) {
        if (alex.style.display === "none") {
            alex.style.display = "block";
            minus2.style.display="block"
            plus2.style.display="none"
            alex.style.marginTop="20px";
            
            
    } else {
        alex.style.display = "none";
        minus2.style.display="none"
        plus2.style.display="block"
        alex.style.marginTop="0px";
    }
}
}

// Check window width on initial load
window.addEventListener("load", function() {
  if (window.innerWidth <= 768 && window.innerWidth >= 320) {
    toggleElements();
  }
});

// Check window width on window resize
window.addEventListener("resize", function() {
  if (window.innerWidth <= 768 && window.innerWidth >= 320) {
    toggleElements();
  }
});
window.addEventListener("load", function() {
  if (window.innerWidth <= 768 && window.innerWidth >= 320) {
    toggleElementsone();
  }
});

// Check window width on window resize
window.addEventListener("resize", function() {
  if (window.innerWidth <= 768 && window.innerWidth >= 320) {
    toggleElementsone();
  }
});
let domoneparent=document.querySelector(".domoneparent")
function Ham(){
    if(domoneparent.style.display=="none")
    domoneparent.style.display="block"
else{
    domoneparent.style.display="none";
}
}