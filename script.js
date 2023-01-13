let active = document.getElementById('moreless');

active.addEventListener('click', function() {
    let container = document.querySelector('.container');

    container.classList.toggle('active');

    if (container.classList.contains('active')) {
        return active.textContent = ('Ler Menos');
    }

    active.textContent = ('Ler Mais');

});