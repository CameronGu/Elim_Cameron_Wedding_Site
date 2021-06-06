import {showHideDivs} from './script.js';

// sheets export
const scriptURL = 'https://script.google.com/macros/s/AKfycbyRfiXhAmEtPHYTHyzkJmoZn_ZnL-U6oI_CvNUy9w1stLwkByZfPOndDyMR3heANDD9/exec';
const form = document.forms['submit-to-google-sheet'];
const status = document.getElementById("status");

export const showGuestFields = () => {
  const guestPicker = document.getElementById('numGuests');
  const guestOne = document.getElementById('guestOne');
  const guestTwo = document.getElementById('guestTwo');
  const guestThree = document.getElementById('guestThree');
  const guestFour = document.getElementById('guestFour');

  guestPicker.addEventListener('change',() => {
    const numGuests = guestPicker.options[guestPicker.selectedIndex].value;
      let show,hide;
      switch (numGuests) {
        case '1': 
          show = [guestOne];
          hide = [guestTwo,guestThree,guestFour];
          showHideDivs(show,hide);
          break;
        case '2':
          show = [guestOne,guestTwo];
          hide = [guestThree,guestFour];
          showHideDivs(show,hide);
          break;          
        case '3':
          show = [guestOne,guestTwo,guestThree];
          hide = [guestFour];
          showHideDivs(show,hide);
          break;
        case '4':
          show = [guestOne,guestTwo,guestThree,guestFour];
          hide = [];
          showHideDivs(show,hide);
          break;
        default:
          console.log('switch case error');
      }
  })
}

export const formToSheets = () => {
  const successResponse = () => {
    form.reset();
    showHideDivs([guestOne],[guestTwo,guestThree,guestFour])
    status.classList.add("success");
    status.innerHTML = "Submitted Successfully!";
  }

const errorResponse = () => {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          successResponse();
        })
        .catch(error => {
          errorResponse();
          })
    })
}