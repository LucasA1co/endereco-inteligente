document.getElementById("form-endereco").addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio automático

  const cep = document.getElementById("cep").value.trim();
  const logradouro = document.getElementById("logradouro").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const uf = document.getElementById("uf").value.trim().toUpperCase();

  // Regex de validação
  const regexCEP = /^\d{5}-\d{3}$/;
  const regexNumero = /^\d+$/;
  const regexUF = /^[A-Z]{2}$/;

  // Validações
  if (!regexCEP.test(cep)) {
    alert("CEP inválido! Use o formato 00000-000.");
    return;
  }

  if (logradouro.length < 5) {
    alert("O logradouro deve conter no mínimo 5 caracteres.");
    return;
  }

  if (!regexNumero.test(numero)) {
    alert("O número deve conter apenas dígitos numéricos.");
    return;
  }

  if (!regexUF.test(uf)) {
    alert("UF inválida! Use duas letras maiúsculas (ex: SP, RJ).");
    return;
  }

  alert("Endereço cadastrado com sucesso!");
});

// Máscara do CEP
document.getElementById("cep").addEventListener("input", function(e) {
  let value = e.target.value.replace(/\D/g, ""); // remove tudo que não é dígito
  if (value.length > 5) {
    value = value.replace(/(\d{5})(\d)/, "$1-$2"); // adiciona o traço
  }
  e.target.value = value;
});

// Converter UF para maiúsculo automaticamente
document.getElementById("uf").addEventListener("input", function(e) {
  e.target.value = e.target.value.toUpperCase();
});
