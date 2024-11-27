// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const genderInputs = document.getElementsByName('gender');
    const interestsInputs = document.querySelectorAll('input[name="interests"]');
    const countrySelect = document.getElementById('country');

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission for validation

        // Validate the name
        if (nameInput.value.trim() === '') {
            alert('Please enter your full name.');
            return;
        }

        // Validate the email
        if (!validateEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate the password
        if (passwordInput.value.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // Validate gender selection
        const selectedGender = Array.from(genderInputs).find(input => input.checked);
        if (!selectedGender) {
            alert('Please select your gender.');
            return;
        }

        // Validate at least one interest checkbox is selected
        const selectedInterests = Array.from(interestsInputs).filter(input => input.checked);
        if (selectedInterests.length === 0) {
            alert('Please select at least one interest.');
            return;
        }

        // Display the form data in the console
        console.log('Form submitted!');
        console.log('Name:', nameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Password:', passwordInput.value);
        console.log('Gender:', selectedGender.value);
        console.log('Interests:', selectedInterests.map(input => input.value).join(', '));
        console.log('Country:', countrySelect.value);

        alert('Form submitted successfully!');
        form.reset(); // Reset the form
    });

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
