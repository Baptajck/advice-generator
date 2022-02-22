const app = {
  button: document.querySelector("button"),

  async init() {
    app.renderAdvice();

    app.button.addEventListener("click", () => window.location.reload());
  },

  async fetchAdvice() {
    const advice = await fetch("https://api.adviceslip.com/advice");
    return await advice.json();
  },

  async renderAdvice() {
    let advice = await app.fetchAdvice();
    const adviceContainer = document.querySelector(".advice");
    const adviceId = document.querySelector("#advice-id");

    adviceContainer.textContent = advice.slip.advice;
    adviceId.textContent = advice.slip.id.toString();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
