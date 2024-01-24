document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("drawing-canvas");
    const context = canvas.getContext("2d");
    const messageInput = document.getElementById("message-input");

    let isDrawing = false;

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function draw(e) {
        if (!isDrawing) return;

        context.lineWidth = 2;
        context.lineCap = "round";
        context.strokeStyle = "#000";

        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }

    window.submitMessage = function () {
        const message = messageInput.value.trim();

        if (message !== "") {
            // Here you can implement the logic to send the message to your server or handle it as needed
            console.log("Message submitted:", message);
            messageInput.value = "";
            context.clearRect(0, 0, canvas.width, canvas.height);
        } else {
            alert("Please enter a message before submitting.");
        }
    };
});
