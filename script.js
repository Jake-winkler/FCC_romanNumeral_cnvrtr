const button = document.getElementById('convert-btn');
const number = document.getElementById('number');
const output = document.getElementById('output');

button.addEventListener('click', e => {

    if(number.value === ''){
        let result = document.createElement('p');
        let node = document.createTextNode('Please enter a valid number');
        result.appendChild(node);
        
        return output.appendChild(result);
       
    }
})


