function persistence(num){
    
    let count = 0;
    while(num>=10){
        let digits = String(num).split('');
        num = digits.reduce((product, d)=> product * Number(d), 1);
        count ++;

    }
    return count;
}