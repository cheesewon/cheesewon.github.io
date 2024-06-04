document.addEventListener('DOMContentLoaded', function() {
    function photo(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(20px)';
            }
        });
    }

    let observerOptions = {threshold: 0.1};

    let observer = new IntersectionObserver(photo, observerOptions);

    let elements = document.querySelectorAll('#section > div');
    elements.forEach(function(element) {
        observer.observe(element);
    });
});


