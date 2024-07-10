// https://www.chartjs.org/docs/latest/getting-started/

// Mon diagramme en barre
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myFirstChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["2017", "2019", "2021", "2022", "2023"],
      datasets: [
        {
          label: "Pourcentage",
          data: [27, 30, 33, 34, 35],
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
});
