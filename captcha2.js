document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".monkey-image"); // Select all monkey images
    const verifyButton = document.querySelector("#verify-button"); // Select the verify button

    // Function to handle image click
    images.forEach(image => {
        image.addEventListener("click", function () {
            // Remove the "selected" class from all images
            images.forEach(img => img.classList.remove("selected"));
            
            // Add the "selected" class to the clicked image
            this.classList.add("selected");

            // Enable the verify button when an image is clicked
            verifyButton.disabled = false;
            verifyButton.classList.add("enabled"); // Add enabled class for styling
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".monkey-image"); // Select all monkey images

    // Function to handle image click
    images.forEach(image => {
        image.addEventListener("click", function () {
            // Remove the "selected" class from all images
            images.forEach(img => img.classList.remove("selected"));
            
            // Add the "selected" class to the clicked image
            this.classList.add("selected");
        });
    });
});

