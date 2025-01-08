const inputFile = document.querySelector("#arquivo-cep");
const prewviewCeps = document.querySelector("#prewviewCeps");
const validarListaCep = document.querySelector("#validarListaCep");

document.querySelector("arquivoExemplo");

function validaCaractereCep(cep) {
  const regex = /^[0-9]+$/;
  return regex.test(cep);
}

const conteudoArquivo = [
  "39403-076",
  "0100-1000",
  "0201-2000",
  "03021000",
  "04023000",
  "05047000",
  "06059000",
];

arquivoExemplo.addEventListener("click", () => {
  const blob = new Blob([conteudoArquivo], { type: "text/plain" });

  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.href = url;

  link.download = "exemplo.txt";

  link.click();
  window.URL.revokeObjectURL(url);
});

let listaCeps = document.querySelector("#listaCeps");
let cepsArrray = [];

inputFile.addEventListener("change", (event) => {
  const file = event.target.files[0];
  function isValidTxt(file) {
    const isTxtExtesion = file.name.endsWith(".txt");
    const isMimeType = file.type === "text/plains";
    return isTxtExtesion;
  }

  if (file) {
    if (isValidTxt(file)) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const content = reader.result.split(",");

        for (let i = 0; i < content.length; i++) {
          let item = content[i].replace("-", "").replace(" ", "");
          if (item.length == 7) {
            item = "0" + item;
          }
          if (validaCaractereCep(item)) {
            cepsArrray.push(item);
          } else {
            listaCeps.innerHTML += `<span> CEP ${item} não é um CEP valido.</span>`;
          }
        }

        // cepsArrray = content.map((item) =>

        //   item.replace("-", "").replace(" ", "")
        // );

        prewviewCeps.innerHTML = "";
        prewviewCeps.innerHTML = `
        <pre>${cepsArrray}</pre> 
         <button type="submit" id="limpaPreview">Limpar</button>
        `;
        const limpaPreview = document.querySelector("#limpaPreview");

        limpaPreview.addEventListener("click", () => {
          prewviewCeps.innerHTML = "";
        });
      });
      reader.readAsText(file);
    } else {
      alert("Arquivo precisa ser do tipo '.txt'");
    }
  } else {
    alert("nenhum aruqivo importado");
  }
});

async function validaListaCep(cep) {
  let urlViaCEP = `https://viacep.com.br/ws/${cep}/json/`;
  let response = await fetch(urlViaCEP);
  let json = await response.json();

  if (json.erro) {
    listaCeps.innerHTML += `<span> CEP ${cep} não é mais valido.</span>`;
  } else {
    listaCeps.innerHTML += `

    <ul id="ceps-lista-ul">
      <li><strong>CEP:</strong> ${json.cep}</li>
      <li><strong>Logradouro:</strong> ${json.logradouro}</li>
      <li><strong>Complemento:</strong> ${json.complemento}</li>
      <li><strong>Bairro:</strong> ${json.bairro}</li>
      <li><strong>Localidade:</strong> ${json.localidade}</li>
      <li><strong>UF:</strong> ${json.uf}</li>
      <li><strong>Estado:</strong> ${json.estado}</li>
      <li><strong>Região:</strong> ${json.regiao}</li>
      <li><strong>DDD:</strong> ${json.ddd}</li>
    </ul>
    `;
  }
}

validarListaCep.addEventListener("click", () => {
  if (cepsArrray.length > 0) {
    for (let index = 0; index <= 10; index++) {
      validaListaCep(cepsArrray[index]);
    }
  } else {
    alert("Nenhum arquivo importado");
  }
});
