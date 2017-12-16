$(document).ready(function () {
    $('#layer-one').mousemove(function (e) {
        parallax(e, this, 1);
        parallax(e, document.getElementById('layer-two'), 2);
    });
    if ($('#img01').height() > 700) {
    	$('#img01').width(467)
    }
});
function parallax(e, target, layer) {
    var layer_coeff = 10 / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    $(target).offset({ top: y ,left : x }); //transfer to jquery with values when mouse cursor moves
};

//------------------ modal for image viewer ----------------//
  var modal = document.getElementById('myModal');
  var img = document.getElementsByTagName('img');
  var modalImg = document.getElementById("img01");
  for (i = 0; i < img.length; i++) {
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
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
