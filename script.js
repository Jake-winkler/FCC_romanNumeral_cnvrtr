const button = document.getElementById('convert-btn');
const number = document.getElementById('number');
const output = document.getElementById('output');

//this is the event handler that triggers off the button click 
button.addEventListener('click', (e) => {
    //This keep the code from constantly adding new p element each time the  button is clicked 
    //it first checks if the result variable is not null if true then just updates text 
    //if null it creates the the element first and then sets the text. 
   //had to get the resultID variable outside the else block so the if statment could check for its existance first.   
    let result = document.getElementById('resultID');
    
    if(result != null){
        result.innerHTML='Please enter a valid number';
        
    } else {
        let result = document.createElement('p');
        result.setAttribute('id', 'resultID');
        let node = document.createTextNode('Please enter a valid number');
        result.appendChild(node);
        output.appendChild(result);
    }
});


