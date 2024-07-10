// script.js

const claimForm = document.getElementById('claimForm');
const resultDiv = document.getElementById('result');

claimForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const address = this.elements.address.value.trim();

    if (!address) {
        alert('Please enter your wallet address.');
        return;
    }

    // Example logic to claim tokens (replace with your actual logic)
    try {
        // Simulated API call or transaction
        const response = await fetch('https://api.example.com/claim-tokens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address })
        });

        const data = await response.json();

        // Example response handling (adjust as needed)
        if (response.ok) {
            resultDiv.innerHTML = `<p>Success! Tokens claimed: ${data.tokens}</p>`;
        } else {
            resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
        }
    } catch (error) {
        console.error('Error claiming tokens:', error);
        resultDiv.innerHTML = `<p>Error: Failed to claim tokens.</p>`;
    }
});
