$(function(){

let photo = function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateY(20px)';
        }
    });
};

let observerOptions = {
    threshold: 0.1
};

let observer = new IntersectionObserver(photo, observerOptions);
let elements = document.querySelectorAll('#intro-container > div > img');

elements.forEach(function(element) {
    observer.observe(element);
});


    let $slide = $("#insta");
    let $slideImage = $slide.children("ul");
    let delay = 3000;
    let duration = 1000;
    let timerId = 0;

    function nextPosterSlide() {
        $slideImage.css({
            left:"-25%",
            transitionDuration:duration +"ms"
        });

        window.setTimeout(function() { 
            $slideImage.removeAttr("style")
                        .children(":first").appendTo($slideImage);
        }, duration);
    }

    timerId = window.setInterval(nextPosterSlide, delay);

    $slide.hover (
        function(){
            window.clearInterval(timerId)
        },
        function(){
            timerId = window.setInterval(nextPosterSlide, delay);
        }
    )
    
});



