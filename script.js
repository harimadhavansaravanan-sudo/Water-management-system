let points = 0;

function updateDashboard() {
  const el = document.getElementById("points");
  if (el) el.textContent = points;
}

function saveTasks() {
  const checked = document.querySelectorAll(".task:checked").length;
  const earned = checked * 5;
  points += earned;

  const result = document.getElementById("trackerResult");
  if (result) {
    result.textContent = "You completed " + checked + " tasks and earned " + earned + " points.";
  }

  updateDashboard();
}
