const app = {
  button: document.querySelector("button"),

  async init() {
    app.fetchAdvice();

    app.button.addEventListener("click", () => app.fetchAdvice());
  },

  randomNumer() {
    return Math.floor(Math.random() * 224);
  },

  async fetchAdvice() {
    const advice = await fetch(
      `https://api.adviceslip.com/advice/${app.randomNumer()}`
    );

    return app.renderAdvice(await advice.json());
  },

  async renderAdvice(advice) {
    const adviceContainer = document.querySelector(".advice");
    const adviceId = document.querySelector("#advice-id");

    adviceContainer.textContent = advice.slip.advice;
    adviceId.textContent = advice.slip.id.toString();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
