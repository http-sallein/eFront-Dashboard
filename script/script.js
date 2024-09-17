let listArray = document.querySelectorAll('li');

listArray.forEach(li => {
    li.addEventListener('click', ({target}) => {

        listArray.forEach(li => {
            if(li != target && !li.classList.contains('logout')) {
                li.classList.remove('active');
            }
        })
        
        if(target.tagName == 'P') {
            let liFather = target.parentElement;
            liFather.classList.add('active');
        }

        else if(target.tagName == "LI") {
            target.classList.add('active');
        }

        else {
            let liFather = target.parentElement;
            liFather.classList.add('active');
        }
    })
})

const menu = document.querySelector('button');

const toggleMenu = () => {
    const nav = document.querySelector('nav');
    const html = document.querySelector('html');

    nav.classList.toggle('menuActive');

    const menuActive = nav.classList.contains('menuActive');

    menuActive ? html.style.overflowY = 'hidden' : html.style.overflowY = 'auto';
}

menu.addEventListener('click', toggleMenu);