document.addEventListener("DOMContentLoaded", () => {
    const myFaqs = document.querySelectorAll(".faq-item");

    myFaqs.forEach((item) => {
        item.addEventListener("click", function () {
            const text = this.querySelector(".faq-text");
            const isOpen = text.classList.contains("is-active");

            document.querySelectorAll(".faq-text.is-active").forEach((activeText) => {
                if (activeText !== text) {
                    gsap.to(activeText, { height: 0, opacity: 0, duration: 0.3 });
                    activeText.classList.remove("is-active");
                }
            });

            if (isOpen) {
                gsap.to(text, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
                text.classList.remove("is-active");
            } else {
                gsap.set(text, { height: "auto" });
                const targetHeight = text.offsetHeight;

                gsap.fromTo(text,
                    { height: 0, opacity: 0 },
                    {
                        height: targetHeight,
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    }
                );
                text.classList.add("is-active");
            }
        });
    });
});