//Highlight transcript segment currently playing

const vid = document.getElementsByTagName('video')[0];
const spans = document.getElementsByTagName('span');

vid.ontimeupdate = () => {
  for (let i = 0; i <= spans.length; i ++) {
    const vidTime = vid.currentTime;
    if (vidTime > spans[i].getAttribute("data-start")
    && vidTime < spans[i].getAttribute("data-end")) {
      spans[i].style.color = "#0E3F20";
      spans[i].style.fontWeight = "bold";
    }
    else {
      spans[i].style.color = "#797e83";
      spans[i].style.fontWeight = "normal";
    }
  }
};


//change cursor style
document.getElementById("transcript").style.cursor = "pointer";

// Click transcript to be taken to that video segment

const currentSpan = document.querySelectorAll("p span");

for(let i = 0; i < currentSpan.length; i += 1) {
  currentSpan[i].addEventListener("click", function(event) {
    vid.currentTime = event.target.getAttribute("data-start");
    vid.play();
  })
}
