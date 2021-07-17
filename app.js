// alert('hello')//

document.getElementById('loan-form').addEventListener('submit',function(e){
   //hide results
   document.getElementById('results').style.display = 'none';


   //show loader
   
   document.getElementById('loading').style.display = 'block';


   setTimeout (calculateResult, 2000)

 e.preventDefault();
})

   //calculate result 

function calculateResult(){
       //console.log('calculate....');

       //UI variables 
       const amount = document.getElementById('amount');
       const interest = document.getElementById('interest');
       const years = document.getElementById('years');
       const monthlyPayment = document.getElementById('monthly-payment');
       const totalPayment = document.getElementById('total-payment');
       const totalInterest = document.getElementById('total-interest');

       const principal = parseFloat(amount.value)//parse float turns into a decimal
       const calculatedInterest = parseFloat(interest.value) /100 / 12
       const calculatedPayments = parseFloat(years.value) * 12

//compute payments 

const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal * x * calculatedInterest)/(x - 1);

if(amount.value != '' && interest.value != '' && years.value != ''){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments.toFixed(2))
    totalInterest.value = ((monthly  * calculatedPayments)-principal).toFixed(2);
    //show results 
    document.getElementById('results').style.display = 'block';
    //hide the spinner 
    document.getElementById('loading').style.display = 'none'
    ;
}else{
  showError('check numbers');
  console.log(amount.value)
}


//e.preventDefault(); // on clicking the submit button which is the target 'e' forms by default GET or POST something but in this case since we
//we are working in the UI we dont need that to go anyway so we sto it righ there!
   




function showError(error){

   //hide result 
   document.getElementById('results').style.display = 'none';
   //hide the spinner 
   document.getElementById('loading').style.display = 'none';
    //create a div 
    const errorDiv = document.createElement('div');
     // add class 
     errorDiv.className = 'alert alert-danger';

    //get elements 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    //create text node and append to Div 
    errorDiv.appendChild(document.createTextNode(error));
    
    // insert error above heading 

    card.insertBefore(errorDiv, heading) // grab the parent which is the card, that were the new element is going then put the new elemnt and whatever else the new elemnet should go before

    setTimeout(clearError, 3000) 

}

function clearError(){
   document.querySelector('.alert').remove();
}}