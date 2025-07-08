function findMissingLetter(array) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    let startIndex = alphabet.indexOf(array[0]);

    for (let i=0; i<array.length; i++) {
        if (array[i] !== alphabet[startIndex + i]) {
            return alphabet[startIndex + i];
        }
    }
}
