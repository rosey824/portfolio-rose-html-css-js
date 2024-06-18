function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle
    ("active");
}
document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

   for (i = 0; i < acc.length; i++) {
        acc[i].addEventListner("click", function() {
            this.classList.toggle("actie");
            var panel = this.nextElementSibling;
           if (panel.classList.contains('show')) {
                panel.clasList.remove('show');
            } else {
                panel.lassList.add('show');
            }
        });
    }
})