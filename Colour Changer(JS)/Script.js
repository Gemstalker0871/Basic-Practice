const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function (buttonclick){
    console.log(buttonclick);
    buttonclick.addEventListener('click', function(change){
        console.log(change);
        console.log(change.target);

        if(change.target.id === 'red')
            {
            if (body.style.backgroundColor === change.target.id) {
            body.style.backgroundColor = 'white';
            console.log(change.target.id + ' button clicked again. Background reset.');
            } else {
            body.style.backgroundColor = change.target.id;
            console.log(change.target.id + ' button clicked.');
        }
            }
        if(change.target.id === 'blue')
            {
                console.log('blue button clicked');
                body.style.backgroundColor = change.target.id;
            }
        if(change.target.id === 'pink')
            {
                console.log('pink button clicked');
                body.style.backgroundColor = change.target.id;
            }
        if(change.target.id === 'gold')
            {
                console.log('gold button clicked');
                body.style.backgroundColor = change.target.id;
            }
        if(change.target.id === 'purple')
            {
                console.log('purple button clicked');
                body.style.backgroundColor = change.target.id;
            }
    })
});