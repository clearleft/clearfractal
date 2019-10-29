function Numbers() {
    let offset = (-1 * window.innerHeight) / 4;

    let options = {
        rootMargin: `0px 0px ${offset}px 0px`,
        threshold: 1.0
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target.children[2]);
                entry.target.children[2].style.animationPlayState = "running";
                entry.target.children[2].style.webkitAnimationPlayState =
                    "running";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    let numbers = document.querySelectorAll(".number");

    numbers.forEach(number => {
        observer.observe(number);
    });
}

export default Numbers;
