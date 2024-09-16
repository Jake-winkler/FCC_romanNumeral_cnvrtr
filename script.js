const button = document.getElementById('convert-btn');
const number = document.getElementById('number');
const output = document.getElementById('output');

const romanNumberMap = new Map();

romanNumberMap.set('I', 1);
romanNumberMap.set('IV', 4);
romanNumberMap.set('V', 5);
romanNumberMap.set('IX', 9);
romanNumberMap.set('X', 10);
romanNumberMap.set('XL', 40);
romanNumberMap.set('L', 50);
romanNumberMap.set('XC', 90);
romanNumberMap.set('C', 100);
romanNumberMap.set('CD', 400);
romanNumberMap.set('D', 500);
romanNumberMap.set('CM', 900);
romanNumberMap.set('M', 1000);


//this is the event handler that triggers off the button click 
button.addEventListener('click', (e) => {
if(number.value == ''){
createResultElementNoNum();
}else if(number.value <=0){
    createNegResultElement();
}else if( number.value >= 4000){
    toLargeNumber();
}else {
    convertNumToRoman(number.value);
}
});

number.addEventListener('keydown', (e) => {
   if(e.key === 'Enter'){
        e.preventDefault();
        if(number.value == ''){
        createResultElementNoNum();
        }else if(number.value <=0){
            createNegResultElement();
        }else {
            convertNumToRoman();
        }
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

const toLargeNumber = () =>{
    let result = document.getElementById('resultID');
    if(result !== null){
        result.innerHTML = 'Please enter a number less than or equal to 3999';
    }else{
    let result = document.createElement('p');
    result.setAttribute('id', 'resultID');
    let node = document.createTextNode('Please enter a number less than or equal to 3999');
    result.appendChild(node);
    output.appendChild(result);
    }
    console.log('NegValue');
}
//this will be the function that gets triggered when a valid number is passed in to be converted to a roman number. 

const convertNumToRoman = num => {
    romanNumberMap.forEach((value, key) => {
        if(number.value )
    })
    
}


