function Balloon() {
    const root = document.documentElement

    let position = {
        x: 0,
        y: 0
    };

    let x = 0;
    let y = 0;

    let animationFrameId;

    function paint(e) {
        const w = window.innerWidth;
        const h = window.innerHeight;

        const targetPosition = {
            x: ((-(x - w) / (w)) * 18) - 9,
            y: ((-(y - h) / (h)) * 18) - 13
        };

        // lower number, more delay/friction
        // https://codepen.io/rachsmith/post/animation-tip-lerp
        const lerpAmount = 0.009;

        position.x += (targetPosition.x - position.x) * lerpAmount;
        position.y += (targetPosition.y - position.y) * lerpAmount;


        root.style.setProperty('--mouse-x', position.x + "%")
        root.style.setProperty('--mouse-y', position.y + "%")

        animationFrameId = window.requestAnimationFrame(paint);
    }


    function cancel(e) {
        setTimeout(function () {
            window.cancelAnimationFrame(animationFrameId);
        }, 3000);

    }

    const Illustration = document.querySelector('.Illustration');


    Illustration.addEventListener("mouseenter", paint);
    Illustration.addEventListener("mousemove", update);
    Illustration.addEventListener("mouseleave", cancel);


    function update(e) {
        x = e.clientX;
        y = e.clientY;
    }

}

export default Balloon;
