function validatePIN(pin){
    if(pin.length !== 4 && pin.length !== 6){
        return false;
    }

    for(let i=0; i<pin.length; i++){
        const char = pin[i];
        if(char<'0' || char>'9'){
            return false;
        }
    }
    
    return true;
}