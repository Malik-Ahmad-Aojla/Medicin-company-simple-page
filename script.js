

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const currentItem = button.parentElement;
    document.querySelectorAll('.faq-item.open').forEach(item => {
      if (item !== currentItem) {
        item.classList.remove('open');
      }
    });
    currentItem.classList.toggle('open');
  });
});

$(document).ready(function(){
  $('.sliderContainer').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.testimonialContainer').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

$(document).ready(function(){
  function initSlick() {
      if ($(window).width() < 768) {
          if (!$('.inner-ritual').hasClass('slick-initialized')) {
              $('.inner-ritual').slick({
                  dots: true,
                  arrows: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 1500
              });
          }
      } else {
          if ($('.inner-ritual').hasClass('slick-initialized')) {
              $('.inner-ritual').slick('unslick');
          }
      }
  }

  initSlick();

  $(window).on('resize', function(){
      initSlick();
  });
});




const questions = document.querySelectorAll('.question-section > div');
const progressText = document.querySelector('.progress-bar-container span');
const progressFill = document.querySelector('.progress');
const nextBtn = document.querySelector('.nav-buttons button:last-child');
const prevBtn = document.querySelector('.nav-buttons button:first-child');

// Custom percentage per step
const stepPercentages = [0, 17, 33, 67, 83, 100, 100];

let currentStep = 0;

function showStep(step) {
  questions.forEach(q => q.style.display = 'none');
  if (questions[step]) {
    questions[step].style.display = 'block';
  }

  const percent = stepPercentages[step];
  progressText.textContent = `${percent}% complete`;
  progressFill.style.width = `${percent}%`;

  prevBtn.disabled = step === 0;
  nextBtn.disabled = step >= stepPercentages.length - 2;
}

// Manual navigation
nextBtn.addEventListener('click', () => {
  if (currentStep < stepPercentages.length - 2) {
    currentStep++;
    showStep(currentStep);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

// Auto-advance on radio selection for questions 1-4
document.querySelectorAll('.questionOne input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', () => {
    currentStep = 1;
    showStep(currentStep);
  });
});

document.querySelectorAll('.questionTwo input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', () => {
    currentStep = 2;
    showStep(currentStep);
  });
});

document.querySelectorAll('.questionThree input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', (event) => {
    
    const selectedValue = event.target.value;
    if (selectedValue === 'yes') {
      currentStep = 6;
      showStep(currentStep);
      document.querySelector('.questionSix').style.display = 'block'
      console.log("yes"); 
    } else {
      currentStep = 3;
      showStep(currentStep);
    }
  });
});


// Checkbox selection with "Next" button for questionFour
document.querySelectorAll('.nextBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentStep = 4;
    showStep(currentStep);
  });
});

// Final step: email submission
const redeemBtn = document.querySelector('.emailContainer button');
redeemBtn.addEventListener('click', () => {
  currentStep = 5;
  showStep(currentStep);
});

// Initialize
showStep(currentStep);





const modal = document.getElementById("eligibilityModal");
const btn = document.querySelector(".quizBtn");
const span = document.querySelector(".close-btn");

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}



