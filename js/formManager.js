// sheets export
const scriptURL = 'https://script.google.com/macros/s/AKfycbyRfiXhAmEtPHYTHyzkJmoZn_ZnL-U6oI_CvNUy9w1stLwkByZfPOndDyMR3heANDD9/exec';
const form = document.forms['submit-to-google-sheet'];
const status = document.getElementById("status");

const success = () => {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Submitted Successfully!";
}

const error = () => {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
}

export const formToSheets = () => {
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            success();
          })
          .catch(error => {
            error();
            })
      })
}