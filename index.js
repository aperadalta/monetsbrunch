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



// GALLERY + PRACTICING JQUERY :P

const appear = () =>{
  $('#gallery').removeAttr('id');
  $('.gallery').attr('id', 'wholeGallery');
  $('.appear').css('display', 'block')
  $('.disappear').css('display', 'none')
}

const disappear = () =>{
    $('.gallery').removeAttr('id');
    $('.gallery').attr('id', 'gallery');
    $('.fa').css('display', 'none');
    $('.appear').css('display', 'none');
    $('.disappear').css('display', 'block');
}

const moveLeft = () => {
  $('#wholeGallery').css('left', '105vw'); //this worked, animate
}

const moveRight = () => {
  
}

$('.appear').css('display', 'none');

$('.gallery img').click(() => {
    appear();
})

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		disappear();
	}
});

$('.fa-close').click(()=> disappear());

$('.fa-angle-left').click(function () {
   moveLeft();
});

$('.fa-angle-right').click(function () {
   moveRight();
});

/*
// on click img, show the big gallery
$('.gallery img').click(e => {
  let photo = e.target;
  let photo2 = $(photo)[0].outerHTML;
  
  var gallery = `
    <div id="wholeGallery">
      <i class="fa fa-angle-left"></i>
        ${photo2}
      <i class="fa fa-angle-right"></i>
    </div>
  `;

  $('#fullDisplay').html(gallery);
});

// array with all the imgs ready to input
var fullGallery = $('.gallery img');
var allThePhotos = [];

for(let i = 0; i<fullGallery.length; i++){
  allThePhotos.push(fullGallery[i].outerHTML);
}

console.log(allThePhotos);

// on click show right or left pictures
$('#wholeGallery i').click(() => {
  console.log("hello lads");
}); */


// END GALLERY + PRACTICING JQUERY :P