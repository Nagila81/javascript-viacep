fetch("https://viacep.com.br/ws/61761390/json/")
.then(resposta => resposta.json())
.then(jsonTratado => {
    console.log(`A minha rua é a: ${jsonTratado.logradouro}`);
    
})