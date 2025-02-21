











const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;
    let direction = 1; // 1 = forward, -1 = backward

    function updateSlider() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function autoPlaySlider() {
      if (currentIndex === slideCount - 1) {
        direction = -1; // Move backward
      } else if (currentIndex === 0) {
        direction = 1; // Move forward
      }
      currentIndex += direction;
      updateSlider();
    }

    setInterval(autoPlaySlider, 3000);

    document.querySelector('.nav-arrow.left').addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
      updateSlider();
    });

    document.querySelector('.nav-arrow.right').addEventListener('click', () => {
      currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
      updateSlider();
    });

    document.querySelector('.menu-toggle').addEventListener('click', function() {
      document.querySelector('.navbar ul').classList.toggle('visible');
      this.classList.toggle('open');
    });

 


    const slider = document.querySelector('.testimonial-slider');
const sliderContainer = document.querySelector('.testimonial-slider-container');
let scrollIndex = 0;




// Scroll to the left
function scrollLeftButton() {
    const cardWidth = sliderContainer.offsetWidth / 3; // Visible cards
    scrollIndex = Math.max(scrollIndex - 1, 0); // Prevent scrolling past the start
    slider.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
}

// Scroll to the right
function scrollRightButton() {
    const cardWidth = sliderContainer.offsetWidth / 3; // Visible cards
    const maxIndex = slider.children.length - 3; // Prevent scrolling past the last visible group
    scrollIndex = Math.min(scrollIndex + 1, maxIndex);
    slider.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
}

// Adjust slider on window resize
window.addEventListener('resize', () => {
    const cardWidth = sliderContainer.offsetWidth / 3;
    slider.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
});













