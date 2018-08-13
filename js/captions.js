const vid = document.getElementsByTagName('video')[0];
const spans = document.getElementsByTagName('span');

vid.ontimeupdate = () => {
  for (let i = 0; i <= spans.length; i += 1) {
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
