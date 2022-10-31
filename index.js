// AJAX API CALL

// For automatic loading of API
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.adviceslip.com/advice');
// xhr.send()
// xhr.addEventListener('load', function () { // ALways get a response from a HTTP request
// const response = this.responseText;
// const responseObj = JSON.parse(response)

// const data = responseObj.slip;
// let output = `"${
//     data.advice
// }"`;
// document.getElementById('advice-text').innerHTML = output;
// let id = `ADVICE    #${
//     response.slip.id
// }`;
// document.getElementById('advice-id').innerHTML = id

// })


// Grab the elemet you are want to add event to
// const btn = document.getElementById('get-advice');
// // Add event listener to the elememt
// btn.addEventListener('click', getAdvice)

// function reference(Event handler fn)
// function getAdvice() {
// // console.log('get Advice')

// // create the xhr object
// const xhr = new XMLHttpRequest();

// methods on the object
// xhr.open('GET', 'https://api.adviceslip.com/advice', true)

// xhr.onload = function () {
//     if (this.status === 200) { // The response is a JSON string so we want to change it to an object using JSON.parse() so we can loop through it and access it ppties
//       const response = JSON.parse(this.responseText);
//       console.log(response);
//       const data = response.slip
//       let advice = `"${
//         data.advice
//       }"`;
//       document.getElementById('advice-text').innerHTML = advice;
//       let id = `ADVICE  #${
//         response.slip.id
//       }`;
//       document.getElementById('advice-id').innerHTML = id
//     }
// }

// xhr.send();

// }

// FETCH API method

// ONLOAD CALL
const getAdvice = function () {
  fetch('https://api.adviceslip.com/advice',).then((response) => response.json()).then(function (resData) {
    const data = resData.slip;
    let advice = `"${
      data.advice
    }"`;
    document.getElementById('advice-text').innerHTML = advice;

    let id = `ADVICE  #${
      data.id
    }`;
    document.getElementById('advice-id').innerHTML = id
  });

}
getAdvice();

// ADD EVENT LISTENER TO BUTTON

// Grab the element you are want to add event to
const btn = document.getElementById('get-advice');
// Add event listener to the elememt
btn.addEventListener('click', adviceGetter)

// function reference(Event handler fn)
function adviceGetter() { // the first .then() handler gets the handles the initial promise object, but in order to get the response data which is  JSON we have to use response.json():; this response.json() also returns  a promise which gives our response data; so we attach another .then() hnadler to be able toi get the actual data
  fetch('https://api.adviceslip.com/advice',).then((response) => response.json()).then((resData) => {
    const data = resData.slip
    let advice = `"${
      data.advice
    }"`;
    document.getElementById('advice-text').innerHTML = advice;


    let id = `ADVICE  #${
      data.id

    }`;
    document.getElementById('advice-id').innerHTML = id;

  })

}
