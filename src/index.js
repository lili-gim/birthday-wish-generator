function showWish(response) {
  new Typewriter("#wish", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generateWish(event) {
  event.preventDefault();
  let keyInput = document.querySelector("#key-wish-words");

  let apiKey = "c20161a98fff44a06b23236e2obd0t3b";
  let prompt = `Generate a witty birtday wish including ${keyInput.value}. `;
  let context =
    "you are the best at creating witty birthday wishes with the provided words";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let wishElement = document.querySelector("#wish");
  wishElement.classList.remove("hidden");
  wishElement.innerHTML = `
    <div class="generating">⏳Generating a birtday wish...</div>
  `;

  axios.get(apiUrl).then(showWish);
}

let wishForm = document.querySelector("#wish-form");
wishForm.addEventListener("submit", generateWish);
