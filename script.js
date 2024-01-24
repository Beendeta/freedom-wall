window.submitMessage = function () {
        const message = messageInput.value.trim();

        if (message !== "") {
            fetch('http://localhost:3000/submit-message', {  // Update the URL with your server's URL
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
                context.clearRect(0, 0, canvas.width, canvas.height);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        } else {
            alert("Please enter a message before submitting.");
        }
    };
});
