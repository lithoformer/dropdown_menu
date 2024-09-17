const navBar = document.querySelector('.navBar');
const menuImg = document.querySelector('.menuImg');
const dropDown = document.querySelector('.dropDown');
const menuList = document.querySelector('.list');

function createDropDown(menu, list) {
    menu.addEventListener('mouseenter', () => {
        menu.style.opacity = '0.25';
        list.style.visibility = 'visible';
    })

    menu.addEventListener('mouseleave', () => {
        menu.style.opacity = '1';
        list.style.visibility = 'hidden';
    })

    list.addEventListener('mouseenter', () => {
        menu.style.opacity = '0.25';
        list.style.visibility = 'visible';
    })

    list.addEventListener('mouseleave', () => {
        menu.style.opacity = '1';
        list.style.visibility = 'hidden';
    })

    for (const item of list.children) {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'plum';
        })

        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'purple';
        })

    }
}

createDropDown(menuImg, menuList);