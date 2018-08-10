const vid = document.getElementsByTagName('video');
const spans = document.getElementsByTagName('span');

vid.ontimeupdate = () => {
  for (let i = 0; i < spans.length; i += 1) {
    const vidTime = video.currentTime;
    if (vidTime > spans[i].getAttribute("data-start")
    && vidTime < spans[i].getAttribute("data-end")) {
      spans[i].style.color = "#1B98C2";
    }
    else {
      span[i].style.color = "#797e83";
    }
  }
};
