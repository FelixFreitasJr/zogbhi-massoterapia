(function () {
    "use strict";

    /* ============ ANO NO RODAPÉ ============ */
    var anoEl = document.getElementById("ano");
    if (anoEl) anoEl.textContent = new Date().getFullYear();

    /* ============ HEADER: ESTADO AO ROLAR ============ */
    var header = document.getElementById("header");
    function atualizarHeader() {
        if (window.scrollY > 40) {
            header.classList.add("is-scrolled");
        } else {
            header.classList.remove("is-scrolled");
        }
    }
    atualizarHeader();
    window.addEventListener("scroll", atualizarHeader, { passive: true });

    /* ============ MENU MOBILE ============ */
    var toggle = document.getElementById("menuToggle");
    var nav = document.getElementById("menuPrincipal");

    function fecharMenu() {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
    }

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            var aberto = nav.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", aberto ? "true" : "false");
        });

        nav.querySelectorAll(".nav-link").forEach(function (link) {
            link.addEventListener("click", fecharMenu);
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") fecharMenu();
        });
    }

    /* ============ ANIMAÇÃO AO ROLAR (REVEAL) ============ */
    var elementosReveal = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && elementosReveal.length) {
        var observador = new IntersectionObserver(
            function (entradas) {
                entradas.forEach(function (entrada) {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("is-visible");
                        observador.unobserve(entrada.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
        );
        elementosReveal.forEach(function (el) { observador.observe(el); });
    } else {
        elementosReveal.forEach(function (el) { el.classList.add("is-visible"); });
    }

    /* ============ SLIDER DE DEPOIMENTOS ============ */
    var track = document.getElementById("sliderTrack");
    if (track) {
        var slides = Array.prototype.slice.call(track.querySelectorAll(".slide"));
        var dotsWrap = document.getElementById("sliderDots");
        var btnPrev = document.getElementById("sliderPrev");
        var btnNext = document.getElementById("sliderNext");
        var atual = 0;
        var intervalo;

        slides.forEach(function (_, i) {
            var dot = document.createElement("button");
            dot.setAttribute("aria-label", "Ir para o depoimento " + (i + 1));
            dot.addEventListener("click", function () { irPara(i); reiniciarAuto(); });
            dotsWrap.appendChild(dot);
        });
        var dots = Array.prototype.slice.call(dotsWrap.children);

        function irPara(indice) {
            slides[atual].classList.remove("is-active");
            slides[atual].setAttribute("aria-hidden", "true");
            dots[atual].classList.remove("is-active");

            atual = (indice + slides.length) % slides.length;

            slides[atual].classList.add("is-active");
            slides[atual].setAttribute("aria-hidden", "false");
            dots[atual].classList.add("is-active");
        }

        function auto() {
            intervalo = setInterval(function () { irPara(atual + 1); }, 6500);
        }
        function reiniciarAuto() {
            clearInterval(intervalo);
            auto();
        }

        irPara(0);
        auto();

        btnNext.addEventListener("click", function () { irPara(atual + 1); reiniciarAuto(); });
        btnPrev.addEventListener("click", function () { irPara(atual - 1); reiniciarAuto(); });

        /* suporte a swipe em telas de toque */
        var startX = null;
        track.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
        track.addEventListener("touchend", function (e) {
            if (startX === null) return;
            var diff = e.changedTouches[0].clientX - startX;
            if (Math.abs(diff) > 40) {
                diff < 0 ? irPara(atual + 1) : irPara(atual - 1);
                reiniciarAuto();
            }
            startX = null;
        }, { passive: true });
    }

})();