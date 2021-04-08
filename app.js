// =========== SHOW MENU =============

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that varaibles exist
    if (toggle && nav) {
        // We add the show-menu class to the div tag with nav_menu class
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// ============== REMOVE MENU MOBILE ============

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.querySelector('.nav-menu')
        // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
