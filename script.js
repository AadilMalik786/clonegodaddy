//-------------Mobile Responsive------------------------------------------------------------------------------
let container17 = document.querySelectorAll(".container17 ul li a");
    // let container17a = document.querySelectorAll(".container17");
    console.log(container17);
    let carl =function (){
        for(alex of container17){

            if(alex.style.display==="none"){
                alex.style.display="block";
                // alex.style.width="none";
                
            }
            else{
                // alex.style.margin="0";
                alex.style.display="none"
            }
        }
    }

if (window.innerWidth <= 768 && window.innerWidth >= 320) {
  


}