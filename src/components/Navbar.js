const navbar = document.querySelectorAll('navbar');
let navlink = document.querySelectorAll('navlink');


for (let i = 0; i < navbar.length; i++) {
    let item = navbar[i];
    let type = item.getAttribute('type');
    // type==='mobile' ? item.classList.add('navbar-mobile') : item.classList.add('navbar-desktop');
    
    if (type === 'desktop') {
        item.classList.add('hidden', 'sm:flex', 'flex-row', 'w-full', 'h-12', 'justify-center', 'items-center', 'gap-4', 'shadow-md', 'font-semibold');
    } else if (type === 'mobile') {
        item.classList.add('sm:hidden', 'flex', 'flex-col', 'shadow-md', 'justify-center', 'items-center', 'py-2');
        const mobileMenu = item.innerHTML;
        item.innerHTML = `
        <div class="w-full flex flex-row justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list w-6 h-6 cursor-pointer my-1 mx-2 mobile-btn"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
        </div>
        <div class="sm:hidden hidden flex-col justify-center items-center py-2 mobile-menu">
        ${mobileMenu}
        </div>
        `;
    }
}

navlink = document.querySelectorAll('navlink');
for (let i = 0; i < navlink.length; i++) {
    let item = navlink[i];
    let link = item.getAttribute('link');
    let type = item.getAttribute('type');
    item.addEventListener('click', () => {
        type === 'external' ? window.open(link, '_blank') : window.location.href = link;
    })

    item.classList.add('hover:text-blue-500', 'active:text-blue-800', 'cursor-pointer')
}


const menuBtn = document.querySelectorAll('.mobile-btn');

for (let i = 0; i < menuBtn.length; i++) {
    const item = menuBtn[i];
    const menuElement = document.querySelectorAll('.mobile-menu');
    const menu = menuElement[i];
    
    item.addEventListener('click', () => {
        const flex =  menu.classList.contains('flex');
        const hidden = menu.classList.contains('hidden');

        if(flex) {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
        } else if(hidden) {
            menu.classList.add('flex');
            menu.classList.remove('hidden');
        }
    });
}