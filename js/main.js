/* =========================================================
   Valleteclab - Landing Page
   Edite os dados de contato aqui:
   ========================================================= */
const CONFIG = {
  // Número com DDI + DDD, só dígitos. Ex.: 5566999998888
  whatsappNumber: "5500000000000",
  // Como o número aparece no site
  whatsappDisplay: "(00) 00000-0000",
  email: "contato@valleteclab.com.br",
  region: "Atendemos todo o Brasil",
  defaultMessage: "Olá! Vim pelo site da Valleteclab e gostaria de solicitar um orçamento."
};

(function () {
  "use strict";

  const waBase = "https://wa.me/" + CONFIG.whatsappNumber + "?text=";
  const waLink = (msg) => waBase + encodeURIComponent(msg || CONFIG.defaultMessage);

  /* ---- Links de WhatsApp / e-mail / região ---- */
  document.querySelectorAll(".js-whatsapp").forEach((el) => {
    el.setAttribute("href", waLink());
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
  document.querySelectorAll(".js-phone-text").forEach((el) => (el.textContent = CONFIG.whatsappDisplay));
  document.querySelectorAll(".js-email").forEach((el) => {
    el.textContent = CONFIG.email;
    el.setAttribute("href", "mailto:" + CONFIG.email);
  });
  document.querySelectorAll(".js-region").forEach((el) => (el.textContent = CONFIG.region));

  /* ---- Ano no rodapé ---- */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---- Menu mobile ---- */
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---- Fallback para imagens ainda não enviadas ---- */
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    const mode = img.dataset.fallback;
    const onError = () => {
      if (mode === "hide") img.style.display = "none";
      else if (mode === "text") img.closest(".logo")?.classList.remove("has-image"), (img.style.display = "none");
      else img.closest("figure")?.classList.add("is-missing");
    };
    const onLoad = () => {
      if (mode === "text") img.closest(".logo")?.classList.add("has-image");
    };
    img.addEventListener("error", onError);
    img.addEventListener("load", onLoad);
    if (img.complete) {
      if (img.naturalWidth === 0) onError();
      else onLoad();
    }
  });

  /* ---- Formulário -> abre WhatsApp com mensagem pronta ---- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll("[required]").forEach((f) => {
        const ok = f.value.trim().length > 1;
        f.classList.toggle("is-invalid", !ok);
        if (!ok) valid = false;
      });
      if (!valid) {
        form.querySelector(".is-invalid")?.focus();
        return;
      }
      const d = Object.fromEntries(new FormData(form).entries());
      const msg =
        "Olá! Vim pelo site da Valleteclab.\n\n" +
        "*Nome:* " + d.nome + "\n" +
        (d.empresa ? "*Empresa/Fazenda:* " + d.empresa + "\n" : "") +
        "*Telefone:* " + d.telefone + "\n" +
        "*Serviço:* " + d.servico + "\n" +
        (d.mensagem ? "\n" + d.mensagem : "");
      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  /* ---- Animação de entrada ---- */
  const targets = document.querySelectorAll(".service, .segment, .process__steps li, .portfolio__item, .about__media, .about__body, .contact__form, .contact__info");
  targets.forEach((t) => t.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } }),
      { threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
  } else {
    targets.forEach((t) => t.classList.add("is-visible"));
  }
})();
