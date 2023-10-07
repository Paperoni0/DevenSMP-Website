const pollForm = document.getElementById("pollForm");
const resultsContainer = document.getElementById("results");
const crabResult = document.getElementById("crabResult");
const armadilloResult = document.getElementById("armadilloResult");
const penguinResult = document.getElementById("penguinResult");
const crabPercentage = document.getElementById("crabPercentage");
const armadilloPercentage = document.getElementById("armadilloPercentage");
const penguinPercentage = document.getElementById("penguinPercentage");

pollForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedOption = document.querySelector('input[name="mob"]:checked');
    if (!selectedOption) {
        alert("Please select a mob.");
        return;
    }

    const selectedValue = selectedOption.value;

    // Simulate sending data to a server (you would use AJAX in a real application).
    // For this example, we'll use localStorage to store and retrieve results.
    const storedResults = JSON.parse(localStorage.getItem("pollResults")) || {
        crab: 0,
        armadillo: 0,
        penguin: 0,
    };

    storedResults[selectedValue]++;
    localStorage.setItem("pollResults", JSON.stringify(storedResults));

    displayResults();
});

function displayResults() {
    const storedResults = JSON.parse(localStorage.getItem("pollResults"));

    const totalVotes = storedResults.crab + storedResults.armadillo + storedResults.penguin;

    const crabPercent = ((storedResults.crab / totalVotes) * 100).toFixed(2);
    const armadilloPercent = ((storedResults.armadillo / totalVotes) * 100).toFixed(2);
    const penguinPercent = ((storedResults.penguin / totalVotes) * 100).toFixed(2);

    crabResult.textContent = `Crab: ${crabPercent}%`;
    armadilloResult.textContent = `Armadillo: ${armadilloPercent}%`;
    penguinResult.textContent = `Penguin: ${penguinPercent}%`;

    crabPercentage.textContent = `${crabPercent}%`;
    armadilloPercentage.textContent = `${armadilloPercent}%`;
    penguinPercentage.textContent = `${penguinPercent}%`;

    resultsContainer.style.display = "block";
    pollForm.style.display = "none";
}

// Check if the user has voted before
const storedResults = JSON.parse(localStorage.getItem("pollResults"));
if (storedResults && (storedResults.crab > 0 || storedResults.armadillo > 0 || storedResults.penguin > 0)) {
    displayResults();
}
