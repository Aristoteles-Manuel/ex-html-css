
const form = document.getElementById("loginForm");
const email = document.getElementById("ilogin");
const senha = document.getElementById("isenha");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    validarCampos();
});

function validarCampos() {
    const emailValue = email.value.trim();
    const senhaValue = senha.value.trim();

    let valido = true;

    // EMAIL
    if (emailValue === "") {
        setErro(email, "O e-mail é obrigatório");
        valido = false;
    } 
    else if (!validarEmail(emailValue)) {
        setErro(email, "Digite um e-mail válido");
        valido = false;
    } 
    else {
        setSucesso(email);
    }

    // SENHA
    if (senhaValue === "") {
        setErro(senha, "A senha é obrigatória");
        valido = false;
    } 
    else if (senhaValue.length < 6) {
        setErro(senha, "A senha deve ter pelo menos 6 caracteres");
        valido = false;
    } 
    else {
        setSucesso(senha);
    }

    // Se tudo estiver válido
    if (valido) {
        alert("Login enviado com sucesso ✅");
        form.submit();
    }
}

function setErro(input, mensagem) {
    const grupo = input.parentElement;
    const small = grupo.querySelector(".error");

    input.classList.add("erro");
    input.classList.remove("sucesso");

    small.innerText = mensagem;
    small.style.display = "block";
}

function setSucesso(input) {
    const grupo = input.parentElement;
    const small = grupo.querySelector(".error");

    input.classList.add("sucesso");
    input.classList.remove("erro");

    small.style.display = "none";
}

function validarEmail(email) {
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
}
