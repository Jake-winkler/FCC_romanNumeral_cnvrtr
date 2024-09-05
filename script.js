const button = document.getElementById('convert-btn');
const number = document.getElementById('number');
const output = document.getElementById('output');

//this is the event handler that triggers off the button click 
button.addEventListener('click', (e) => {
if(number.value == ''){
createResultElementNoNum();
}else if(number.value <=0){
    createNegResultElement();
}else {
    convertNumToRoman();
}
});


//This is the function to create the result element. 
const createResultElementNoNum = () => {
    let result = document.getElementById('resultID');
    if(result !== null){
        result.innerHTML = 'Please Enter a Valid Number';
    }else{
    let result = document.createElement('p');
    result.setAttribute('id', 'resultID');
    let node = document.createTextNode('Please Enter a Valid Number');
    result.appendChild(node);
    output.appendChild(result);
    }

    console.log('NoValue');
}

//This will create the result element when user enter negative number
const createNegResultElement = () =>{
    let result = document.getElementById('resultID');
    if(result !== null){
        result.innerHTML = 'Please enter a number that is greater than or equal to 1';
    }else{
    let result = document.createElement('p');
    result.setAttribute('id', 'resultID');
    let node = document.createTextNode('Please enter a number that is greater than or equal to 1');
    result.appendChild(node);
    output.appendChild(result);
    }
    console.log('NegValue');
}


const convertNumToRoman = () => {
    let result = document.getElementById('resultID');
    if(result !== null){
        result.innerHTML = 'You have entered a Valid number!!!!';
    }else{
    let result = document.createElement('p');
    result.setAttribute('id', 'resultID');
    let node = document.createTextNode('You have entered a Valid number!!!!');
    result.appendChild(node);
    output.appendChild(result);
    }

    console.log('Valid Value');
}

