//흐르는 텍스트
let firstTextElement = document.querySelector('.first-text');
console.log(firstTextElement);
let secondTextElement = document.querySelector('.second-text');

let firstText = firstTextElement.innerText;
console.log(firstText);
let secondText = secondTextElement.innerText;
console.log(secondText);

let flowText1 = firstText.split(' ');
console.log(flowText1);
let flowText2 = secondText.split(' ');
console.log(flowText2);

function infinity(element, textArray) { 
    textArray.push(...textArray); 
    element.innerText = ''; 
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0`; 
    }
}

infinity(firstTextElement, flowText1);
infinity(secondTextElement, flowText2);

let count1 = 0;
let count2 = 0;

function marqueeText(count, element, direction) { 
    if (count > element.scrollWidth / 2) { 
        element.style.transform = `translateX(0)`; 
        count = 0;
    } else {
        element.style.transform = `translateX(${direction * count}px)`;
    }
    return count; 
}

function animate() { 
    count1++;
    count2++;

    count1 = marqueeText(count1, firstTextElement, -1);
    count2 = marqueeText(count2, secondTextElement, 1);

    window.requestAnimationFrame(animate);
}

animate();

window.addEventListener('scroll', function() {
    count1 += 30
    count2 += 30
});

// 이미지 애니메이션 효과
let items = document.querySelectorAll('.img-item');
console.log(items);

let targetElement = document.getElementById('images');
console.log(targetElement);

function imageList (){
    let targetPosition = targetElement.offsetTop;
    console.log(targetElement.offsetTop);

    let currentPosition = window.scrollY + window.innerHeight;
    console.log(currentPosition);

    if(currentPosition >= targetPosition) {
        
        for(let i = 0; i < items.length; i++) {
            let keyframes = {
                opacity: [0,1],
                transform : ['translateY(50px)', 'translateY(0)'],
            };
            let options = {
                duration : 900,
                delay : i*500,
                fill: 'forwards',
            };
            items[i].animate(keyframes, options);
        }
        window.removeEventListener('scroll',imageList);
    };
};

window.addEventListener('scroll',imageList);


// 스크롤시 gentle monster 왼쪽으로 이동
let bannerText = document.getElementById('banner-text');
let initialPosition, targetPosition;
let speed = 3;

function calculatePositions() {
    initialPosition = bannerText.offsetLeft; // 초기 위치를 저장
    targetPosition = initialPosition - bannerText.offsetWidth; // 목표 위치를 저장
    console.log('initialPosition = ' + initialPosition);
    console.log('targetPosition = ' + targetPosition);
    console.log('offsetWidth = ' + bannerText.offsetWidth);
}

function animateText() {
    let scrollPosition = window.scrollY; // 현재 스크롤 위치를 저장
    let newPosition = initialPosition - (scrollPosition * speed); // 새로운 위치 계산
    console.log('newPosition = ' + newPosition);

    if (newPosition > targetPosition) { // 새로운 위치가 목표 위치보다 크면
        bannerText.style.transform = `translateX(${newPosition}px)`; // 텍스트 이동
        requestAnimationFrame(animateText); // 다음 프레임에 애니메이션 계속
    } else {
        bannerText.style.transform = `translateX(${targetPosition}px)`; // 목표 위치에 도달하면 정지
    }
}

window.addEventListener('scroll', animateText);
window.addEventListener('resize', function() {
    calculatePositions();  // 크기가 변할 때 위치를 다시 계산
    animateText();         // 위치를 다시 계산 후 애니메이션 업데이트
});

// 페이지 로드 시 초기 위치 계산
calculatePositions();

