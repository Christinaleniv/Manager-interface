function addTask() {
    const interface = document.getElementById('manager-interface');

    // Додаємо зображення завдань
    const image1 = document.createElement('img');
    image1.src = 'pexels-tony-schnagl-6469030.jpg';
    image1.alt = 'Task Image 1';
    image1.classList.add('task-image');
    interface.appendChild(image1);

    const image2 = document.createElement('img');
    image2.src = 'pexels-oleksandr-p-3159812.jpg';
    image2.alt = 'Task Image 2';
    image2.classList.add('task-image');
    interface.appendChild(image2);

    // Додаємо частинки
    const particle = document.createElement('div');
    particle.className = 'particle';
    const randomX = Math.random() * (interface.offsetWidth - 20);
    const randomY = Math.random() * (interface.offsetHeight - 20);
    particle.style.left = randomX + 'px';
    particle.style.top = randomY + 'px';
    interface.appendChild(particle);

    // Закриваємо функцію addTask()
}

function removeTask() {
    const taskImages = document.querySelectorAll('.task-image');
    taskImages.forEach(image => {
        image.remove();
    });

    // Зміна класів кнопок для анімації
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.add('rotate');
    });

    setTimeout(() => {
        buttons.forEach(button => {
            button.classList.remove('rotate');
        });
    }, 2000);
}