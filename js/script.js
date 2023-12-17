// setup
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Mood Tracker",
      data: [],
      backgroundColor: ["rgba(255, 26, 104, 0.2)"],
      borderColor: ["rgba(255, 26, 104, 1)"],
      borderWidth: 1,
      tension: 0.5,
    },
  ],
};

// config
const config = {
  type: "line",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (context) => {
            let response;
            switch (context) {
              case 0:
                response = "sad";
                break;
              case 1:
                response = "neutral";
                break;
              case 2:
                response = "happy";
                break;
            }
            return response;
          },
        },
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

// // Instantly assign Chart.js version
// const chartVersion = document.getElementById("chartVersion");
// chartVersion.innerText = Chart.version;

// buttons
const btns = document.querySelectorAll("button");
let days = myChart.data.datasets[0].data;
let labels = myChart.data.labels;
let hours = new Date().getHours().toLocaleString("fr", {
  timeZone: "Europe/Paris",
});
console.log(hours);

// localStorage.setItem("hours", hours);
// let time = localStorage.getItem("hours");
// console.log(time);

// const start = Date.now();
// console.log(start);

const deleteData = () => {
  if (days.length > labels.length) {
    days.length = 0;
  }
  myChart.update();
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(days.length);
    days.push(Number(btn.value));
    deleteData();
    myChart.update();
    console.log(days);
  });
});

// CALENDAR

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
  });
  calendar.render();
});
