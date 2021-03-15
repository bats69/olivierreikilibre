const who = document.getElementsByClassName('content--who');
const where = document.getElementsByClassName('content--where');
const contact = document.getElementsByClassName('content--contact');

let content--contact = document.getElementsByClassName('contact--wrap');
let content--where = document.getElementsByClassName('where--wrap');
let content--who = document.getElementsByClassName('who--wrap');

who.addEventListener("click", () => {
  if(getComputedStyle(who--wrap).display != "none"){
    who--wrap.style.display = "none";
  } else {
    who--wrap.style.display = "block";
  }
})

function who(){
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
};
togg2.onclick = togg;