var tik = setInterval(() => {
  var lyf = document.getElementById('digit')
  lyf.classList.toggle("digit");
  if (lyf.innerText == 0) {
    document.getElementById('container').classList.toggle("containeroverlay")
    var content = document.getElementById("content")
    var intro = document.getElementById("intro")
    var countdown = document.getElementById("countdown")
    content.style.display = "block"
    intro.style.display = "none"
    let player = document.getElementById('player');
    player.play();
    countdown.style.display = "none"
    const element = document.getElementById("link");
element.remove();
    clearInterval(tik)
  } else {
    lyf.innerText -= 1
  }
  lyf.classList.toggle("digit");
}, 1000)