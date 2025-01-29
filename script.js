let menu = document.getElementById('menu-icon');
let navlist = document.getElementById('navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}