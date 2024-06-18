
// nav-item-hover


    document.addEventListener("DOMContentLoaded", function () {
      gsap.from(".navbar-nav .nav-item", {
        duration: 1,      
        opacity: 0,       
        y: -50,          
        stagger: 0.2,     
        ease: "bounce"    
      });
    });
    
    document.querySelectorAll('.navbar-nav .nav-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            duration: 0.5,  
            scale: 1.2,     
            ease: "power1.out"
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            duration: 0.5,  
            scale: 1,       
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



const textElements = document.querySelectorAll('.text');

textElements.forEach(textElement => {
  textElement.addEventListener('mousemove', handleMouseMove);
});

function handleMouseMove(event) {
  const offsetX = event.offsetX;
  const offsetY = event.offsetY;

  
  const xMovement = (offsetX / textElement.offsetWidth) - 0.5;
  const yMovement = (offsetY / textElement.offsetHeight) - 0.5;


  gsap.to(textElements, {
    duration: 0.1, 
    ease: "elastic.out", 
    rotate: xMovement * 5, 
    scaleY: 1.05 + Math.abs(yMovement) * 0.1 
  });

  // hero-slider

}


// form

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var formIsValid = true;

  
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('message-error').textContent = '';

 
  var name = document.getElementById('name');
  if (!name.checkValidity()) {
      formIsValid = false;
      if (name.validity.valueMissing) {
          document.getElementById('name-error').textContent = 'Name is required.';
      } else if (name.validity.tooShort) {
          document.getElementById('name-error').textContent = 'Name must be at least 2 characters long.';
      }
  }

  var email = document.getElementById('email');
  if (!email.checkValidity()) {
      formIsValid = false;
      if (email.validity.valueMissing) {
          document.getElementById('email-error').textContent = 'Email is required.';
      } else if (email.validity.typeMismatch) {
          document.getElementById('email-error').textContent = 'Please enter a valid email address.';
      }
  }

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
      
      alert('Form submitted successfully.');
  }
});

    document.querySelector('#contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
    });
  

   