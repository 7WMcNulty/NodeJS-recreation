(function(){
  const doc=document;
  let pic=doc.querySelector("#pic");
  pic.addEventListener("mouseover",
  function(){
    pic.style.borderColor = "green";
  }
);
  pic.addEventListener("mouseout",
  function(){
    pic.style.borderColor = "white";
  }
);
  let divs = doc.querySelectorAll(".notbutton");
  for(let i=0; i<divs.length; i++){
    divs[i].addEventListener("mouseover", function(){
      divs[i].style.opacity = 0.5;
    });
    divs[i].addEventListener("mouseout", function(){
      divs[i].style.opacity = 1;
    });
  };

})();
