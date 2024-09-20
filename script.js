document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('not-robot');
    const submitBtn = document.getElementById('submit-btn');

    // Disable the submit button by default
    submitBtn.disabled = true;

    // Enable the submit button when the checkbox is checked
    checkbox.addEventListener('change', function () {
        submitBtn.disabled = !this.checked;
    });
});
