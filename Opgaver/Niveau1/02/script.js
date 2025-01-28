function beregnForhold(a, b) {
    a = 4;
    b = 3;

    let resultat = a / b;

    console.log(resultat);
}
beregnForhold()

function beregnForhold2(a, b) {
    a = 4;
    b = 0;

    if (b === 0) {
        console.log("can't divide by 0");
        return null
    } else {
        let resultat2 = a / b;
        console.log(resultat2);
    }
}
beregnForhold2()