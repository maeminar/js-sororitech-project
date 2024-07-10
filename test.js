document.addEventListener("DOMContentLoaded", () => {
  const slidesData = [
    { src: "img/image2.jpg", description: "Description 1" },
    { src: "img/image2.jpg", description: "Description 2" },
    { src: "img/image2.jpg", description: "Description 3" },
    { src: "img/image2.jpg", description: "Description 4" },
    { src: "img/image2.jpg", description: "Description 5" },
    { src: "img/image2.jpg", description: "Description 6" },
    { src: "img/image2.jpg", description: "Description 7" },
    { src: "img/image2.jpg", description: "Description 8" },
    { src: "img/image2.jpg", description: "Description 9" },
  ];

  const carouselTrack = document.querySelector(".carousel-track");

  const createSlide = ({ src, description }) => {
    const slideElement = document.createElement("div");
    slideElement.className = "slide";

    const imgElement = document.createElement("img");
    imgElement.src = src;
    imgElement.alt = description;

    const overlayElement = document.createElement("div");
    overlayElement.className = "overlay";
    overlayElement.textContent = description;

    slideElement.append(imgElement, overlayElement);

    return slideElement;
  };

  const populateCarouselTrack = (slides) => {
    const fragment = document.createDocumentFragment();
    slides.forEach((slide) => fragment.appendChild(createSlide(slide)));

    // Duplicate slides to create a seamless loop effect
    slides.forEach((slide) => fragment.appendChild(createSlide(slide)));

    carouselTrack.appendChild(fragment);

    const slideWidth = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--slide-width"
      )
    );
    const gapWidth = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--gap-width")
    );
    const totalWidth = (slideWidth + gapWidth) * slides.length;
    const duplicatedTotalWidth = totalWidth * 2;
    const halfTotalWidth = duplicatedTotalWidth / 2;

    carouselTrack.style.setProperty("--total-width", `${halfTotalWidth}px`);

    const baseDuration = 40; // secondes | default = 40
    const baseWidth = 5000; // px | default = 5000
    const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;

    carouselTrack.style.setProperty("--scroll-duration", `${scrollDuration}s`);
  };

  populateCarouselTrack(slidesData);
});
