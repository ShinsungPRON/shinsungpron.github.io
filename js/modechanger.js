let checkpoint = 0;
window.addEventListener("keyup", (e) => {
    const key = e.key;
    if (key.toLowerCase() == 'p'){
        if(checkpoint == 0){
            checkpoint += 1;
        }
        else{
            checkpoint = 0;
        }

    }if (key.toLowerCase() == 'r'){
        if(checkpoint == 1){
            checkpoint += 1;
        }
        else{
            checkpoint = 0;
        }

    }if (key.toLowerCase() == 'o'){
        if(checkpoint == 2){
            checkpoint += 1;
        }
        else{
            checkpoint = 0;
        }

    }if (key.toLowerCase() == 'n'){
        if(checkpoint == 3){
            location.replace('prompt.html');
        }
        else{
            checkpoint = 0;
        }

    }
    console.log(checkpoint);
});