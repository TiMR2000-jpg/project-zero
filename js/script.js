
const exploreButton = document.getElementById("exploreButton");

const description = document.querySelector("main p");

exploreButton.addEventListener("click", function() {

  description.textContent = "You just made your first interactive website!";

  exploreButton.textContent = "Completed";

});
