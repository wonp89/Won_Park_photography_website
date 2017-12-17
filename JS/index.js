//----------- Jquery ------------//
$(document).ready(function () {
    $('#layer').mousemove(function (e) { //first layer behind layer2, mousemove for transfering mouse event
        parallax(e, this, 2);
    });
    //brightness effect when scrolled down
    $(window).scroll(function() {
           $('img').each(function(){
           var imagePos = $(this).offset().top;
           var topOfWindow = $(window).scrollTop();
               if (imagePos < topOfWindow+600) {
                   $(this).addClass("imgBrigtness");
               }
           });
       });
    //hover take brightness effect
    $("img").hover(function(e){
         $(this).addClass("imgBrigtness");
    });
});

//------ parallax : width and height calculation for layer movement ------//
function parallax(e, target, layer) {
    var layer_coeff = 10 / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    $(target).offset({ top: y ,left : x }); //transfer to jquery with values when mouse cursor moves
};

//------------ modal for image viewer ----------------//
  var modal = document.getElementById('myModal');
  var img = document.getElementsByTagName('img');
  var modalImg = document.getElementById("img01");
  for (i = 0; i < img.length; i++) {
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        // resize the horizontal images
        if (modalImg.height >= 700 || modalImg.height >= 650) {
          modalImg.style.width = "467px";
        } else {
          modalImg.style.width = "700px";
        }
    }
  }
// closing Modal
var span = document.getElementsByClassName("close")[0];
// click to close
span.onclick = function() {
    modal.style.display = "none";
}

//------ button for go to top ----------//
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
