
    // document.addEventListener("DOMContentLoaded", function() {
    //     const menuToggle = document.getElementById('menu-toggle');
    //     const navMenu = document.querySelector('.nav-menu');

    //     if (menuToggle && navMenu) {
    //         menuToggle.addEventListener('click', function() {
    //             navMenu.classList.toggle('show');
    //         });
    //     }
    // });

    let menu = document.querySelector('#menu-toggle');
    let navbar = document.querySelector('.nav-menu');
    
    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('show');
    };
    
    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('show');
    };

    function myalert() {
        message("order is confirmed");
    }