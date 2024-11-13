var ri = document.getElementById("Ringo");
var ma = document.getElementById("Maguro");
var ris = document.getElementById("Ris");
var ec = document.getElementById("Ecolo");
var ar = document.getElementById("Arle");
var sa = document.getElementById("Satan");
var sc = document.getElementById("Schezo");
var si = document.getElementById("Sig");
var lg = document.getElementById("Logo");
var ca = document.getElementById("Carby");
var fr = document.getElementById("Frog");
var sound = new Audio("sounds/sfx.mp3");
// Ringo
var main = new Audio("sounds/Ringo/Main.wav");
var happy = new Audio("sounds/Ringo/Happy.wav");
var bay = new Audio("sounds/Ringo/Backatyou.wav");
var puyopuyo = new Audio("sounds/Ringo/PuyoPuyo.wav");
// Maguro
var main2 = new Audio("sounds/Maguro/Main.wav");
var win = new Audio("sounds/Maguro/Win.wav");
var lose = new Audio("sounds/Maguro/Lose.wav");
var backhand = new Audio("sounds/Maguro/Backhand.wav");
// Risukuma
var main3 = new Audio("sounds/Risukuma/Main.wav");
var confirmed = new Audio("sounds/Risukuma/Confirmed.wav");
var thrill = new Audio("sounds/Risukuma/ThrillingMatch.wav");
// Ecolo
var main4 = new Audio("sounds/Ecolo/Main.wav");
var puyopuyo2 = new Audio("sounds/Ecolo/PuyoPuyo.wav");
var again = new Audio("sounds/Ecolo/Again.wav");
var sad = new Audio("sounds/Ecolo/Sad.wav");
// Arle
var main5 = new Audio("sounds/Arle/Main.wav");
var mad = new Audio("sounds/Arle/Mad.wav");
var violin = new Audio("sounds/Arle/Violin.wav");
var curry = new Audio("sounds/Arle/Curry.wav");
// Satan
var main6 = new Audio("sounds/Satan/Main.wav");
var behold = new Audio("sounds/Satan/Behold.wav");
var devistation = new Audio("sounds/Satan/Devistation.wav");
var ntt = new Audio("sounds/Satan/NotThisTime.wav");
// Schezo
var main7 = new Audio("sounds/Schezo/Main.wav");
var behold2 = new Audio("sounds/Schezo/Behold.wav");
var shock = new Audio("sounds/Schezo/Shockwave.wav");
var star = new Audio("sounds/Schezo/Starstrike.wav");
// Sig
var main8 = new Audio("sounds/Sig/Main.wav");
var cote = new Audio("sounds/Sig/Coteball.wav");
var puyopuyo3 = new Audio("sounds/Sig/PuyoPuyo.wav");
var sapphire = new Audio("sounds/Sig/Sapphire.wav");
// Carby
var c1 = new Audio("sounds/Carby/C1.wav");
var c2 = new Audio("sounds/Carby/C2.wav");
var c3 = new Audio("sounds/Carby/C3.wav");
var c4 = new Audio("sounds/Carby/C4.wav");

function Hover() {
  ri.classList.add("translucent");
  document.getElementById("select").play();
}
function Hover2() {
  ma.classList.add("translucent");
  document.getElementById("select").play();
}
function Hover3() {
  ris.classList.add("translucent");
  document.getElementById("select").play();
}
function Hover4() {
  ec.classList.add("translucent");
  document.getElementById("select").play();
}
function Hover5() {
  ar.classList.add("translucent");
  document.getElementById("select").play();
}
function Hover6() {
  sa.classList.add("translucent");
  document.getElementById("select").play();
}
function Hover7() {
  sc.classList.add("translucent");
  document.getElementById("select").play();
}
function Hover8() {
  si.classList.add("translucent");
  document.getElementById("select").play();
}
function Hover9() {
  lg.classList.add("translucent");
  document.getElementById("select").play();
}
function Hover10() {
  ca.classList.add("translucent");
  document.getElementById("select").play();
}
function Hover11() {
  fr.classList.add("translucent");
  document.getElementById("select").play();
}
function NHover() {
  ri.classList.remove("translucent");
}
function NHover2() {
  ma.classList.remove("translucent");
}
function NHover3() {
  ris.classList.remove("translucent");
}
function NHover4() {
  ec.classList.remove("translucent");
}
function NHover5() {
  ar.classList.remove("translucent");
}
function NHover6() {
  sa.classList.remove("translucent");
}
function NHover7() {
  sc.classList.remove("translucent");
}
function NHover8() {
  si.classList.remove("translucent");
}
function NHover9() {
  lg.classList.remove("translucent");
}
function NHover10() {
  ca.classList.remove("translucent");
}
function NHover11() {
  fr.classList.remove("translucent");
}
function Ringo() {
  document.getElementById("yep").play();
  var a = Math.floor(Math.random() * 100);
  console.log(a);
  if (a < 25) {
    ri.src = "images/Ringo/Ringo.png";
    main.play();
  }
  if (a < 50 && a > 25) {
    ri.src = "images/Ringo/RingoHappy.png";
    happy.play();
  }
  if (a < 75 && a > 50) {
    ri.src = "images/Ringo/RingoPoint.png";
    puyopuyo.play();
  }
  if (a < 100 && a > 75) {
    ri.src = "images/Ringo/RingoTangent.png";
    bay.play();
  }
}
function Maguro() {
  document.getElementById("yep").play();
  var b = Math.floor(Math.random() * 100);
  if (b < 25) {
    ma.src = "images/Maguro/Maguro.png";
    main2.play();
  }
  if (b < 50 && b > 25) {
    ma.src = "images/Maguro/MaguroShocked.png";
    lose.play();
  }
  if (b < 75 && b > 50) {
    ma.src = "images/Maguro/MaguroSpecial.png";
    backhand.play();
  }
  if (b < 100 && b > 75) {
    ma.src = "images/Maguro/MaguroWin.png";
    win.play();
  }
}
function Risukuma() {
  document.getElementById("yep").play();
  var c = Math.floor(Math.random() * 100);
  if (c < 25) {
    ris.src = "images/Risukuma/Risukuma.png";
    main3.play();
  }
  if (c < 50 && c > 25) {
    ris.src = "images/Risukuma/RisukumaExcited.png";
    thrill.play();
  }
  if (c < 100 && c > 50) {
    ris.src = "images/Risukuma/RisukumaPoint.png";
    confirmed.play();
  }
}
function Ecolo() {
  document.getElementById("yep").play();
  var d = Math.floor(Math.random() * 100);
  if (d < 25) {
    ec.src = "images/Ecolo/Ecolo.png";
    main4.play();
  }
  if (d < 50 && d > 25) {
    ec.src = "images/Ecolo/EcoloExcited.png";
    puyopuyo2.play();
  }
  if (d < 75 && d > 50) {
    ec.src = "images/Ecolo/EcoloSad.png";
    sad.play();
  }
  if (d < 100 && d > 75) {
    ec.src = "images/Ecolo/Ecololol.png";
    again.play();
  }
}
function Arle() {
  document.getElementById("yep").play();
  var e = Math.floor(Math.random() * 100);
  if (e < 25) {
    ar.src = "images/Arle/Arle.png";
    main5.play();
  }
  if (e < 50 && e > 25) {
    ar.src = "images/Arle/ArleBayoen.png";
    violin.play();
  }
  if (e < 75 && e > 50) {
    ar.src = "images/Arle/ArleMadPointing.png";
    mad.play();
  }
  if (e < 100 && e > 75) {
    ar.src = "images/Arle/ArlePointing.png";
    curry.play();
  }
}
function Satan() {
  document.getElementById("yep").play();
  var f = Math.floor(Math.random() * 100);
  if (f < 25) {
    sa.src = "images/Satan/Satan.png";
    main6.play();
  }
  if (f < 50 && f > 25) {
    sa.src = "images/Satan/SatanAttack.png";
    devistation.play();
  }
  if (f < 75 && f > 50) {
    sa.src = "images/Satan/SatanCounter.png";
    ntt.play();
  }
  if (f < 100 && f > 75) {
    sa.src = "images/Satan/SatanWin.png";
    behold.play();
  }
}
function Schezo() {
  document.getElementById("yep").play();
  var g = Math.floor(Math.random() * 100);
  if (g < 25) {
    sc.src = "images/Schezo/Schezo.png";
    main7.play();
  }
  if (g < 50 && g > 25) {
    sc.src = "images/Schezo/SchezoCounter.png";
    behold2.play();
  }
  if (g < 75 && g > 50) {
    sc.src = "images/Schezo/SchezoDarkBlade.png";
    shock.play();
  }
  if (g < 100 && g > 75) {
    sc.src = "images/Schezo/SchezoConfident.png";
    star.play();
  }
}
function Sig() {
  document.getElementById("yep").play();
  var h = Math.floor(Math.random() * 100);
  if (h < 25) {
    si.src = "images/Sig/Sig.png";
    main8.play();
  }
  if (h < 50 && h > 25) {
    si.src = "images/Sig/SigHopeBall.png";
    cote.play();
  }
  if (h < 75 && h > 50) {
    si.src = "images/Sig/SigPoint.png";
    puyopuyo3.play();
  }
  if (h < 100 && h > 75) {
    si.src = "images/Sig/SigSapphire.png";
    sapphire.play();
  }
}
function Carby() {
  document.getElementById("yep").play();
  var i = Math.floor(Math.random() * 100);
  if (i < 25) {
    c1.play();
  }
  if (i < 50 && i > 25) {
    c2.play();
  }
  if (i < 75 && i > 50) {
    c3.play();
  }
  if (i < 100 && i > 75) {
    c4.play();
  }
}
function Frog() {
  document.getElementById("yep").play();
  sound.play();
}
function playSfx() {
  document.getElementById("yep").play();
  sound.play();
}
