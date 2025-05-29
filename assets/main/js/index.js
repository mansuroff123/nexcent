// for navbar active class
document.addEventListener('DOMContentLoaded', function() {
    const navlinks = document.querySelectorAll('.nav-link')

    navlinks.forEach(link => {
        link.addEventListener("click", function() {
            navlinks.forEach(l => l.classList.remove("active"))

            this.classList.add('active')
        })
    })
})

// navbar scrolling shadow effect
const navbar = document.querySelector("nav.my_nav")

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow')
    } else {
        navbar.classList.remove('shadow')
    }
})