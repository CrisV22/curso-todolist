document.getElementById('addTaskButton').addEventListener('click', registrationConfirmation);

function registrationConfirmation() {
    let taskInput = document.getElementById('taskInput')

    if (taskInput.value === '') {
        document.getElementById('warnMessage').innerText = 'Por favor, preencha a tarefa antes de adicionar.'
        return
    }
    
    // Limpando campo input
    taskInput.value = ''
    
    // Limpando mensagem de aviso
    warnMessage.innerText = ''

    // Exibindo confirmação de cadastro
    window.alert("Tarefa adicionada com sucesso!")
}