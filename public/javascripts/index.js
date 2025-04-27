document.addEventListener('DOMContentLoaded', function () {
    const runner = document.getElementById('runner');

    runner.addEventListener('click', function () {
        runner.classList.add('running');  // Add 'running' class to trigger animation
    });
});
