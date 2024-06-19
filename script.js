// slide function of the nav tab 

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const logo = document.getElementById('logo');
    const sidebarContents = document.getElementsByClassName('sidebar-contents');

    function addActiveClass() {
        sidebar.classList.add('active');
    }

    function removeActiveClass(event) {
        if (!sidebar.contains(event.relatedTarget)) {
            sidebar.classList.remove('active');
        }
    }

        sidebar.addEventListener('mouseenter', addActiveClass);
        sidebar.addEventListener('mouseleave', removeActiveClass);

        logo.addEventListener('mouseenter', addActiveClass);
        logo.addEventListener('mouseleave', removeActiveClass);

        Array.from(sidebarContents).forEach(sidebarContents => {
            sidebarContents.addEventListener('mouseenter', addActiveClass);
            sidebarContents.addEventListener('mouseleave', removeActiveClass);
        })
});


// hovering over the elements of the nav tab 

document.addEventListener('DOMContentLoaded',function () {
    const navItem = document.getElementsByClassName('nav-item');

    Array.from(navItem).forEach(navItem => {
        
        function addActiveClass () {
            navItem.classList.add('active');
            console.log('mousein');
        }
    
        function removeActiveClass (event) {
            if (!navItem.contains(event.relatedTarget)){
                navItem.classList.remove('active');
                console.log('mouseout');
            }
        }
        navItem.addEventListener('mouseover', addActiveClass);
        navItem.addEventListener('mouseleave', removeActiveClass);
    })
});







































// document.addEventListener('DOMContentLoaded', function() {
//     const navItem= document.getElementsByClassName('icon-content');
//     const icon = document.getElementsByClassName('icon');

//     Array.from(navItem).forEach(navItem => {
//         navItem.addEventListener('mouseenter', () => {
//             console.log('mouse-in');
//             navItem.classList.add('active');
//         });
//     });

//     Array.from(navItem).forEach(navItem => {
//         navItem.addEventListener('mouseout', function(event) {
//             Array.from(icon).forEach(icon => {
//                 if(!icon.contains(event.relatedTarget)){
//                     navItem.classList.remove('active');
//                     console.log('mouse-out');
//                 }
//             });
//             // navItem.classList.add('active');
//         });
//     });

//     Array.from(icon).forEach(icon => {
//         icon.addEventListener('mouseenter', () => {
//             console.log('mouse-in');
//             icon.classList.add('active');
//         });
//     });

//     Array.from(icon).forEach(icon => {
//         icon.addEventListener('mouseout', function(event) {
//             Array.from(navItem).forEach(navItem => {
//                 if(!navItem.contains(event.relatedTarget)){
//                     icon.classList.remove('active');
//                     console.log('mouse-out');
//                 }
//             });
//             // navItem.classList.add('active');
//         });
//     });
// });


// document.addEventListener('DOMContentLoaded',function(){
//     const navCont = document.getElementById("nav-container");
//     const navItem = document.getElementsByClassName("nav-item");

//     Array.from(navItem).forEach(navItem => {
//         navCont.addEventListener('mouseover', () => {
//             navItem.classList.add('active');
//             console.log('mouse-in');
//         })

//         navItem.addEventListener('mouseout', () =>{
//             navItem.classList.remove('active');
//             console.log('mouse-out');
//         })

//         navCont.addEventListener('mouseout', () => {
//             navItem.classList.remove('active');
//             console.log('mouse-out');
//         })
        
//     })


// });