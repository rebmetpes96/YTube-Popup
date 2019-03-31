



  $(window).scroll(function(e){
          var vid = document.getElementsByTagName("video")[0];
					var scrollTop = $(window).scrollTop();
					var docHeight = $(document).height();
					var winHeight = $(window).height();
					var scrollPercent = (scrollTop) / (docHeight - winHeight);
					var scrollPercentRounded = Math.round(scrollPercent*100);

          if (scrollPercentRounded >= 8) {
            vid.style.width="366px";
            vid.style.height="206px";
            vid.style.left="990px";
            vid.style.top="320px";
            vid.style.position="fixed";
            console.log("es funzt");
          }
          else{
            vid.style.width="854px";
            vid.style.height="538px";
            vid.style.left="0px";
            vid.style.top="0px";
            vid.style.position="absolute";
          }
})





//JQUERY 14.07.2018 18:

//vid.style.pointerEvents="none";
