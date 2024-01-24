window.submitMessage = function () {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== "") {
        fetch('http://localhost:3000/submit-message', {  // Update to your local server URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Message submitted:', data);
            messageInput.value = "";
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    } else {
        alert("Please enter a message before submitting.");
    }
};
