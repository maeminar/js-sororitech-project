// https://www.chartjs.org/docs/latest/getting-started/

// DIAGRAMME EN BAR
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myFirstChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["1964", "1984", "2021"],
      datasets: [
        {
          label: "Pourcentage",
          data: [11, 16446, 41889],
          borderWidth: 1,
          backgroundColor: "#a86494",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // FAQ ACCORDEON
  const ACCORDEON_ITEM = document.querySelectorAll(".accordeon_item");

  ACCORDEON_ITEM.forEach((item) => {
    const HEADER = item.querySelector(".accordeon_header");

    HEADER.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});
