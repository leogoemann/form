document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Captura os valores dos campos
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("e-mail").value;
        const fone = document.getElementById("fone").value;
        const dataCadastro = document.getElementById("data_cadastro").value;
        const tipoContato = document.getElementById("tipo_contato").value;
        const mensagem = document.querySelector("textarea").value;

        // Referência à tabela
        const tabela = document.getElementById("grid");

        // Criação de nova linha e colunas
        const novaLinha = tabela.insertRow(-1);

        const colNome = novaLinha.insertCell(0);
        const colEmail = novaLinha.insertCell(1);
        const colFone = novaLinha.insertCell(2);
        const colCadastro = novaLinha.insertCell(3);
        const colContato = novaLinha.insertCell(4);
        const colMensagem = novaLinha.insertCell(5);

        // Atribuição dos valores
        colNome.textContent = nome;
        colEmail.textContent = email;
        colFone.textContent = fone;
        colCadastro.textContent = dataCadastro;
        colContato.textContent = tipoContato;
        colMensagem.textContent = mensagem;

        // Limpa o formulário após adicionar os dados
        form.reset();
    });
});
