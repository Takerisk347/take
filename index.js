const zoomElement = document.querySelector(".workspace");
let zoom = 1;
let indcater = 0;
const ZOOM_SPEED = 0.07;



function myFunction() {
    location.assign("mainPage.html")
    console.log("working");
  }

document.addEventListener("wheel", function (e) {
  if (indcater == 25){
    myFunction()
  }
 
   else if (e.deltaY > 0) {
    zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
    
    indcater++;
    console.log(indcater);
    
  }
  
});

const image=document.querySelector(".image")

window.addEventListener("load", () => {
  document.querySelector(".image").classList.remove("loading");
  });


