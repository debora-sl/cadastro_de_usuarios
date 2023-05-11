//criando um array de usuarios
const usuarios = [];

//pegando o formulário
const formularioCadastro = document.querySelector('[data-formulario-cadastro]');
const formularioLogin = document.querySelector('[data-formulario-login]');

formularioCadastro.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    //pegando os inputs de usuario e senha
    const nome = evento.target.elements['nome'];
    const senha = evento.target.elements['senha'];


    //chamando função que cria um usuário
    criaUsuario(nome.value, senha.value);

    //limpando os inputs
    nome.value = "";
    senha.value = "";

});

//função que cria o usuario
function criaUsuario(nome, senha) {

    //criando os novos usuarios
    const novoNome = nome;
    const novaSenha = senha;

    //criando objeto usuario
    const usuario = {
        "nome": novoNome,
        "senha": novaSenha
    };

    //incluindo o objeto dentro do array
    usuarios.push(usuario);

    //salvando os itens no localStorage
    localStorage.setItem("usuario", JSON.stringify(usuarios));
    alert(`Usuario ${novoNome}, cadastrado com sucesso!`);
};

//Login
formularioLogin.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    



});
