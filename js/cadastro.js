// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function buscaCep(){
  let cep = document.getElementById('cep').value;
  if(cep !== ""){
      let url= "https://brasilapi.com.br/api/cep/v1/" + cep;
      
      let req = new XMLHttpRequest();
      req.open("GET", url);
      req.send();
  
  // resposta
  
  req.onload = function() {
  if(req.status === 200){
  
      let endereco = JSON.parse(req.response);
      document.getElementById("address").value = endereco.street;
      document.getElementById("neighborhood").value = endereco.neighborhood;
      document.getElementById("city").value = endereco.city;
      document.getElementById("state").value = endereco.state;
  
  }
  
  else if (req.status === 404) {
      alert("CEP inválido");
  
  }
  
  else { alert ("Erro")}
  }
  }
  
  }
  
  window.onload = function() {
      let txtCep = document.getElementById("cep");
      txtCep.addEventListener("blur", buscaCep);
  
  }

  // botoes

function login () {
  window.location.href = "/html/login.html";
}

function cadastro () {
  window.location.href = "/html/cadastro.html";
}

function resetpassword () {
  window.location.href = "/html/resetsenha.html";
}

function mudarSenha () {
  alert ("Se os dados informados estiverem cadastrados no nosso banco de dados, você receberá um link para recuperar o seu acesso. Isso pode levar alguns minutos.")
}

function entrar () {
  alert ("Aguarde, você está sendo redirecionado")
}
