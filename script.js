function mostrarResposta(opcao) {
    const resultado = document.getElementById("resultado");
  
    if (opcao === 1) {
      resultado.textContent = "Incorreto!";
    } else if (opcao === 2) {
      resultado.textContent = "Incorreto!";
    } else if (opcao === 3) {
      resultado.textContent = "Correto! Parabéns você acertou!!!";
    } else if (opcao === 4) {
      resultado.textContent = "Incorreto!";
    }
  }