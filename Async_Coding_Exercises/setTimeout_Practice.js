const printMessageAfterDelay = (message,delay) => {
    setTimeout(()=> console.log(message),delay);
}

printMessageAfterDelay("Welcome to heaven!",3000);

const printMessageInterval = (message, delay) => {
    return setInterval(() => console.log(message),delay);
}

const intervalId = printMessageInterval("#DevJoke",3000);

setTimeout(()=>{
    clearInterval(intervalId);    
},9000);

const displayCountDown = (num) => {        
    const intervalId = setInterval(() => {
        if(num>=1)
            console.log(num);
         else
            {
                console.log("Bang Bang!");
                clearInterval(intervalId);
            }
        num-=1;
    },1000);
}

displayCountDown(10);