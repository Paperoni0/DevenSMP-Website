let votes = [0, 0, 0];

// Function to update the poll results
function updateResults() {
    const totalVotes = votes.reduce((a, b) => a + b, 0);

    // Update percentage values and bars for each option
    const options = document.querySelectorAll('.poll .options .answer');
    options.forEach((option, index) => {
        const percentage = totalVotes === 0 ? 0 : (votes[index] / totalVotes) * 100;
        option.querySelector('.percentage-value').textContent = percentage.toFixed(1) + '%';
        option.querySelector('.percentage-bar').style.width = percentage.toFixed(1) + '%';
    });
}

// Function to handle voting
function vote(optionIndex) {
    votes[optionIndex]++;
    updateResults();
}
