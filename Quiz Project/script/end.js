const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = `Total Score is: ${mostRecentScore} points!`;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value.trim();
});

saveHighScore = (e) => {
    e.preventDefault();
    const user = username.value.trim();
    
    if (user) {
        // Save the high score (you can use localStorage, send to server, etc.)
        console.log(`Saving score for ${user} with score ${mostRecentScore}`);
        // Redirect or perform other actions as needed
    } else {
        alert('Please enter a valid username.');
    }
};
