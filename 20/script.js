const stars = document.querySelectorAll('.stars input');
const ratingText = document.getElementById('rating-text');

stars.forEach((star) => {
    star.addEventListener('change', () => {
        const value = star.value;
        ratingText.textContent = `You Rated ${value} star${value > 1 ? 's' : ''}!`;
    });
});
