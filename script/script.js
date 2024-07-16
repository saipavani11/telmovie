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

// hover on the play button

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelectorAll('.transition-container .play-btn');

    Array.from(btn).forEach(btn => {
        
        function addActiveClass () {
            btn.classList.add('active');
            console.log('mousein');
        }
    
        function removeActiveClass (event) {
            if (!btn.contains(event.relatedTarget)){
                btn.classList.remove('active');
                console.log('mouseout');
            }
        }
        btn.addEventListener('mouseover', addActiveClass);
        btn.addEventListener('mouseleave', removeActiveClass);
    })
});

// sliding of the main-contents of the home page

document.addEventListener('DOMContentLoaded', function() {
    let list = document.querySelector('.transition-container .main-bg');
    let items = document.querySelectorAll('.transition-container .main-bg .main-content');
    let dots = document.querySelectorAll('.transition-container .dots li');
    let prev = document.getElementById('prev');
    const next = document.getElementById('next');
    
    let active = 0;
    let lengthItems = items.length - 1;

    if (!list) {
        console.error('Element not found');
    }

    if (!list || items.length === 0) {
        console.error('Required elements not found');
        return;
    }

    
    next.onclick = function(){
        // active += 1 ;
        // if (active >= items.length) {
        //     active = items.length - 1;
        // }

        if(active + 1 > lengthItems){
            active = 0;
        }else{
            active = active +  1;
        }

        reloadSlider();
    }
    
    prev.onclick = function() {
        // active -= 1;
        // if (active < 0) {
        //     active = 0; // Prevent going before the first slide
        // }

        if(active-1<0){
            active = lengthItems;
        }else{
            active = active-1;
        }
        reloadSlider();
    };

    // to slide automatically 
    let refreshSlider = setInterval(()=> {next.click()}, 3000);
    
    function reloadSlider(){
        let checkLeft = items[active].offsetLeft;
        // console.log('Active slide:', active);
        // console.log('Offset left:', checkLeft);
        list.style.left = -checkLeft + 'px';
        let lastActiveDot = document.querySelector('.transition-container .dots li.active');
        
        if (dots.length > 0 && dots[active]) {
            dots[active].classList.add('active');
        } else {
            console.log('No dots found or invalid active index');
        }
        
        // lastActiveDot.classList.remove('active');
        if (lastActiveDot) {
            lastActiveDot.classList.remove('active');
        } else {
            console.log('No active dot found');
        }


        dots[active].classList.add('active');
        clearInterval(refreshSlider);
        refreshSlider = setInterval(()=> {next.click()}, 10000);
    }

    reloadSlider();
    
    dots.forEach((li,key) => {
        li.addEventListener('click',function(){
            active = key;
            reloadSlider();
        })
    });

});

// making the cards active on the main-container

document.addEventListener('DOMContentLoaded',function() {
    let series_img = document.getElementsByClassName('series-img-details');
    let movie_img = document.getElementsByClassName('movie-img-details');
    // let container = document.getElementById('series');

    function addActiveClass(event){
        event.currentTarget.classList.add('active');
        // container.classList.add('active');
        console.log('working');
        
    }
    function removeActiveClass(event){
        if(!event.currentTarget.contains(event.relatedTarget)){
            event.currentTarget.classList.remove('active');
            // container.classList.remove('active');
            console.log('mouseout');
        }
    }

    Array.from(series_img).forEach(series_img => {
        series_img.addEventListener('mouseenter',addActiveClass);
        series_img.addEventListener('mouseleave',removeActiveClass);
    })

    Array.from(movie_img).forEach(movie_img => {
        movie_img.addEventListener('mouseenter',addActiveClass);
        movie_img.addEventListener('mouseleave',removeActiveClass);
    })

});

// activating each button (watch now and heart) of the card
document.addEventListener('DOMContentLoaded',function () {
    let btn = document.querySelectorAll('.rest-container .play-btn');
    let heart = document.querySelectorAll('.rest-container .bxs-heart');

    
    Array.from(btn).forEach(btn => {
        
        function addActiveClass () {
            btn.classList.add('active');
            console.log('mousein');
        }
    
        function removeActiveClass (event) {
            if (!btn.contains(event.relatedTarget)){
                btn.classList.remove('active');
                console.log('mouseout');
            }
        }
        btn.addEventListener('mouseover', addActiveClass);
        btn.addEventListener('mouseleave', removeActiveClass);
    })

    Array.from(heart).forEach(heart => {
        
        function addActiveClass () {
            heart.classList.add('active');
            console.log('mousein');
        }
    
        function removeActiveClass (event) {
            if (!heart.contains(event.relatedTarget)){
                heart.classList.remove('active');
                console.log('mouseout');
            }
        }
        heart.addEventListener('mouseover', addActiveClass);
        heart.addEventListener('mouseleave', removeActiveClass);
    })
});

document.addEventListener('DOMContentLoaded',function(){
    window.addEventListener('scroll',reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.rest-container .reveal');

        for (var i = 0; i < reveals.length; i++){

            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 92;

            if(revealTop < windowHeight - revealpoint){
                reveals[i].classList.add('active');
            }else{
                reveals[i].classList.remove('active')
            }
        }
    }
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