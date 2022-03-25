window.onload = function(){
    var quadimages = document.querySelectorAll("#quad figure");
    console.log(quadimages)
    for(i=0; i<quadimages.length; i++) {
      quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full");}); 
    }
}

