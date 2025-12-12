// =============================
// HERO BACKGROUND + CTA SLIDER
// =============================
(() => {
    const heroBg = document.querySelector("[data-hero-bg]");
    const cta = document.querySelector("[data-hero-cta]");
    const prevBtn = document.querySelector("[data-prev]");
    const nextBtn = document.querySelector("[data-next]");

    const slides = [
        {
            bg: "./assets/Screenshot 2025-12-11 222211.png",
            cta: "BUY 9 MTH MEMBERSHIP!"
        },
        {
            bg: "./assets/gymplius_red_big_1920x1080.png",
            cta: "BUY MEMBERSHIP UNTIL 12.11!"
        }
    ];

    const DURATION = 6000;
    let index = 0;
    let timer = null;

    function updateButtons() {
        if (!prevBtn || !nextBtn) return;
        prevBtn.disabled = (index === 0);
        nextBtn.disabled = (index === slides.length - 1);
    }

    function show(i) {
        if (!heroBg || !cta) return;

        index = Math.max(0, Math.min(i, slides.length - 1));

        heroBg.style.backgroundImage = `url("${slides[index].bg}")`;
        cta.textContent = slides[index].cta;

        updateButtons();
    }

    function autoStep() {
        if (slides.length < 2) return;
        const nextIndex = index === slides.length - 1 ? 0 : index + 1;
        show(nextIndex);
    }

    function startTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(autoStep, DURATION);
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            show(index + 1);
            startTimer();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            show(index - 1);
            startTimer();
        });
    }

    // preload
    slides.forEach(slide => {
        const img = new Image();
        img.src = slide.bg;
    });

    show(0);
    startTimer();
})();


// =============================
// PRICES CARDS SLIDER
// =============================
(() => {
    const cards = Array.from(document.querySelectorAll("[data-plan]"));
    const prev = document.querySelector("[data-price-prev]");
    const next = document.querySelector("[data-price-next]");

    if (!cards.length || !prev || !next) return;

    let index = 0;

    function updateButtons() {
        prev.disabled = (index === 0);
        next.disabled = (index === cards.length - 1);
    }

    function setActive(i) {
        cards.forEach(card => card.classList.remove("is-active"));
        cards[i].classList.add("is-active");
        updateButtons();
    }

    setActive(index);

    prev.addEventListener("click", () => {
        if (index > 0) {
            index -= 1;
            setActive(index);
        }
    });

    next.addEventListener("click", () => {
        if (index < cards.length - 1) {
            index += 1;
            setActive(index);
        }
    });
})();


// =============================
// MAP ACTIVATE ON CLICK
// =============================
(() => {
    const mapFrame = document.querySelector(".mapFrame");
    const cover = document.querySelector("[data-map-cover]");

    if (!mapFrame || !cover) return;

    cover.addEventListener("click", () => {
        mapFrame.classList.add("is-active");
    });

    mapFrame.addEventListener("mouseleave", () => {
        mapFrame.classList.remove("is-active");
    });
})();


(() => {
    const prevBtn = document.querySelector("[data-faq-prev]");
    const nextBtn = document.querySelector("[data-faq-next]");

    if (!prevBtn || !nextBtn) return;

    let page = 0; // şimdilik 0–1 arası örnek

    function updateButtons() {
        prevBtn.disabled = (page === 0);
        nextBtn.disabled = (page === 1);
    }

    prevBtn.addEventListener("click", () => {
        page = 0;
        updateButtons();
        // burada sonra: ilk FAQ sayfasını göster
    });

    nextBtn.addEventListener("click", () => {
        page = 1;
        updateButtons();
        // burada sonra: ikinci FAQ sayfasını göster
    });

    updateButtons();
})();
