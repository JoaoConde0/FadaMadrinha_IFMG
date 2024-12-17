// Detecta a URL atual da página
const paginaAtual = window.location.pathname;

// Lógica para a página de login
if (paginaAtual.includes("Login.html")) {
  const formulario = document.getElementById('Logar');

  formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;

    // Redireciona para a página Inicial.html com o nome na URL
    window.location.href = `Inicial.html?nome=${encodeURIComponent(nome)}`;
  });
}


// Lógica para a página Inicial.html
if (paginaAtual.includes("Inicial.html")) {
  // Função para obter parâmetros da URL
  function obterParametroURL(nomeParametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nomeParametro);
  }

  // Recupera o parâmetro "nome" da URL
  let nome = obterParametroURL('nome');

  // Mostra o alerta com o nome ou "Visitante"
  if (nome) {
    window.alert(`Olá, ${nome}! É um prazer te ver novamente!`);
  } else {
    nome = 'Visitante';
    window.alert(`Olá, ${nome}! É um prazer te ver novamente!`);
  }

  // Insere o nome na página
  const nomeUsuario = document.getElementById('nomeUsuario');
  nomeUsuario.textContent = nome;
}