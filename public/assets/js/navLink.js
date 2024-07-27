document.addEventListener("DOMContentLoaded", function() {
    // Function to update active link
    function updateActiveLink() {
        // Get current page URL
        var currentPage = window.location.pathname.split("/").pop();

        // Get all nav links
        var navLinks = document.querySelectorAll('.nav-link');

        // Loop through nav links
        navLinks.forEach(function(link) {
            // Remove active class from all links
            link.classList.remove('active-link');

            // Check if link's href matches current page
            if(link.getAttribute('href') === currentPage) {
                // Add active class
                link.classList.add('active-link');
            }
        });
    }

    // Initially update active link
    updateActiveLink();

    // Add click event listener to nav links for dynamic update
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Change window location to the href of the clicked link
            window.location.href = this.getAttribute('href');

            // Update active link
            updateActiveLink();
        });
    });
});

