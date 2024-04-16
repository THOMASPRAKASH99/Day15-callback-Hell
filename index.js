

let count = document.getElementById('container');

let countdown = (number)=>{
    if(number > 0){
        count.innerText = number;
        setTimeout(() => {
            countdown(number - 1);
        }, 1000);
    }
    else{
        count.innerText = ("Happy Independence Day");
    }
}
countdown(10);
