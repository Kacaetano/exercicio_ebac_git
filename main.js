const form = document.getElementById('form-num');

form.addEventListener('submit', function(e){
    e.preventDefault;

    var numeroA = document.getElementById('numA').value;
    var numeroB = document.getElementById('numB').value;
    const certo = `O numero A é menor que o B então esta enviado o form`
    const errado = `o numero A não pode ser maior que o numero B`

    if (numeroA < numeroB){
        alert(certo)

    } else {

        alert(errado)

    }

})

console.log();


