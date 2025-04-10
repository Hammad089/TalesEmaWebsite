document.addEventListener('DOMContentLoaded', function() {
    const reviewsContainer = document.querySelector('.reviews-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    reviewsContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      reviewsContainer.style.cursor = 'grabbing';
      startX = e.pageX - reviewsContainer.offsetLeft;
      scrollLeft = reviewsContainer.scrollLeft;
    });

    reviewsContainer.addEventListener('mouseleave', () => {
      isDown = false;
      reviewsContainer.style.cursor = 'grab';
    });

    reviewsContainer.addEventListener('mouseup', () => {
      isDown = false;
      reviewsContainer.style.cursor = 'grab';
    });

    reviewsContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - reviewsContainer.offsetLeft;
      const walk = (x - startX) * 2; 
      reviewsContainer.scrollLeft = scrollLeft - walk;
    });
  });