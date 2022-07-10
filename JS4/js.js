var i=0;
var fade =setInterval(function (){shade()},100)
setInterval(function (){slider()},4000)






function slider()
{
    var slides = document.getElementById('slides').getElementsByTagName('img')
    ++i;
    if(i==slides.length)
    i=0;


    if(i==0)
    slides[slides.length-1].style.display="none"
    
    else
      slides[i-1].style.display="none"



      slides[i].style.display="inline"
      slides[i].style.opacity=1
      clearInterval(fade)
      fade =setInterval(function (){shade()},100)


}


function shade()
{

   
    var slides = document.getElementById('slides').getElementsByTagName('img')
    var opacity=slides[i].style.opacity >=0 ? slides[i].style.opacity :1;
    slides[i].style.opacity = opacity - 0.025

}