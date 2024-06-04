let flowTextElement = document.querySelector('#first-text');
console.log(flowTextElement);

let flowText = flowTextElement.innerText;
console.log(flowText);

let flowArray = flowText.split(' ');
console.log(flowArray);

function infinite(element, textArray) {
    textArray.push(...textArray);
    element.innerText = '';
    for (let i = 0; i < textArray.length; i++ ) {
        element.innerText += `${textArray[i]}\u00A0\u00A0`; 
    }
};

infinite(flowTextElement, flowArray);

let count = 0;

function marqueeText (count, element, direction) {
    if (count > element.scrollWidth/2) {
        element.style.transform = `translateX(0)`; 
        count = 0;
    } else {
        element.style.transform = `translateX(${direction * count}px)`;
    }
    return count;

}

function animate () {
    count++;

    count = marqueeText(count, flowTextElement, -1);

    window.requestAnimationFrame(animate);
}

animate();

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.sort > li > a');
    console.log(buttons);
    let items = document.querySelectorAll('#pic > li');
    console.log(items);

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            let filter = event.target.dataset.filter;
            sortItems(filter);
            console.log(filter);
        });
    });

    function sortItems(filter) {
        let itemsArray = Array.from(items);
        console.log(itemsArray);
        
        itemsArray.sort(function(a, b) {
            if (filter === 'new') {
                return parseInt(a.dataset.new) - parseInt(b.dataset.new);
            } else if (filter === 'name') {
                return a.dataset.name.localeCompare(b.dataset.name);
            } else if (filter === 'hit') {
                return parseInt(a.dataset.hit) - parseInt(b.dataset.hit);
            } else {
                return 0;
            }
        })

        let picContainer = document.getElementById('pic');
        picContainer.innerHTML = '';
        itemsArray.forEach(function(item) {
            picContainer.appendChild(item);
        });
    }
});