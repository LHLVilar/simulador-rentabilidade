const market = require('../data/market-data.json');

function simulate({ investment, region, type }) {
  const cfg = market[region]?.[type];
  if (!cfg) throw new Error('Região ou tipo de imóvel inválido');

  const units = investment / cfg.price;
  const grossMonthly = units * cfg.dailyRate * cfg.occupancy * 30;
  const fixedCostsMonthly = units * (cfg.condo + cfg.maintenance);
  const adminFee = grossMonthly * cfg.adminRate;
  const profitMonthly = grossMonthly - fixedCostsMonthly - adminFee;
  const annualReturnPct = (profitMonthly * 12) / investment * 100;

  return { units, grossMonthly, profitMonthly, annualReturnPct };
}

module.exports = { simulate };
