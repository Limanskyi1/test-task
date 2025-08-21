const CONFIG = {
  spinsCount: 4,
  animationDuration: 6,
  sectors: [0, 90, 180, 270],
};

const wheel = document.querySelector(".wheel__inner img");
const wheelButton = document.querySelector(".wheel__button");
const modal = document.getElementById("modal");
const modalClose = modal.querySelector(".modal__close");

let currentDeg = 0;

wheel.style.transition = `transform ${CONFIG.animationDuration}s cubic-bezier(0.25, 1, 0.5, 1)`;

const showModal = () => modal.classList.add("active");
const closeModal = () => modal.classList.remove("active");

const getRandomDeg = () => {
  const sectorDeg = CONFIG.sectors[Math.floor(Math.random() * CONFIG.sectors.length)];
  currentDeg += CONFIG.spinsCount * 360 + sectorDeg;
  return currentDeg;
};

const handleClickWheelButton = () => {
  wheelButton.disabled = true;
  wheel.style.transform = `rotate(${getRandomDeg()}deg)`;
  wheel.addEventListener("transitionend", () => {
    wheelButton.disabled = false;
    showModal();
  });
};

wheelButton.addEventListener("click", handleClickWheelButton);
modalClose.addEventListener("click", closeModal);
