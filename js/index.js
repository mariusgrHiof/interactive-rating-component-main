const numberBtns = document.querySelectorAll('.number');
const submitBtn = document.querySelector('.btn');
const cardElement = document.querySelector('.card');
let currentValue = 0;

numberBtns.forEach((number) => {
  number.addEventListener('click', () => {
    resetBtnState();
    number.classList.add('active');
    currentValue = Number(
      document.querySelector('.number.active span').textContent
    );
  });
});

const resetBtnState = () => {
  numberBtns.forEach((number) => {
    number.classList.remove('active');
  });
};

submitBtn.addEventListener('click', () => {
  console.log(currentValue);
  if (currentValue > 0) {
    cardElement.innerHTML = '';
    cardElement.innerHTML = `
        <div class="thankYouImage">
            <img src="../images/illustration-thank-you.svg" alt="" />
        </div>
       <div class="rating-circle"> <p class="card-rating">You selected ${currentValue} out of 5</p></div>
            <h2>Thank You!</h2>
        <p class="card-description">
            We appreciate you taking the time to give a rating. If
            you ever need more support, don’t hesitate to get in touch!
        </p>
    
    `;
  }
});
