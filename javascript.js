function calcular(operacao) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const output = document.getElementById("output");
    const history = document.getElementById("history");
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        output.value = "Valores inválidos";
        return;
    }

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                output.value = "Divisão por zero!";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida";
    }

    output.value = resultado;

    // Adiciona operação ao final do histórico
    const entrada = document.createElement("p");
    entrada.textContent = `${num1} ${operacao} ${num2} = ${resultado}`;
    history.appendChild(entrada);

    // Limita o histórico a 10 itens
    if (history.querySelectorAll("p").length > 10) {
        history.removeChild(history.querySelector("p")); // Remove o mais antigo
    }
}