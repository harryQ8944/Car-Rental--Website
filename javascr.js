
const sr = ScrollReveal ({
    distance:'60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 800, origin: 'left'})
sr.reveal('.heading',{delay: 800, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 600, origin: 'top'})
sr.reveal('.services-container .box',{delay: 600, origin: 'top'})
sr.reveal('.servicesss-container .box',{delay: 600, origin: 'top'})
sr.reveal('.about-container',{delay: 600, origin: 'top'})
sr.reveal('.reviews-container',{delay: 600, origin: 'top'})
sr.reveal('.newsletter .box',{delay: 400, origin: 'bottom'});
sr.reveal('.premium-container .box',{delay: 600,origin: 'top'})

document.addEventListener("DOMContentLoaded", function() {
    var searchForm = document.getElementById("searchForm");
    
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        var searchValue = document.getElementById("searchInput").value;

        if (searchValue.trim() !== "") {

            var destination = "booking.html?search=" + encodeURIComponent(searchValue);

            window.location.href = destination;
        } else {

            alert("Please enter a search term.");
        }
    });
});

