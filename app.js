const navBar = document.querySelector('.navBar');
const menuImg = document.querySelector('.menuImg');
const dropDown = document.querySelector('.dropDown');
const menuList = document.querySelector('.list');

function createDropDown(menu, list) {
    menu.addEventListener('mouseenter', (event) => {
        event.currentTarget.style.visibility = 'collapse';
        list.style.visibility = 'visible';
    })

    list.addEventListener('mouseleave', (event) => {
        event.currentTarget.style.visibility = 'collapse';
        menu.style.visibility = 'visible';
    })
}

createDropDown(menuImg, menuList);