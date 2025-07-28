document.getElementById('addTaskButton').addEventListener('click', registrationConfirmation);

function registrationConfirmation() {
    let taskInput = document.getElementById('taskInput');

    if (taskInput.value === '') {
        window.alert("Por favor, preencha a tarefa antes de adicionar.");
        return;
    }
    
    taskInput.value = '';
    window.alert("Tarefa adicionada com sucesso!")
}