const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");
const audio7 = document.getElementById("audio7");
const audio8 = document.getElementById("audio8");
const audio9 = document.getElementById("audio9");
function audioplay(ww){
  if (ww==0) {
    audio1.play();
  }
  else if (ww==1) {
   audio2.play();
  }
  else if (ww==2) {
    audio3.play();
  }
  else if (ww==3) {
   audio4.play();
  }
  else if (ww==4) {
    audio5.play();
  }
  else if (ww==5) {
   audio6.play();
  }
  else if (ww==6) {
    audio7.play();
  }
  else if (ww==7) {
   audio8.play();
  }
  else if (ww==8) {
    audio9.play();
  }
}
document.write(ww)
