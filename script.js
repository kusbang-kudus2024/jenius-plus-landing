document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Terima kasih! Pesan Anda sudah terkirim.");
  this.reset();
});