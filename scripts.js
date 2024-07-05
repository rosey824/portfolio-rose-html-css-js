function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle
    ("active");
}

document.addEventListener('DOMContentLoaded', function () {
    var accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(function (accordion) {
        accordion.addEventListener('click', function () {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
