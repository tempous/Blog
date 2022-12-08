document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');

toggle.addEventListener("click", () => {
    const bodyCheck = body.classList.contains('dark');
    if (bodyCheck) {
        body.className = ''
    } else {
        body.className = "dark"
    }
})

//const meta = document.querySelector('meta[name="color-scheme"]');
//let colorScheme = 'light';
//meta.content = colorScheme
//if (!window.frameElement) {
//    window.setInterval(() => {
//        colorScheme = colorScheme === 'light' ? 'dark' : 'light';
//        document.documentElement.style.colorScheme = colorScheme;
//        meta.content = colorScheme;
//        const root = window.frames[0].document.documentElement;
//        root.style.colorScheme = colorScheme;
//        root.querySelector('meta[name="color-scheme"]').content = colorScheme;
//    }, 3000);
//}
