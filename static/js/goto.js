$(document).ready(function() {
    // Add smooth scrolling to all links
    $(".toc li").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {


        });

    });
});