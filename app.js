document.getElementById("flipper").onclick = click;
var audio = new Audio('./Assets/mario.wav');

var heads = 0;
var tails = 0;
var head = document.getElementById("headsCount");
var tail = document.getElementById("tailsCount");
function click() {
  x = Math.floor(Math.random() * 2) == 0;
  if (x) {
    heads++;
    flip("heads");
    let coin = document.createElement("i");
    coin.classList.add("nes-icon", "coin", "is-small");
    head.appendChild(coin);
  } else {
    tails++;
    flip("tails");
    let coin = document.createElement("i");
    coin.classList.add("nes-icon", "coin", "is-small");
    tail.appendChild(coin);
  }
  if (heads > 9) {
    document.getElementById("winner").innerHTML = "HEADS";
    document.getElementById('dialog-dark-rounded').style.display = 'block';
    audio.play();
    heads = 0;
    tails = 0;
    head.innerHTML = "";
    tail.innerHTML = "";
    let hw = document.getElementById("HW");
    let bigCoin = document.createElement("i");
    bigCoin.classList.add("nes-icon", "trophy", "is-small");
    hw.appendChild(bigCoin);
  } else if (tails > 9) {
    document.getElementById("winner").innerHTML = "TAILS";
    document.getElementById('dialog-dark-rounded').style.display = 'block';
    audio.play();
    heads = 0;
    tails = 0;
    head.innerHTML = "";
    tail.innerHTML = "";
    let tw = document.getElementById("TW");
    let bigCoin = document.createElement("i");
    bigCoin.classList.add("nes-icon", "trophy", "is-small");
    tw.appendChild(bigCoin);
  }
}
function flip(coin) {
  let res = document.getElementById("result");
  res.innerHTML = coin;
  if (coin == "heads") {
    res.classList.remove("is-error");
    res.classList.add("is-warning");
  } else {
    res.classList.remove("is-warning");
    res.classList.add("is-error");
  }
}
