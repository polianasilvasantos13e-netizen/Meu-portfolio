
document.getElementById("formulario-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let mensagem = document.getElementById("mensagem").value;

    if (email === "" || telefone === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
    } else {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("formulario-contato").reset();
    }
});
