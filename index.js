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
// const getAdvice = function () {
// fetch('https://api.adviceslip.com/advice',).then((response) => response.json()).then(function (resObj) {
//     const data = resObj.slip;
//     let advice = `"${
//       data.advice
//     }"`;
//     document.getElementById('advice-text').innerHTML = advice;

//     let id = `ADVICE  #${
//       data.id
//     }`;
//     document.getElementById('advice-id').innerHTML = id
// });

// }
// getAdvice();

// ADD EVENT LISTENER TO BUTTON

// Grab the element you are want to add event to
// const btn = document.getElementById('get-advice');
// Add event listener to the elememt
// btn.addEventListener('click', adviceGetter)

// function reference(Event handler fn)
// function adviceGetter() { // the first .then() handler gets the handles the initial promise object, but in order to get the response data which is  JSON we have to use response.json():; this response.json() also returns  a promise which gives our response data; so we attach another .then() hnadler to be able toi get the actual data
// fetch('https://api.adviceslip.com/advice',).then((response) => response.json()).then((resData) => {
//     const data = resData.slip
//     let advice = `"${
//       data.advice
//     }"`;
//     document.getElementById('advice-text').innerHTML = advice;


//     let id = `ADVICE  #${
//       data.id

//     }`;
//     document.getElementById('advice-id').innerHTML = id;

// })

// }


// ASYNC AWAIT  API CALL ES7(ES2016)
// ONLOAD event


const getAdvice = async function () { // Adding async in front of the fn makes the fn return a promise when we console log the fn, so to handle the promise we use .then(), but here we use await
  const response = await fetch('https://api.adviceslip.com/advice');

  // we get the response object when we handle the promise
  // console.log(response)

  // to get the actual data object from the object we use another await
  let resObj = await response.json();
  // gives the actual object of the data
  // console.log(resObj);
  data = resObj.slip;
  let advice = `"${
    data.advice
  }"`;
  document.getElementById('advice-text').innerHTML = advice;

  let id = `ADVICE  #${
    data.id
  }`;
  document.getElementById('advice-id').innerHTML = id


}
// fn returns a promise becoz of async
// console.log(getAdvice());
getAdvice();


// ATTACH BTN HANDLER EVENT
// Grab the element you are want to add event to
const btn = document.getElementById('get-advice');
// Add event listener to the elememt
btn.addEventListener('click', adviceGetter)

// function reference(Event handler fn)
async function adviceGetter() {
  const response = await fetch('https://api.adviceslip.com/advice');

  // we get the response object when we handle the promise
  // console.log(response)

  // to get the actual data object from the object we use another await
  let resObj = await response.json();
  // gives the actual object of the data
  // console.log(resObj);
  data = resObj.slip;
  let advice = `"${
    data.advice
  }"`;
  document.getElementById('advice-text').innerHTML = advice;

  let id = `ADVICE  #${
    data.id
  }`;
  document.getElementById('advice-id').innerHTML = id


}
