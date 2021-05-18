window.onload = buttonCheck();

var heads = 0;
var tails = 0;
var headsTrophy = 0;
var tailsTrophy = 0;
var head = document.getElementById("headsCount");
var tail = document.getElementById("tailsCount");
var hw = document.getElementById("HW");
var tw = document.getElementById("TW");

function buttonCheck() {
  if (document.getElementById("dark_select").selectedIndex == 0) {
    document.getElementById("flipper").style.display = "block";
    document.getElementById("flipper2").style.display = "none";
  }
}

document.getElementById("flipper").onclick = click;
document.getElementById("flipper2").onclick = click;
var audio = new Audio("./Assets/mario.wav");
var audioCoin = new Audio("./Assets/coin.wav");
function playerCheck() {
  var selector = document.getElementById("dark_select").selectedIndex;
  var badges = document.getElementsByClassName("PBadge");
  buttonCheck();
  if (selector == 0) {
    badges[0].style.display = "none";
    badges[1].style.display = "none";
  } else {
    badges[0].style.display = "inline";
    badges[1].style.display = "inline";
  }
}
function click() {
  if (document.getElementById("dark_select").selectedIndex == 1) {
    if (document.getElementById("flipper2").style.display == "none") {
      document.getElementById("flipper2").style.display = "block";
      document.getElementById("flipper").style.display = "none";
    } else if (document.getElementById("flipper").style.display == "none") {
      document.getElementById("flipper2").style.display = "none";
      document.getElementById("flipper").style.display = "block";
    }
  }
  x = Math.floor(Math.random() * 2) == 0;
  audioCoin.play();
  audioCoin.playbackRate = 2.5;
  if (x) {
    heads++;
    flip("Heads");
    let coin = document.createElement("i");
    coin.classList.add("nes-icon", "coin", "is-small");
    head.appendChild(coin);
  } else {
    tails++;
    flip("Tails");
    let coin = document.createElement("i");
    coin.classList.add("nes-icon", "coin", "is-small");
    tail.appendChild(coin);
  }
  if (heads > 9) {
    document.getElementById("winner").innerHTML = "HEADS";
    document.getElementById("winner").classList.remove("is-error");
    document.getElementById("winner").classList.add("is-warning");
    document.getElementById("modalBg").classList.add("sectionModal");
    document.getElementById("dialog-dark-rounded").style.display = "block";
    audio.play();
    heads = 0;
    tails = 0;
    head.innerHTML = "";
    tail.innerHTML = "";
    let bigCoin = document.createElement("i");
    bigCoin.classList.add("nes-icon", "trophy", "is-small");
    hw.appendChild(bigCoin);
    headsTrophy++;
  } else if (tails > 9) {
    document.getElementById("winner").innerHTML = "TAILS";
    document.getElementById("winner").classList.remove("is-warning");
    document.getElementById("winner").classList.add("is-error");
    document.getElementById("modalBg").classList.add("sectionModal");
    document.getElementById("dialog-dark-rounded").style.display = "block";
    audio.play();
    heads = 0;
    tails = 0;
    head.innerHTML = "";
    tail.innerHTML = "";
    let bigCoin = document.createElement("i");
    bigCoin.classList.add("nes-icon", "trophy", "is-small");
    tw.appendChild(bigCoin);
    tailsTrophy++;
  }
}
function flip(coin) {
  let res = document.getElementById("result");
  res.innerHTML = coin;
  if (coin == "Heads") {
    res.classList.remove("is-error");
    res.classList.add("is-warning");
  } else {
    res.classList.remove("is-warning");
    res.classList.add("is-error");
  }
}

function modalCloser() {
  document.getElementById("dialog-dark-rounded").style.display = "none";
  document.getElementById("modalBg").classList.remove("sectionModal");
}

function cleaner() {
  heads = 0;
  tails = 0;
  head.innerHTML = "";
  tail.innerHTML = "";
  hw.innerHTML = "";
  tw.innerHTML = "";
}
