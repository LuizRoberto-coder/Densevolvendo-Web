// Redirecionamento para a página de login ao clicar no botão do usuario
const loginBtn = document.getElementById("login-btn");

if(loginBtn){
  loginBtn.addEventListener("click", () =>{
    window.location.href = "login.html";
  });
}

// Salvar as credensciais escolhidas pelo usuário ao preencher pela primeira vez e usa lcalStronge para armazená-las entre sessões
const form = document.getElementById("login-form");

if(form){
  form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("mensagem");

    const usuarioSalvo = localStorage.getItem("usuario");
    const senhaSalva = localStorage.getItem("senha");

    if (! usuarioSalvo || !senhaSalva){
      // se não houver credenciais salvas, salva os dados digitados
      localStorage.setItem("usuario", usuario);
      localStorage.setItem("senha", senha);
      mensagem.textContent = "Cadastro realizado com sucesso! clique novamente para entrar. ";
      mensagem.style.color = "green";
    
      // Redireciona após pequeno atraso
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);

  }else{
      // se já houver dados salvos, valida
      if (usuario === usuarioSalvo && senha === senhaSalva){
        window.location.href = "index.html";
      } else{
        mensagem.textContent = "usuario ou senha incorretos."
        mensagem.style.color = "red";
      }
    }
  });
}


