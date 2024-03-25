const collapsibles = document.querySelectorAll('.collapsible');

const ico = document.querySelectorAll('.icon');

collapsibles.forEach(function(item) {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible-expanded");
  });
});


const cc = document.querySelector('.icon')