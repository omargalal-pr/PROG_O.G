for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (1 + Math.random() * 2) + "s";
    star.style.opacity = Math.random();
    document.body.appendChild(star);
}