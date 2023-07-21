function changeHTML() {
  window.location.href = 'tuote1.html';
}

function changeBigImage(imageSrc) {
  const bigImage = document.getElementById('bigImage');
  bigImage.src = imageSrc;
}
function toggleInfo() {
  const infoSection = document.getElementById('infoSection');
  infoSection.classList.toggle('open');
}


