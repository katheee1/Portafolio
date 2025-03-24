document.addEventListener("DOMContentLoaded", function () {
    // Asegurar que la página inicial sea la portada y la primera página
    document.querySelector(".cover-right").classList.remove("turn");
    document.querySelector("#turn-1").classList.remove("turn");

    // Restaurar el orden de las páginas para evitar problemas visuales al recargar
    document.querySelector("#turn-1").style.zIndex = "20";
});

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});





