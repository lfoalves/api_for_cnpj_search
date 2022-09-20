// fetch('https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cnpj-basica/v2/basica/')
// fetch('http://normas.receita.fazenda.gov.br/sijut2consulta/link.action?idAto=77256",')
// fetch('https://h-apigateway.conectagov.estaleiro.serpro.gov.br/')
// fetch("https://apigateway.conectagov.estaleiro.serpro.gov.br/api-cnpj-basica/v2/basica/")
// .fetch('https://h-apigateway.conectagov.estaleiro.serpro.gov.br/oauth2/jwt-token')
// fetch('https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cnpj-empresa/v2/empresa/'+ CNPJbasica, {
  //   method: 'GET',
//   headers: {
  //     'Content-type': 'application/json; charset=UTF-8'
  //   }
  // })

  
  let CNPJbasica = document.querySelector("input[type='search']");
  
  const buttonSubmit = document.querySelector("input[type='submit']");
  
  const tabela = document.querySelector('table');
  const razaoSocial = tabela.querySelector('.razao-social')
  const cnpj = tabela.querySelector('.estabelecimento')
  const nomeFantasia = tabela.querySelector('.nome-fantasia')
  
  const atividadePrincipal = document.querySelector('.atividade-principal')
  const porte = document.querySelector('.porte')
  
  const simples = document.querySelector('.simples')
  
  const logradouro = document.querySelector('.logradouro')
  const district = document.querySelector('.district')
  const addressNumber = document.querySelector('.address-number')
  const state  = document.querySelector('.state')
  const city = document.querySelector('.city')
  const country = document.querySelector('.country')
  
  buttonSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    CNPJbasica = CNPJbasica.value;
    console.log('BUSCA DO CNPJ', CNPJbasica)
    fetch('https://publica.cnpj.ws/cnpj/' + CNPJbasica)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      createInfoTable(data)
    })
    .catch((err) => console.log("ERROR CATCH", err))
  })



  function createInfoTable(data) {

    if (!CNPJbasica) {
      return alert('Insira um numero de CNPJ válido');
    }

    razaoSocial.textContent = data.razao_social;
    cnpj.textContent = data.estabelecimento.cnpj;
    nomeFantasia.textContent = data.estabelecimento.nome_fantasia;

    porte.textContent = data.porte.descricao;
    atividadePrincipal.textContent = data.estabelecimento.atividade_principal.classe + ": " + data.estabelecimento.atividade_principal.descricao;

    simples.textContent = data.simples.simples;

    logradouro.textContent = data.estabelecimento.logradouro;
    district.textContent = data.estabelecimento.bairro;
    addressNumber.textContent = data.estabelecimento.numero;
    state.textContent = data.estabelecimento.estado.nome;
    city.textContent = data.estabelecimento.cidade.nome;
    country.textContent = data.estabelecimento.pais.nome;

  }