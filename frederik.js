function showPage(id) {
  document.getElementById(id).classList.add("active");
}

function closePage(id) {
  document.getElementById(id).classList.remove("active");
}

function showPage(pageId) {
  const overlays = document.querySelectorAll('.overlay');
  overlays.forEach(overlay => {
    overlay.classList.remove('active');
  });

  const page = document.getElementById(pageId);
  page.classList.add('active');
}

function closePage(pageId) {
  const page = document.getElementById(pageId);
  page.classList.remove('active');
}