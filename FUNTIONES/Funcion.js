// Script para abrir/cerrar el sidebar
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        content.classList.toggle('active');
    });
});