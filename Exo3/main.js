let number = prompt("Entrer un nombre entre 0 et 10 ?")

if (number < 0 || number > 10 || isNaN(number)) {
    alert("Le nombre entrer n'es pas correct")
} else {
    while (number >= 0) {
        console.log(number--)
    }
}