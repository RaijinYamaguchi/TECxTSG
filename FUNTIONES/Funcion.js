document.addEventListener("DOMContentLoaded", () => {
    // Elementos del DOM
    const toggleButton = document.getElementById("toggleButton");
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const header = document.querySelector("header");
    const images = document.querySelectorAll(".image-fader img");
    const form = document.querySelector("form");
    let currentIndex = 0;

    // **Funcionalidad del Menú Desplegable**
    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        content.classList.toggle("active");
    });

    // **Modo Oscuro**
    // Cargar el estado del modo oscuro desde localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        enableDarkMode();
    }

    // Alternar modo oscuro
    darkModeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add("dark-mode");
        sidebar.classList.add("dark-mode");
        header.classList.add("dark-mode");
        form.classList.add("dark-mode"); // Agregar clase al formulario
        darkModeToggle.textContent = "Modo Claro";
        localStorage.setItem("darkMode", "enabled");
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        sidebar.classList.remove("dark-mode");
        header.classList.remove("dark-mode");
        form.classList.remove("dark-mode"); // Quitar clase del formulario
        darkModeToggle.textContent = "Modo Oscuro";
        localStorage.setItem("darkMode", "disabled");
    }

    // **Carrusel de Imágenes**
    function changeImage() {
        // Ocultar la imagen actual
        images[currentIndex].classList.remove("active");

        // Avanzar al siguiente índice (o reiniciar si es la última imagen)
        currentIndex = (currentIndex + 1) % images.length;

        // Mostrar la nueva imagen
        images[currentIndex].classList.add("active");
    }

    // Cambiar la imagen cada 3 segundos
    setInterval(changeImage, 3000);
});