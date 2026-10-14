document.addEventListener("DOMContentLoaded", () => {
  const toast = document.querySelector(".toast");
  let toastTimer;

  document.querySelectorAll("[data-toast]").forEach((button) => {
    button.addEventListener("click", () => {
      toast.textContent = button.dataset.toast;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
    });
  });

  const rabbit = document.querySelector(".rabbit");
  if (rabbit && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelector(".hero-art").addEventListener("pointermove", (event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
      rabbit.style.marginLeft = `${x}px`;
    });
  }
});
