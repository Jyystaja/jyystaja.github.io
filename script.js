function changeHTML(string sivu) {
  window.location.href = sivu;
}

function changeBigImage(imageSrc) {
  const bigImage = document.getElementById('bigImage');
  bigImage.src = imageSrc;
}
function toggleInfo() {
  const infoSection = document.getElementById('infoSection');
  infoSection.classList.toggle('open');
}


