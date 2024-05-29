const introLogo = document.getElementById('intro-logo');
window.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    if (scrollTop <= 250) {
        let logoSize = 8 + (scrollTop / 7);
        introLogo.style.width = logoSize + 'vw';
    }
});


document.addEventListener('mousemove', function(event) {
    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const startX = (clientX / windowWidth) * 360; // 360도 범위 내에서 각도 계산
    const startY = (clientY / windowHeight) * 360; // 360도 범위 내에서 각도 계산

    const colors = [
        ['#001f4f', '#111111'],
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    const [colorStart, colorEnd] = colors[randomIndex];

    document.getElementById('intro').style.background = `linear-gradient(${startX}deg, ${colorStart}, ${colorEnd})`;
});

function handleOrientation(event) {
    const alpha = event.alpha; // Z축 (0도 ~ 360도)
    const beta = event.beta; // X축 (-180도 ~ 180도)
    const gamma = event.gamma; // Y축 (-90도 ~ 90도)

    // 각도 값을 0에서 360 사이의 값으로 변환
    const startX = (alpha / 360) * 360;
    const startY = ((beta + 180) / 360) * 360;

    const colors = [
        ['#001f4f', '#111111'],
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    const [colorStart, colorEnd] = colors[randomIndex];

    document.getElementById('intro').style.background = `linear-gradient(${startX}deg, ${colorStart}, ${colorEnd})`;
}

window.addEventListener('deviceorientation', handleOrientation);