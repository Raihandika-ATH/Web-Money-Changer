document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formResult = document.getElementById('formResult');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        formResult.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;
        
        form.reset();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const formResult1 = document.getElementById('Result1');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        formResult1.innerHTML = `<p> Login Succesfully, ${username}</p>`

        form.reset();
    });


});

const modal = document.getElementById("login");
const btn = document.getElementById("button-login");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');
const eyeIcon = document.querySelector('.eye-icon');

showPasswordCheckbox.addEventListener('change', () => {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
    eyeIcon.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = 'password';
    eyeIcon.innerHTML = '<i class="fas fa-eye"></i>';
  }
});

async function convertCurrency() { const amount = document.getElementById('amount').value; 
  const fromCurrency = document.getElementById('fromCurrency').value; 
  const toCurrency = document.getElementById('toCurrency').value; 
  const apiKey = 'ddefd44960d2aa3d0b4352bf'; // API key kamu 
  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}?apikey=${apiKey}`; 
  
  try { const response = await fetch(url); 
      const data = await response.json(); 
      const rate = data.rates[toCurrency]; 
      const result = amount * rate;
          
          document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
      } catch (error) {
          console.error('Error:', error);
          document.getElementById('result').textContent = 'Error fetching exchange rate. Please try again later.';
      }
  }

  window.onscroll = function() { 
    var scrollBtn = document.getElementById("scrollBtn"); 
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { 
    scrollBtn.style.display = "block"; 
  } else { 
    scrollBtn.style.display = "none"; } 
  }; 

  function scrollToTop() { 
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }