function arrayDiff(a, b) {

    let resultado = [];
    for (let i=0; i<a.length; i++) {
        let estaEnB = false;

        for (let j=0; j<b.length; j++) {
            if (a[i] === b[j]) {
                estaEnB = true;
                break; 
            }
        }

        if (!estaEnB) {
            resultado.push(a[i]);
        }
    }

    return resultado;
}