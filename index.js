document.addEventListener("DOMContentLoaded", function() {


// NAVBAR HIDE
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("lang").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
    document.getElementById("lang").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
// END NAVBAR HIDE



// CHANGE LANGUAGES
const lang = document.getElementById("lang");
const ca = document.getElementsByClassName("CA");
const es = document.getElementsByClassName("ES");

[].forEach.call(ca, function (el) {
  el.style.display = 'none';
});

const changeLanguage = language => {
  lang.innerHTML = language;
  let main;
  let secondary;

  if(language == "ES"){
    main = ca;
    secondary = es;
    document.documentElement.lang = "es";
  }else{
    main = es;
    secondary = ca;
    document.documentElement.lang = "ca";
  } 
  
  [].forEach.call(main, function (el) {
    el.style.display = 'none';
  });
  
  [].forEach.call(secondary, function (el) {
    el.style.display = 'block';
  });
}

lang.addEventListener('click', ()=> {
  if(lang.innerHTML == "ES"){
    changeLanguage("CA");
  }else{
    changeLanguage("ES");
  }
});
// END CHANGE LANGUAGES

// INICIO
  $('#inicio').click(()=>{window.scrollTo(0,0)})
// FIN INICIO

// GALLERY + PRACTICING JQUERY :P

const appear = () =>{
  $('#gallery').removeAttr('id');
  $('.gallery').attr('id', 'wholeGallery');
  $('.appear').css('display', 'block')
  $('.disappear').css('display', 'none')
  $('.onClickGallery').attr('id', 'onClickGallery');
  console.log(clickedOne)
  width = -clickedOne*width;
  $('#wholeGallery').css({left: `${width}px`});
}

const disappear = () =>{
    $('.gallery').removeAttr('id');
    $('.gallery').attr('id', 'gallery');
    $('.appear').css('display', 'none');
    $('.disappear').css('display', 'block');
    $('.onClickGallery').removeAttr('id');
    width = 1000;
}

var width =  1000,
    moveWidth =  1000,
    count = 0,
    galleryLength = $('.gallery img').length,
    all = $('.gallery img'),
    clickedOne;

    console.log(galleryLength);

// Right = dreta (width resta)
// Left = esquerra (width suma)

const moveLeft = () => {
  if(width < 0){
    width += moveWidth;
    $('#wholeGallery').animate({
      left: `${width}px`
    })
  }
  
}

const moveRight = () => {
  width -= moveWidth;
  if(width*-1 < moveWidth*(galleryLength)){
    $('#wholeGallery').animate({
      left: `${width}px`
    })
  }
  
}

$('.fa-close').click(()=> disappear());

$('.fa-angle-left').click(function () {
    moveLeft();
});

$('.fa-angle-right').click(function () {
    moveRight();
});


$('.appear').css('display', 'none');

Array.from(all).forEach((v, i) => v.addEventListener('click', () => {
  clickedOne = i;
}));


$('.gallery img').click(() => {
    appear();
})

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		disappear();
	}
});

});

