$(function(){     

let circleProgresss = document.querySelectorAll('.circle-progress');
console.log(document.querySelectorAll('.circle-progress'));
let percents = document.querySelectorAll('.percent');

let speed = 30;

let targetElement = document.getElementById('skills');
console.log(document.getElementById('skills'));

function chartList(){
    let targetPosition = targetElement.offsetTop;
    console.log(targetElement.offsetTop);

    let currentPosition = window.scrollY;
    console.log( window.scrollY);

    if(currentPosition>=targetPosition) {
        circleProgresss.forEach(function(circleProgress, index) {
            let startProgress = 0;
            let endProgress = parseInt(percents[index].innerText);
                
            let progress = setInterval(function() {
                startProgress++;
                percents[index].innerText = startProgress + '%'; 
        
                circleProgress.style.background = `conic-gradient(#627099 ${startProgress * 3.6}deg, #e8e8e8 0deg`;
        
                if (startProgress == endProgress) {
                    clearInterval(progress);
                }
            }, speed);
        });  
        window.removeEventListener('scroll', chartList);
    };
};
window.addEventListener('scroll', chartList);


// let text = document.querySelector('#profile_text > p > span').innerText;
// document.querySelector('#profile_text > p > span').innerText = '';
// let index = 0;
// let timerId = 0;

// function typing() {
//     let typeWrite = document.querySelector('#profile_text > p > span');
//     if(index < text.length) {
//         typeWrite.innerText += text.charAt(index++);
//     } else {
//         index = 0;
//         typeWrite.textContent = '';
//     }
// }
// timerId = setInterval(typing, 300);

// let items = document.querySelectorAll('.img-item');
// console.log(document.querySelectorAll('.img-item'));

// for(let i = 0; i < items.length; i++) {
//     let keyframes = {
//         opacity: [0,1],
//         translate: ['0 50px', 0],
//     };
//     let options = {
//         duration: 600,
//         delay: i*300,
//         fill:'forwards'
//     };
//     items[i].animate(keyframes, options);
// }

let lines = document.getElementById('text').innerHTML.split('<br>');
console.log(document.getElementById('text').innerHTML.split('<br>'));
let textContainer = document.getElementById('text');
console.log(document.getElementById('text'));
textContainer.innerHTML = '';

lines.forEach(function(line, index) {
    let paragraph = document.createElement('p'); 
    paragraph.innerHTML = line; 
    paragraph.style.opacity = '0';

    paragraph.innerHTML = paragraph.innerHTML.replace('<span>', '<span style="font-weight: bold;">');

    setTimeout(function() {
        paragraph.style.transition = 'opacity 1s';
        paragraph.style.opacity = '1';
      
    }, index * 1000);

    textContainer.appendChild(paragraph);
});



    let $slide = $("#slide");
    let $imageList = $slide.children(".image-list");
    let delay = 5000;
    let duraiton = 300;
    let timerId = 0;
    let photoIndex = 0;

    let $bullets = $("<ul></ul>")
                        .addClass("bullets")
                        .appendTo($slide);

    $imageList.children().each(function() { 
        $("<li></li>")
            .append("<a href='#'></a>")
            .appendTo($bullets);
    });

    let $bulletList = $bullets.find("a");
    $bulletList.eq(photoIndex).addClass("on");

    function nextImageSlide() {
        photoIndex++;
        if(photoIndex == $bulletList.length) photoIndex = 0;

        $bulletList.removeClass("on").eq(photoIndex).addClass("on");

        $imageList.animate({left:"-100%"}, duraiton, function() { 
            $(this).removeAttr("style")
                    .children(":first").appendTo(this);
        });

    }

    timerId = window.setInterval(nextImageSlide, delay);

    $slide.hover(
        function() { 
            window.clearInterval(timerId);
        },
        function() { 
            timerId = window.setInterval(nextImageSlide, delay);
        }
    );

    $bulletList.on("click", function(event) { 

        event.preventDefault();

        let clickedIndex = $bulletList.index(this);
        let step = clickedIndex - photoIndex;

        if(!step) return;

        photoIndex = clickedIndex;

        $bulletList.removeClass("on").eq(photoIndex).addClass("on");

        if(step > 0) {

            $imageList.animate({left:(-step*100)+"%"}, duraiton, function() { 

                $(this).removeAttr("style")
                        .children(":lt("+step+")")
                        .appendTo(this);
            });
        }
        else {
            $imageList
                .prepend( $imageList.children(":gt("+(step-1)+")"))
                .css({left:(step*100)+"%"})
                .animate({left:0}, duraiton);
        }

    });
    
});


