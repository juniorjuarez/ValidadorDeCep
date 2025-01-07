# Validador de CEP

O **Validador de CEP** é uma ferramenta prática para validação e consulta de CEPs brasileiros. Permite validar um único CEP ou importar um arquivo de texto com múltiplos CEPs para validação em lote.

## Funcionalidades

- **Validação de CEP Unitário**:
  - Insira um CEP no formato `xxxxx-xxx` para validação.
  - Exibe informações detalhadas, como logradouro, bairro, localidade, estado e DDD.

- **Importação e Validação de Múltiplos CEPs**:
  - Faça upload de um arquivo `.txt` com até 10 CEPs para validação em lote.
  - Exibição de resultados detalhados para cada CEP válido.

- **Exemplo de Arquivo**:
  - Gere um arquivo de exemplo diretamente pela interface para testes rápidos.

- **Máscara de Input**:
  - Campo de CEP configurado para aceitar o formato `00000-000` de forma automatizada.

## Como Usar

### Validação Unitária
1. Insira um CEP no campo "CEP" na página principal.
2. Clique no botão "Validar".
3. Os detalhes do CEP, caso válido, serão exibidos abaixo do campo de entrada.

### Validação de Múltiplos CEPs
1. Clique no botão "Arquivo de exemplo" para baixar um arquivo de amostra.
2. Faça upload de um arquivo `.txt` com até 10 CEPs separados por vírgulas.
3. Clique no botão "Validar CEPs".
4. Os resultados serão exibidos na tela, destacando CEPs válidos e inválidos.

## Tecnologias Utilizadas

- **HTML**: Estrutura da interface do usuário.
- **CSS**: Estilos personalizados para uma interface limpa e responsiva.
- **JavaScript**:
  - Validação e integração com a API ViaCEP para consulta de dados.
  - Manipulação dinâmica de arquivos e exibição de resultados.

## Bibliotecas Utilizadas

- [jQuery](https://jquery.com/): Para manipulação do DOM e eventos.
- [jQuery Mask Plugin](https://igorescobar.github.io/jQuery-Mask-Plugin/): Para aplicação de máscara no campo de CEP.

## Melhorias Planejadas

- Implementação de validação de CEPs diretamente via upload de arquivos em outros formatos (ex.: `.csv`).
- Aprimoramento da interface de resultados com indicadores visuais.
- Suporte para exportação de resultados em arquivos `.txt` ou `.csv`.

## Como Contribuir

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:
1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Envie suas alterações para revisão (`git push origin feature/nova-feature`).
4. Abra um Pull Request.

## Licença

Este projeto é licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais informações.
