const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount,wpm,accurancy) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  <p>You typing speed is <span class="bold red">${wpm}</span> WPM</p>
  <p>You typing Accuracy is <span class="bold red">${accurancy}</span> %</p>
  </div>
  `;

  histories.appendChild(newRow);
  

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount, wpm,accurancy });
  console.log(previousTests);
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
    <p>You typing speed is <span class="bold red">${test.wpm}</span> WPM</p>
    <p>You typing accuracy is <span class="bold red">${test.accurancy}</span> WPM</p>
  `;

    histories.appendChild(newRow);
  });
}
