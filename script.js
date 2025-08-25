document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  const hero = document.querySelector(".hero");
  const cards = document.querySelector(".cards");
  const backButton = document.querySelector(".back-button");
  const wrapper = document.querySelector(".content-wrapper");

  if (!button || !hero || !cards || !backButton || !wrapper) return;

  hero.classList.add("visible");
  cards.classList.remove("visible");
  wrapper.classList.remove("show-cards");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    hero.classList.remove("visible");

    setTimeout(() => {
      cards.classList.add("visible");
      wrapper.classList.add("show-cards");
      hero.setAttribute("aria-hidden", "true");
      cards.setAttribute("aria-hidden", "false");
    }, 450);
  });

  backButton.addEventListener("click", () => {
    cards.classList.remove("visible");
    wrapper.classList.remove("show-cards");

    setTimeout(() => {
      hero.classList.add("visible");
      hero.setAttribute("aria-hidden", "false");
      cards.setAttribute("aria-hidden", "true");
    }, 450);
  });
});
