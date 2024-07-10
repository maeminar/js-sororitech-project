document.addEventListener("DOMContentLoaded", function () {
  const IMG = document.querySelectorAll(".image-container");

  IMG.forEach(function (container) {
    const IMG_HOVER = container.querySelector(".hover-img");

    IMG_HOVER.addEventListener("mouseover", function () {
      IMG_HOVER.style.opacity = "0.5";
    });

    IMG_HOVER.addEventListener("mouseout", function () {
      IMG_HOVER.style.opacity = "1";
    });
  });

  // Caroussel
  const images = document.querySelectorAll("img");
  const navContainer = document.querySelector(".nav-container");
  const totalImages = images.length;
  let imageIndex = 0;
  let interval;

  for (let i = 0; i < totalImages; i++) {
    const button = document.createElement("button");
    button.classList.add("nav-btn");
    navContainer.appendChild(button);
  }

  const buttons = document.querySelectorAll(".nav-btn");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      imageIndex = index;
      updateSlider();
      resetInterval();
    });
  });

  function updateSlider() {
    images.forEach((image) => {
      image.classList.remove("image-active");
    });
    buttons.forEach((button) => {
      button.classList.remove("btn-active");
    });
    images[imageIndex].classList.add("image-active");
    buttons[imageIndex].classList.add("btn-active");
  }

  function nextImage() {
    imageIndex++;
    if (imageIndex > totalImages - 1) {
      imageIndex = 0;
    }
    updateSlider();
  }

  function autoPlay() {
    interval = setInterval(nextImage, 3000);
  }

  function resetInterval() {
    clearInterval(interval);
    autoPlay();
  }

  updateSlider();
  autoPlay();
});
