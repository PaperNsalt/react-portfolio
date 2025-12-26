window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY >= 1800 && scrollY < 3600) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});