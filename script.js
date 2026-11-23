
const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const email = document.getElementById("email").value.trim();
    const selectedEvent = document.getElementById("event").value;

    const category = document.querySelector(
        'input[name="category"]:checked'
    );

    const interests = document.querySelectorAll(
        'input[name="interests"]:checked'
    );

    const comments = document.getElementById("comments").value.trim();

    if (studentName === "" || email === "" ||
        selectedEvent === "" || category === null) {

        alert("Please fill in all required fields.");
        return;
    }

    let selectedInterests = [];

    interests.forEach(function(interest) {
        selectedInterests.push(interest.value);
    });

    alert(
        "Registration Successful!\n\n" +
        "Student Name: " + studentName +
        "\nEmail: " + email +
        "\nSelected Event: " + selectedEvent +
        "\nStudent Category: " + category.value +
        "\nInterests: " + (selectedInterests.join(", ") || "None") +
        "\nComments: " + (comments || "None")
    );

    registrationForm.reset();

});

console.log("Student Activity Portal Loaded Successfully!");
