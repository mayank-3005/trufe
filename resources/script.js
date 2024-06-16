
// nav-item-hover


    document.addEventListener("DOMContentLoaded", function () {
      gsap.from(".navbar-nav .nav-item", {
        duration: 1,      // Animation duration
        opacity: 0,       // Start opacity
        y: -50,           // Start y position
        stagger: 0.2,     // Stagger start time of each item
        ease: "bounce"    // Bounce effect
      });
    });
    
    document.querySelectorAll('.navbar-nav .nav-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            duration: 0.5,  // Animation duration on hover
            scale: 1.2,     // Scale up the item
            ease: "power1.out"
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            duration: 0.5,  // Animation duration on leave
            scale: 1,       // Scale back to original size
            ease: "power1.out"
          });
        });
      });
    


// nav-item-hover


// toggle-nav-btn

let magneticArea = document.querySelector('.magnetic-area')
let magneticElement = magneticArea.querySelectorAll('.magnetic-element')

magneticArea.addEventListener('mousemove', function(e){
  let Xvalue = e.pageX - this.offsetLeft
  let Yvalue = e.pageY - this.offsetTop
  
  magneticElement.forEach(element =>{
    let magneticValue = element.getAttribute('data-magnetic-value')
    
    element.animate({
      transform: `translate(${Xvalue * magneticValue}%, ${Yvalue * magneticValue}%)`,
    },{
      duration: 500,
      fill: 'forwards',
    })
  })
})

magneticArea.addEventListener('mouseleave', function(e){
  magneticElement.forEach(element =>{
    element.animate({
      transform: `translate(0)`,
    },{
      duration: 150,
      fill: 'forwards',
    })
  })
})



// toggle-nav-btn

// hero-slider

window.addEventListener('load', () => {
    gsap.fromTo(
      ".svg-letter-container",
      {
        rotationY: 90,
        opacity: 0,
      },
      {
        rotationY: 0,
        opacity: 1,
        stagger: {
          from: "start",
          amount: 0.4,
        },
        ease: "power1.out",
      }
    );  
})


// hero-slider

// Assuming you have GSAP loaded in your project

const textElements = document.querySelectorAll('.text');

textElements.forEach(textElement => {
  textElement.addEventListener('mousemove', handleMouseMove);
});

function handleMouseMove(event) {
  const offsetX = event.offsetX;
  const offsetY = event.offsetY;

  // Calculate movement based on cursor position within element
  const xMovement = (offsetX / textElement.offsetWidth) - 0.5;
  const yMovement = (offsetY / textElement.offsetHeight) - 0.5;

  // Apply slight rotation and scale based on movement
  gsap.to(textElements, {
    duration: 0.1, // Adjust for responsiveness
    ease: "elastic.out", // Adjust easing as needed
    rotate: xMovement * 5, // Adjust rotation strength
    scaleY: 1.05 + Math.abs(yMovement) * 0.1 // Adjust scale for subtle bounce
  });
}
// cta btn
const button = document.querySelector('.cta-btn');

let boundingRect = button.getBoundingClientRect();

window.addEventListener('resize', () => {
  boundingRect = button.getBoundingClientRect();
});

button.addEventListener('mousemove', (e) => {
  const mousePosX = e.clientX - boundingRect.left; 
  const mousePosY = e.clientY - boundingRect.top;
  gsap.to(button, {
    x: (mousePosX - boundingRect.width / 1.2) * 0.1, 
    y: (mousePosY - boundingRect.height / 1.2) * 0.1, 
    duration: 0.8, 
    ease: 'power3.out', 
  });
});

button.addEventListener('mouseleave', () => {
  gsap.to(button, {
    x: 0, 
    y: 0,
    duration: 0.8, 
    ease: 'elastic.out(1, 0.3)'
  });
}); 




$(document).ready(function () {
  const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
      },
      keyboard: {
          enabled: true,
          onlyInViewport: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      },
      effect: 'slide',
  });
});


// form

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var formIsValid = true;

  // Clear previous error messages
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('message-error').textContent = '';

  // Name validation
  var name = document.getElementById('name');
  if (!name.checkValidity()) {
      formIsValid = false;
      if (name.validity.valueMissing) {
          document.getElementById('name-error').textContent = 'Name is required.';
      } else if (name.validity.tooShort) {
          document.getElementById('name-error').textContent = 'Name must be at least 2 characters long.';
      }
  }

  // Email validation
  var email = document.getElementById('email');
  if (!email.checkValidity()) {
      formIsValid = false;
      if (email.validity.valueMissing) {
          document.getElementById('email-error').textContent = 'Email is required.';
      } else if (email.validity.typeMismatch) {
          document.getElementById('email-error').textContent = 'Please enter a valid email address.';
      }
  }

  // Message validation
  var message = document.querySelector('textarea[name="message"]');
  if (!message.checkValidity()) {
      formIsValid = false;
      if (message.validity.valueMissing) {
          document.getElementById('message-error').textContent = 'Message is required.';
      } else if (message.validity.tooShort) {
          document.getElementById('message-error').textContent = 'Message must be at least 10 characters long.';
      }
  }

  if (formIsValid) {
      // If form is valid, you can submit the form or send the data via AJAX
      // For example:
      // this.submit();
      alert('Form submitted successfully.');
  }
});

   

    document.querySelector('#contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
    });
  

   