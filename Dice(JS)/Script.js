 const button = document.getElementById("roll")

 button.addEventListener('click', function(e){
    const numofDice = document.getElementById("number").value;
    const result = document.getElementById("result");
    const img = document.getElementById("pics")
    const value = [];
    const image = [];


    for(let i = 0 ; i < numofDice ; i++){
        const rand = Math.floor(Math.random() * 6) + 1;
        value.push(rand);
        image.push(`<img src="images/Dice_0${rand}.png" alt="dice ${rand}" width="50">`);
    }

        result.textContent = `dice: ${value.join(', ')}`;
        img.innerHTML = image.join(' ');

 })
