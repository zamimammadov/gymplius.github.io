(() => {
    const heroBg = document.querySelector("[data-hero-bg]");
    const prevBtn = document.querySelector("[data-prev]");
    const nextBtn = document.querySelector("[data-next]");

    // SADECE FOTOĞRAF YOLLARI
    const slides = [
        "./assets/Screenshot 2025-12-11 222211.png",
        "./assets/gymplius_red_big_1920x1080.png"
    ];

    const DURATION = 6000;
    let index = 0;
    let timer = null;

    function show(i) {
        if (!heroBg) return;
        index = (i + slides.length) % slides.length; // 0 ↔ son arasında döner
        heroBg.style.backgroundImage = `url("${slides[index]}")`;
    }

    function next() { show(index + 1); }
    function prev() { show(index - 1); }

    // Butonlar
    if (nextBtn) nextBtn.addEventListener("click", next);
    if (prevBtn) prevBtn.addEventListener("click", prev);

    // Otomatik geçiş
    function startTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(next, DURATION);
    }

    // Resimleri önceden yükle (isteğe bağlı)
    slides.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    show(0);
    startTimer();
})();

(() => {
  const cards = Array.from(document.querySelectorAll("[data-plan]"));
    const prev  = document.querySelector("[data-price-prev]");
    const next  = document.querySelector("[data-price-next]");

    if (!cards.length || !prev || !next) return;

    let index = 0;

    function setActive(i) {
        cards.forEach(c => c.classList.remove("is-active"));
    cards[i].classList.add("is-active");
  }

    setActive(index);

  prev.addEventListener("click", () => {
        index = (index - 1 + cards.length) % cards.length;
    setActive(index);
  });

  next.addEventListener("click", () => {
        index = (index + 1) % cards.length;
    setActive(index);
  });
})();

