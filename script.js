const container = document.querySelector('.scrolling-container');
let scrollAmount = 0;

function autoScroll() {
    scrollAmount += 1;
    container.scrollLeft = scrollAmount; // Scroll horizontally

    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
    }
}

function resizeContainer() {
    container.style.width = window.innerWidth + 'px';
    container.style.height = window.innerHeight + 'px';
}

// Initial resize
resizeContainer();

// Resize on window resize
window.addEventListener('resize', resizeContainer);

setInterval(autoScroll, 15); // Adjust the speed as needed