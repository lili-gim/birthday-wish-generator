function showWish(event) {
  event.preventDefault();

  new Typewriter("#wish", {
    strings: "Happy Birthday",
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

let wishForm = document.querySelector("#form");
wishForm.addEventListener("click", showWish);
