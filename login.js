// ==============================================
// ALTERAÇÃO 21/08 - LOGIN E CADASTRO SIMULADOS
// ==============================================


const botaoEntrar =
    document.getElementById("botaoEntrar");


const botaoCadastro =
    document.getElementById("botaoCadastro");


const formLogin =
    document.getElementById("formLogin");


const formCadastro =
    document.getElementById("formCadastro");



// ========================================
// ALTERAÇÃO 21/08 - MOSTRAR LOGIN
// ========================================

botaoEntrar.addEventListener(
    "click",
    function(){

        formLogin.style.display = "block";

        formCadastro.style.display = "none";


        botaoEntrar.classList.add(
            "opcaoAtiva"
        );


        botaoCadastro.classList.remove(
            "opcaoAtiva"
        );

    }
);



// ========================================
// ALTERAÇÃO 21/08 - MOSTRAR CADASTRO
// ========================================

botaoCadastro.addEventListener(
    "click",
    function(){

        formLogin.style.display = "none";

        formCadastro.style.display = "block";


        botaoCadastro.classList.add(
            "opcaoAtiva"
        );


        botaoEntrar.classList.remove(
            "opcaoAtiva"
        );

    }
);



// ========================================
// ATUALIZAÇÃO 10/11 - LOGIN DIDÁTICO COM JSON
// ========================================
// ATENÇÃO: Demonstração com usuários fictícios.
// O JSON e a senha são públicos; não é autenticação segura.

formLogin.addEventListener(
    "submit",
    async function(event){

        event.preventDefault();

        const campoEmail =
            formLogin.querySelector('input[type="email"]');

        const campoSenha =
            formLogin.querySelector('input[type="password"]');

        const email = campoEmail.value.trim().toLowerCase();
        const senha = campoSenha.value;

        const botaoAcessar =
            formLogin.querySelector('button[type="submit"]');

        botaoAcessar.disabled = true;

        try {

            // Lê o arquivo usuarios.json na mesma pasta do HTML.
            const resposta = await fetch("./usuarios.json", {
                cache: "no-store"
            });

            if(!resposta.ok){
                throw new Error("Não foi possível abrir usuarios.json");
            }

            const usuarios = await resposta.json();

            if(!Array.isArray(usuarios)){
                throw new Error("O JSON deve conter uma lista de usuários");
            }

            // Procura um usuário com e-mail e senha iguais.
            const usuarioEncontrado = usuarios.find(function(usuario){

                return (
                    typeof usuario.email === "string" &&
                    usuario.email.trim().toLowerCase() === email &&
                    usuario.senha === senha
                );

            });

            if(usuarioEncontrado){

                alert("Bem-vindo(a), " + usuarioEncontrado.nome + "!");

                window.location.href = "catalogo.html";

            }else{

                alert("E-mail ou senha incorretos.");

                campoSenha.value = "";
                campoSenha.focus();

            }

        }catch(erro){

            console.error("Erro ao ler usuarios.json:", erro);

            alert(
                "Não foi possível carregar os usuários. " +
                "Abra o site por HTTP/HTTPS (por exemplo, GitHub Pages)."
            );

        }finally{

            botaoAcessar.disabled = false;

        }

    }
);



// ========================================
// ATUALIZAÇÃO 10/11 - CADASTRO DIDÁTICO
// ========================================
// Uma página HTML não consegue gravar novos dados
// diretamente no arquivo usuarios.json do GitHub.

formCadastro.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        alert(
            "Cadastro de demonstração: para adicionar um usuário, " +
            "inclua-o manualmente no arquivo usuarios.json. " +
            "O cadastro automático exige um serviço ou back-end."
        );

    }
);
