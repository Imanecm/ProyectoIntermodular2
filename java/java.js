function currenTime() {
    //CurrenTime se refiere a hora actual.
    let date = new Date();
    // aquí declaramos hh para horas; mm para minutos; y ss para segundos.
    //Las obtemos gracias al date.GetHours, (nos da la hora).
    //Las obtemos gracias al date.GetMinutes, (nos da los minutos).
    //Las obtemos gracias al date.GetSeconds, (nos da loss segundos).
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh == (hh < 10) ? "0" + hh : hh;
    mm == (mm < 10) ? "0" + mm : mm;
    ss == (ss < 10) ? "0" + ss : ss;

    let time = (hh + ":" + mm + ":" + ss);
    // esto es lo que hacer verse la hora.
    let horaActual = document.querySelector('#horaActual');
    horaActual.innerHTML = time;
}
setInterval(currenTime, 1000);

document.querySelectorAll('.service').forEach(service => {
  service.addEventListener('click', () => {
    alert(`Has seleccionado: ${service.querySelector('.servicios-text').textContent}`);
  });
});
//PARTE CARRUSSEL DE FOTOS
const list = document.querySelector('.list');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;

// Función para actualizar el carrusel
function updateCarousel() {
    // Mueve el slider
    list.style.transform = `translateX(-${index * 100}%)`;
    // Actualiza los puntos
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Botón siguiente
nextBtn.addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

// Botón previo
prevBtn.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});

// Click en los puntos
dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        index = dotIndex;
        updateCarousel();
    });
});

// Cambio automático cada 5 segundos
setInterval(() => {
    index = (index + 1) % items.length;
    updateCarousel();
}, 5000);
