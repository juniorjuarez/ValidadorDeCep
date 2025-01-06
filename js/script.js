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
      <li>CEP: ${json.cep}</li>
      <li>Logradouro: ${json.logradouro}</li>
      <li>Complemento: ${json.complemento} </li>
      <li>Bairro: ${json.bairro}</li>
      <li>Localidade: ${json.localidade}</li>
      <li>UF: ${json.uf}</li>
      <li>Estado: ${json.estado}</li>
      <li>Região: ${json.regiao}</li>
      <li>DDD: ${json.ddd}</li>
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
