function soyUnPrograma(num3) {
    console.log("Soy un programa! que hace un calculo matematico completamente innecesario :D")
    var num1 = 5;
    var num2 = 10;
    var resultado;
    for (var i = 0; i <= num3; i++) {
        resultado = num1 * num2 + i;

        console.log(resultado);
        resultado = resultado - num2;
    }
}