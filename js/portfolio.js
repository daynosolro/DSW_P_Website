const botones = document.querySelectorAll('[data-filter]');
const proyectos = document.querySelectorAll('.portfolio-item-container');

botones.forEach((button,index) => {
    button.addEventListener('click', function (e) {
        const value = this.getAttribute('data-filter');

        botones.forEach(btn => btn.classList.remove('active'));
        botones[index].classList.add('active');

        proyectos.forEach(proyecto => {
            if (value === 'all' || proyecto.getAttribute('data-category') === value) {
                proyecto.style.display = 'block';
            } else {
                proyecto.style.display = 'none';
            }
        });
    });
});