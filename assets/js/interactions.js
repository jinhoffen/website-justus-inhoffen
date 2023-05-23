document.querySelectorAll('a.show-abstract').forEach(el => {
    el.addEventListener('click', (e) => {
        const sender = e.target;
        const parent = sender.parentNode.parentNode.parentNode.parentNode;
        const toggleTarget = parent.querySelector('.abstract-hidden');
        toggleTarget.classList.toggle('abstract-visible');
    });
});