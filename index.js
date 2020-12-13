var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

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
  }else{
    main = es;
    secondary = ca;
  } 
  
  [].forEach.call(main, function (el) {
    el.style.display = 'none';
  });
  
  [].forEach.call(secondary, function (el) {
    el.style.display = 'block';
  });
}

lang.addEventListener('click', ()=> {
  console.log(lang.innerHTML)
  if(lang.innerHTML == "ES"){
    changeLanguage("CA");
  }else{
    changeLanguage("ES");
  }
});