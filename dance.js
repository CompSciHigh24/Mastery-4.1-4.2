document.addEventListener("DOMContentLoaded", function() {
    const dancers = document.querySelectorAll(".dancer");
    const danceButton = document.getElementById("danceButton");

    danceButton.addEventListener("click", function() {
        dancers.forEach(dancer => {
            dancer.style.animation = "danceMove 0.5s infinite ease-in-out alternate";
        });

        danceButton.innerText = "Dancing!";
        danceButton.disabled = true;

        setTimeout(() => {
            dancers.forEach(dancer => {
                dancer.style.animation = "none";
            });

            danceButton.innerText = "Start Dancing";
            danceButton.disabled = false;
        }, 5000);
    });
});
