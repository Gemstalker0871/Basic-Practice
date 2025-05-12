const form = document.querySelector('form')

form.addEventListener('submit', function(submition){
    submition.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result-container');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please Give a Valid Height";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please Give a Valid Weight";
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)

        result.innerHTML = `<span>${bmi}</span>`
    }
})