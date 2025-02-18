document.getElementById("cep").addEventListener("input", function() {
    let cep = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (cep.length === 8) {
      buscarEndereco(cep);
    }
  });
  
  function buscarEndereco(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao conectar na API");
        }
        return response.json();
      })
      .then(data => {
        if (data.erro) {
          alert("CEP não encontrado!");
          return;
        }
        // Preenche os campos automaticamente
        document.getElementById("logradouro").value = data.logradouro || "";
        document.getElementById("bairro").value = data.bairro || "";
        document.getElementById("cidade").value = data.localidade || "";
        document.getElementById("estado").value = data.uf || "";
      })
      .catch(error => console.error("Erro ao buscar CEP", error));
  }
  