const inputCep = document.querySelector("#cep");
const msgAviso = document.querySelector("#msgAviso");
const btnEnviaCep = document.querySelector("#btnEnviaCep");
const dadosCepUnitario = document.getElementById("dadosCepUnitario");

async function verCep(cepValue) {
  const urlViaCEP = `https://viacep.com.br/ws/${cepValue}/json/`;

  let response = await fetch(urlViaCEP);

  let json = await response.json();

  if (json.erro) {
    dadosCepUnitario.innerHTML = `<p>O CEP ${cepValue} não é mais valido.</p>`;
  } else {
    dadosCepUnitario.innerHTML = `

    <ul id="json-campos">
      <li><strong>CEP:</strong> ${json.cep}</li>
<li><strong>Logradouro:</strong> ${json.logradouro}</li>
<li><strong>Complemento:</strong> ${json.complemento}</li>
<li><strong>Bairro:</strong> ${json.bairro}</li>
<li><strong>Localidade:</strong> ${json.localidade}</li>
<li><strong>UF:</strong> ${json.uf}</li>
<li><strong>Estado:</strong> ${json.estado}</li>
<li><strong>Região:</strong> ${json.regiao}</li>
<li><strong>DDD:</strong> ${json.ddd}</li>
    </ul>`;
  }
  inputCep.value = "";
}

const VerCep = () => {
  dadosCepUnitario.innerHTML = "";
  msgAviso.innerHTML = "";
  const cepValue = inputCep.value.replace("-", "").replace(" ", "");
  if (cepValue === "") {
    msgAviso.innerHTML = "<p>Por favor digite um CEP válido.</p>";
  } else {
    verCep(cepValue);
  }
};

btnEnviaCep.addEventListener("click", VerCep);
