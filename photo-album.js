function openModal(imageName, caption) {
  var modal = document.getElementById("photo-modal");
  var modalImg = document.getElementById("modal-img");
  var captionText = document.getElementById("modal-caption");

  modal.style.display = "block";  // Show the modal
  modalImg.src = "images/" + imageName;  // Set the image source to the clicked image
  captionText.innerHTML = caption;  // Set the caption
}

function closeModal() {
  var modal = document.getElementById("photo-modal");
  modal.style.display = "none";  // Hide the modal
}
