     var index= 0;
     function slideshow()
    { 
     var slide = document.querySelectorAll('.iteminto');
     for(i=0;i<slide.length;i++)
      {
          slide[i].style.display="none";
      }
      index++
      if(index>slide.length)
      {
              index=1;
      }
      slide[index-1].style.display="block";
         setTimeout(slideshow ,5000)
     } 
     slideshow();