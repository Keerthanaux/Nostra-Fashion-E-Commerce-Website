document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");

  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});


// ===== MOST WANTED SLIDER =====
const mwSlider = document.getElementById("mwSlider");
const mwLeft = document.querySelector(".mw-left");
const mwRight = document.querySelector(".mw-right");

function getScrollAmount() {
  const card = document.querySelector(".mw-card");
  const gap = 20;
  return card.offsetWidth + gap;
}

mwRight.addEventListener("click", () => {
  mwSlider.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
});

mwLeft.addEventListener("click", () => {
  mwSlider.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
});

/* Heart toggle */
document.querySelectorAll(".mw-fav").forEach(icon => {
  icon.addEventListener("click", () => {
    const liked = icon.dataset.liked === "true";
    icon.src = liked
      ? "./images/blackheart.png"
      : "./images/redheart.png";
    icon.dataset.liked = !liked;
  });
});


document.querySelector(".shop-btn").addEventListener("click", () => {
    alert("Redirecting to shop...");
  });

  document.querySelector(".subscribe-btn").addEventListener("click", () => {
    alert("Subscribed successfully!");
  });

  
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href').startsWith('#')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
