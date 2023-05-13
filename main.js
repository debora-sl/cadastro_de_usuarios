//criando um array de usuarios
const usuarios = [];

//pegando o formulário
const formularioCadastro = document.querySelector('[data-formulario-cadastro]');
const formularioLogin = document.querySelector('[data-formulario-login]');

formularioCadastro.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    //pegando os inputs de usuario e senha
    var nome = evento.target.elements['nome'];
    var senha = evento.target.elements['senha'];


    //chamando função que cria um usuário
    criaUsuario(nome.value, senha.value);

    limpaCampos(nome, senha);

});

//função que cria o usuario
function criaUsuario(nome, senha) {

    //criando os novos usuarios
    const novoNome = nome;
    const novaSenha = senha;
    var usuarioCadastros = [];

    //criando objeto usuario
    const usuario = {
        "nome": novoNome,
        "senha": novaSenha
    };

    //incluindo o objeto dentro do array
    usuarios.push(usuario);

    //salvando os usuarios no localStorage
    localStorage.setItem("usuario", JSON.stringify(usuarios));

    alert(`Usuario ${novoNome}, cadastrado com sucesso!`);

    setTimeout(function() {
        window.location.assign("file:///C:/Users/debor/OneDrive/%C3%81rea%20de%20Trabalho/conquiste_sua_vaga_projetos/salao_de_cabeleleiro_cadastro_de_usuario/usuario_logado.html");
    }, 3000);
   
    //pegando os usuarios no localStorage
    usuarioCadastros = localStorage.getItem("usuario");
    usuarioCadastros = JSON.parse(usuarioCadastros);
    console.log(usuarioCadastros);



};

function limpaCampos(nome, senha) {
    //limpando os inputs
    nome.value = "";
    senha.value = "";       
    }

/*Login
formularioLogin.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    



}); */
