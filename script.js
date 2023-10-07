// Initialize vote counts for each option
let votes = [0, 0, 0];
let hasVoted = false;

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
    if (!hasVoted) {
        votes[optionIndex]++;
        updateResults();
        hasVoted = true;

        // Disable all options after voting
        const options = document.querySelectorAll('.poll .options .answer');
        options.forEach((option) => {
            option.classList.add('disabled');
        });
    }
}
