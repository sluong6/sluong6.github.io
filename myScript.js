var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.innerHTML = "Read summary";
      this.setAttribute("icon-name", "keyboard_arrow_down");

    } else {
      content.style.display = "block";
      this.innerHTML = "Fold summary";
      this.setAttribute("icon-name", "keyboard_arrow_up");

    }
  });
}
