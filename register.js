    const form = document.getElementById("register-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const usuario = document.getElementById("usuario").value.trim();
      const senha = document.getElementById("senha").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem");

      if (usuario && senha && email) {
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("senha", senha);
        localStorage.setItem("email", email);

        mensagem.style.color = "green";
        mensagem.textContent = "Cadastro realizado com sucesso! Redirecionando para login...";

        setTimeout(() => {
          window.location.href = "login.html";
        }, 2000);
      } else {
        mensagem.style.color = "red";
        mensagem.textContent = "Por favor, preencha todos os campos.";
      }
    });
  