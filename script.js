document.addEventListener("DOMContentLoaded", function () {
    const checkBox = document.querySelector(".checkBox");
    const submitButton = document.getElementById("submitButton");

    // Hover effect: changes image to checkbox2.png
    const hoverOn = function () {
        checkBox.src = "checkbox2.png";
    };

    // Revert back to checkbox1.png when mouse leaves
    const hoverOff = function () {
        checkBox.src = "checkbox1.png";
    };

    // Attach the hover event listeners
    checkBox.addEventListener("mouseover", hoverOn);
    checkBox.addEventListener("mouseout", hoverOff);

    // Click event: change image to confirm.png permanently
    checkBox.addEventListener("click", function () {
        checkBox.src = "confirm.png";

        // Remove hover events to ensure the image remains as confirm.png
        checkBox.removeEventListener("mouseover", hoverOn);
        checkBox.removeEventListener("mouseout", hoverOff);

        // Optionally, you can also disable the click event itself to prevent further changes
        checkBox.removeEventListener("click", arguments.callee);

        // Enable the submit button when the image is confirm.png
        submitButton.disabled = false;
    });
});
