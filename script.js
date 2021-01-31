function randomGeneratePin(){
    const randNum = Math.random()*10000;
    const pin = (randNum + '').split('.')[0];
    var finalPin = 0;
    if(pin.length===4){
        finalPin = pin;
    } else {
        return randomGeneratePin();
    }
    document.getElementById("finalPin").value = finalPin;
}

document.getElementById("buttonNumber").addEventListener("click", function(event){
    const value = event.target.innerText;
    if(isNaN(value)){
        if(value=="C"){
            document.getElementById("pinMatch").value = "";
        } else if (value == "B"){
            const numbers = document.getElementById("pinMatch").value;
            let newNumbers;
            newNumbers = numbers.substring(0, numbers.length - 1);
            document.getElementById("pinMatch").value = newNumbers;
        }
    }else {
        const typed = document.getElementById("pinMatch");
        typed.value = typed.value + value;
    }
})


let p = 2;
document.getElementById("submitButton").addEventListener("click", function(){
    const firstPin = document.getElementById("finalPin").value;
    const pinMatch = document.getElementById("pinMatch").value;
    if(p>=0){
        if(firstPin==pinMatch){
            document.getElementById("notMatch").style.display = 'none';
            document.getElementById("yesMatch").style.display = 'block';
            alert("Greetings, Your pin is matched.");
        } else {
            document.getElementById("notMatch").style.display = 'block';
            document.getElementById("yesMatch").style.display = 'none';
            document.getElementById('triesLeft').innerText = p;
            console.log(p);
            p--;
        }
    }
})