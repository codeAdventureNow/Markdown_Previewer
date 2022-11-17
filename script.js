// function maxHeight() {}

// collapsible
// var coll = document.querySelector(".collapsible");
// var i;

function maxHeight() {
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}

// coll.addEventListener("click", maxHeight);

// const collButton = document.querySelector(".collapsible");
// const body = document.querySelector(".editor");

// function maxHeight() {}

// collButton.addEventListener("click", maxHeight);
