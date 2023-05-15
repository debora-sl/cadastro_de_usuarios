//criando um array de usuarios
const usuarios = [];
var usuarioCadastros = [];

//pegando o formulário
const formularioCadastrar = document.querySelector('[data-formulario-cadastro]');
formularioCadastrar.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    //pegando o botão
    const botaoCadastrar = document.querySelector('[data-botao-cadastrar]');
    botaoCadastrar.addEventListener('click', ()=>{
        const inputNome = document.querySelector('[data-nome]');
        const nome = inputNome.value;
        const inputSenha = document.querySelector('[data-senha]');
        const senha = inputSenha.value;

        //limpando os campos dos inputs
        inputNome.value = "";
        inputSenha.value = "";

        //criando objeto usuario
        const usuario = {
            "nome": nome,
            "senha": senha
        };
        //incluindo o objeto dentro do Array
        usuarios.push(usuario);
        console.log(usuario);

        //salvando os usuários no localStorage
        localStorage.setItem("usuario", JSON.stringify(usuarios));

        alert(`Usuario ${nome}, cadastrado com sucesso!`);

        setTimeout(function() {
            window.location.assign("file:///C:/Users/debor/OneDrive/%C3%81rea%20de%20Trabalho/conquiste_sua_vaga_projetos/salao_de_cabeleleiro_cadastro_de_usuario/usuario_logado.html");
        }, 2000);
    
        //*pegando os usuarios no localStorage
        usuarioCadastros = localStorage.getItem("usuario");
        usuarioCadastros = JSON.parse(usuarioCadastros);
        console.log(usuarioCadastros);
        
    });
});




/* function criaUsuario(nome, senha) {
    //criando os novos usuarios
    const novoNome = nome;
    const novaSenha = senha;
    var usuarioCadastros = [];

    //criando objeto usuario
    const usuario = {
        "nome": novoNome,
        "senha": novaSenha
    }

     //incluindo o objeto dentro do array
    usuarios.push(usuario);

     localStorage.setItem("usuario", JSON.stringify(usuarios));

    alert(`Usuario ${novoNome}, cadastrado com sucesso!`);

    setTimeout(function() {
        window.location.assign("file:///C:/Users/debor/OneDrive/%C3%81rea%20de%20Trabalho/conquiste_sua_vaga_projetos/salao_de_cabeleleiro_cadastro_de_usuario/usuario_logado.html");
    }, 3000);

    //pegando os usuarios no localStorage
    usuarioCadastros = localStorage.getItem("usuario");
    usuarioCadastros = JSON.parse(usuarioCadastros);
    console.log(usuarioCadastros);
} */
