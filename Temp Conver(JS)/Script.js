const input = document.getElementById("input");
const ctof = document.getElementById("ctof");
const ftoc = document.getElementById("ftoc");
const result = document.getElementById("result")
const button = document.getElementById("submit")


button.addEventListener("click", function (e) {
  const val = (input.value);


if(val.trim() === "" || isNaN(val)){
    result.innerHTML = "<p>Please Enter a valid value</p>"
    return;
}

if(!ctof.checked && !ftoc.checked){
    result.innerHTML = "<p>Please Select Type of Conversion</p>"
    return;
}

if(ctof.checked){
    let temp = Number(val);
    temp = temp * 9 / 5 + 32;
    result.innerHTML = `<p> ${temp.toFixed(2)} °F</p>`
}
else if(ftoc.checked){
    let temp = Number(val);
    temp = (temp - 32) * (5 / 9);
    result.innerHTML = `<p> ${temp.toFixed(2)} °C</p>`    
}

})