// utils/simulator.js

function simulate(input) {
  const {
    valorInvestimento, // valor informado pelo usuário (aporte inicial)
    bairro,
    tipoOperacao, // Valorização, Renda Passiva Short Stay, Renda Passiva Long Stay
    prazoAporte,  // à vista, fluxo lançamento, fluxo pronto
    rentabilidadeAnualMinima // taxa mínima exigida pelo usuário (ex: 0.10 = 10%)
  } = input;

  // --- Rentabilidade simulada ---
  const rentabilidade = valorInvestimento * 0.12; // exemplo fixo de 12% a.a. (ajustar depois)

  // --- Liquidez por bairro ---
  let liquidez = "Normal";
  if (["Pinheiros", "Vila Olímpia", "Itaim"].includes(bairro)) {
    liquidez = "Alta";
  }

  // --- Prazo para aporte ---
  let aporteConsiderado = valorInvestimento;
  let valorImovel = valorInvestimento; // default

  if (prazoAporte === "à vista") {
    valorImovel = valorInvestimento;
  }

  if (prazoAporte === "fluxo lançamento") {
    if (valorInvestimento < 50000) {
      valorImovel = valorInvestimento / 0.15; // aporte é 15% do total
      aporteConsiderado = valorInvestimento;
    } else {
      // sugestão: assumir aporte informado como entrada sem estimar valor do imóvel
      valorImovel = valorInvestimento; 
    }
  }

  if (prazoAporte === "fluxo pronto") {
    valorImovel = valorInvestimento / 0.30; // aporte é 30% do total
    aporteConsiderado = valorInvestimento;
  }

  // --- VPL ---
  const periodo = 10; // 10 anos
  const taxa = rentabilidadeAnualMinima;
  let vpl = 0;

  for (let t = 1; t <= periodo; t++) {
    const fluxo = rentabilidade;
    vpl += fluxo / Math.pow(1 + taxa, t);
  }

  vpl -= aporteConsiderado;

  // --- TIR (Taxa Interna de Retorno) simplificada ---
  // aqui pode ser refinado depois com Newton-Raphson ou outro método
  const tir = (rentabilidade / aporteConsiderado).toFixed(4);

  // --- Vacância ---
  let vacancia = "Satisfatória";
  if (tipoOperacao.includes("Short Stay")) {
    vacancia = "Baixa";
  }

  return {
    rentabilidade,
    liquidez,
    prazoAporte,
    tipoOperacao,
    vpl,
    tir,
    vacancia,
    valorImovelEstimado: valorImovel
  };
}

module.exports = { simulate };
