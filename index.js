// AJAX API CALL

const xhr=new XMLHttpRequest();
xhr.open( 'GET', 'https://api.adviceslip.com/advice');
xhr.send()
xhr.addEventListener('load', function(){
  const response=JSON.parse(this.responseText);
  let output=`"${response.slip.advice}"`; 
  document.getElementById('advice-text').innerHTML=output;
  let id=`ADVICE    #${response.slip.id}`;
    document.getElementById('advice-id').innerHTML=id
    // document.getElementById('advice-id').style.font='manrope'
})


// Grab the elemet you are want to add event to
const btn=document.getElementById('get-advice');
//Add event listener to the elememt
btn.addEventListener('click', getAdvice)

//function reference(Event handler fn)
function getAdvice(e){
  // console.log('get Advice')
  
  // create the xhr object
  const xhr=new XMLHttpRequest();

  // methods on the object
  xhr.open( 'GET', 'https://api.adviceslip.com/advice', true)


xhr.onload= function(){
  if (this.status===200){
    // The response is a JSON string so we want to change it to an object using JSON.parse() so we can loop through it and access it ppties
    const response=JSON.parse(this.responseText);
     console.log(response);
   const data=response.slip
    let advice=`"${data.advice}"`; 
    document.getElementById('advice-text').innerHTML=advice;
    let id=`ADVICE  #${response.slip.id}`;
    document.getElementById('advice-id').innerHTML=id
  }

  
}

  xhr.send();

}




