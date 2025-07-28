document.getElementById('addTaskButton').addEventListener('click', registrationConfirmation);

function registrationConfirmation() {
    // Pega o elemento do DOM e coloca na variavel tasInput
    let taskInput = document.getElementById('taskInput'); 

    // Verifica se o campo de input está vazio
    if (taskInput.value == '') {
        window.alert("Por favor, preencha a tarefa antes de adicionar.");
        return;
    }
    
    // Modificando o valor da variavel taskInput para vazio (limpar o campo)
    taskInput.value = '';
    window.alert("Tarefa adicionada com sucesso!")
}

// nome-função(parâmetros) {comandos}
// = atribuição
let x = 5; // x recebe o valor 5

// == comparação de valor
console.log('5' == 5); // true, pois compara apenas o valor

// === comparação de valor e tipo
console.log('5' === 5); // false, pois compara valor e tipo