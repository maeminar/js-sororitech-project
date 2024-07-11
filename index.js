document.addEventListener("DOMContentLoaded", function () {
  var granimInstance = new Granim({
    element: "#granimCanvas",
    direction: "diagonal",
    states: {
      "default-state": {
        gradients: [
          ["#EB3349", "#F45C43"], // Rouge à orange
          ["#FF8008", "#FFC837"], // Orange à jaune
          ["#4CB8C4", "#3CD3AD"], // Cyan à vert
        ],
        transitionSpeed: 3000, // Transition plus lente
      },
    },
  });

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
  const SLIDES_DATA = [
    // tableau d'objets
    {
      src: "img/image1.jpg",
      description:
        "Travailler dans la tech m'a offert des opportunités incroyables de croissance et d'innovation. J'adore résoudre des problèmes complexes et créer des solutions qui impactent positivement la vie des gens. Clara, développeuse logiciel",
    },
    {
      src: "img/image2.jpg",
      description:
        "Ce que j'aime le plus dans ma carrière en tech, c'est la capacité à diriger des projets fascinants et de travailler avec des équipes talentueuses du monde entier. La flexibilité du travail à distance est un énorme avantage pour l'équilibre vie professionnelle et vie personnelle. ",
    },
    {
      src: "img/image3.jpg",
      description:
        "Dans la cybersécurité, les défis techniques sont stimulants et gratifiants. Toutefois, le manque de représentation féminine peut rendre l'intégration difficile, et j'ai dû lutter contre des stéréotypes sur mes compétences techniques",
    },
    {
      src: "img/image4.jpg",
      description:
        "En tant que data scientist, j'adore explorer des données et découvrir des tendances cachées qui peuvent transformer les stratégies d'entreprise. C'est un domaine en pleine croissance avec beaucoup de potentiel.",
    },
    {
      src: "img/image5.jpg",
      description:
        "Le design UX/UI est ma passion car il combine créativité et technologie pour améliorer l'expérience utilisateur. J'aime voir mes idées prendre vie et aider les gens à interagir plus facilement avec les produits numériques. ",
    },
    {
      src: "img/image6.jpg",
      description:
        "Travailler comme architecte cloud m'a permis d'être à l'avant-garde des technologies émergentes et de jouer un rôle clé dans la transformation numérique des entreprises.",
    },
  ];

  const CAROUSEL = document.querySelector(".carousel-track");

  const createSlide = ({ src, description }) => {
    const SLIDE_ELEMENT = document.createElement("div");
    SLIDE_ELEMENT.className = "slide";

    const IMG_ELEMENT = document.createElement("img");
    IMG_ELEMENT.src = src;
    IMG_ELEMENT.alt = description;

    const overlayElement = document.createElement("div");
    overlayElement.className = "overlay";
    overlayElement.textContent = description;

    SLIDE_ELEMENT.append(IMG_ELEMENT, overlayElement);

    return SLIDE_ELEMENT;
  };

  const populateCarouselTrack = (slides) => {
    const fragment = document.createDocumentFragment();
    slides.forEach((slide) => fragment.appendChild(createSlide(slide)));

    // Duplicate slides to create a seamless loop effect
    slides.forEach((slide) => fragment.appendChild(createSlide(slide)));

    CAROUSEL.appendChild(fragment);

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

    CAROUSEL.style.setProperty("--total-width", `${halfTotalWidth}px`);

    const baseDuration = 40; // secondes | default = 40
    const baseWidth = 5000; // px | default = 5000
    const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;

    CAROUSEL.style.setProperty("--scroll-duration", `${scrollDuration}s`);
  };

  populateCarouselTrack(SLIDES_DATA);

  // COMPTEUR LIBRAIRIE ODOMETER
  function createReverseOdometer(id, start, end, duration) {
    const odometerElement = document.getElementById(id);
    const odometer = new Odometer({
      el: odometerElement,
      value: start,
    });

    let currentNumber = start;
    const intervalTime = 20;
    const step = (start - end) / (duration / intervalTime);

    const intervalId = setInterval(function () {
      currentNumber -= step;
      if (currentNumber <= end) {
        currentNumber = end;
        clearInterval(intervalId);
      }
      odometer.update(Math.round(currentNumber));
    }, intervalTime);
  }

  createReverseOdometer("odometer1", 100, 17, 4000);
  createReverseOdometer("odometer2", 100, 6, 2000);
  createReverseOdometer("odometer3", 100, 23, 2000);
});
