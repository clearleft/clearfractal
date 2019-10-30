function Intersect() {
    let numbers = document.querySelectorAll(".number");
    let underlines = document.querySelectorAll(".u-underline-animated");

    let offset = (-1 * window.innerHeight) / 4;

    let options = {
        rootMargin: `0px 0px ${offset}px 0px`,
        threshold: 0
    };

    if (numbers.length > 0) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.children[2].style.animationPlayState =
                        "running";
                    entry.target.children[2].style.webkitAnimationPlayState =
                        "running";
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        numbers.forEach(number => {
            observer.observe(number);
        });
    }

    if (underlines.length > 0) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = "running";
                    entry.target.style.webkitAnimationPlayState = "running";
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        underlines.forEach(underline => {
            observer.observe(underline);
        });
    }
}

export default Intersect;
