//criando um array de usuarios
const usuarios = [];

//pegando o formulário
const formularioCadastro = document.querySelector('[data-formulario-cadastro]');
const formularioLogin = document.querySelector('[data-formulario-login]');
const botaoCadastrar = document.querySelector('[data-botao-cadastrar]');

botaoCadastrar.addEventListener('click', (evento)=>{
    evento.preventDefault();

        //pegando os inputs de usuario e senha
        var inputNome = document.querySelector('[data-nome]');
        var inputSenha = document.querySelector('[data-senha]');
        var nome = inputNome.value;
        var senha = inputSenha.value;
        console.log(nome);
        console.log(senha);
    
        //chamando função que cria um usuário
        criaUsuario(nome.value, senha.value);
    
        inputNome.value = "";
        inputSenha.value = "";   

});


formularioCadastro.addEventListener("submit", (evento)=>{
    evento.preventDefault();

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


/*formularioLogin.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    //pegando os inputs de usuario e senha
    var nome = evento.target.elements['nome'];
    var senha = evento.target.elements['senha'];

    var usuarioCadastrado = {
        "nome": nome,
        "senha": 
    }
    if (usuarioCadastrado == usuarioCadastros) {
        alert(`Usuario: ${nome}`);

        setTimeout(function() {
            window.location.assign("file:///C:/Users/debor/OneDrive/%C3%81rea%20de%20Trabalho/conquiste_sua_vaga_projetos/salao_de_cabeleleiro_cadastro_de_usuario/usuario_logado.html");
        }, 3000);
    }else{alert(`Usuário ${nome} não cadastrado`)}

    limpaCampos(nome, senha);


}); */ 
