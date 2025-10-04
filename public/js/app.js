document.getElementById('simulateBtn').addEventListener('click', async () => {
  const investment = Number(document.getElementById('investment').value);
  const region = document.getElementById('region').value;
  const type = document.getElementById('type').value;

  const res = await fetch('/api/simulate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ investment, region, type })
  });

  const data = await res.json();

  if (data.error) {
    document.getElementById('result').innerHTML = `<p style="color:red">${data.error}</p>`;
    return;
  }

  document.getElementById('result').innerHTML = `
    <p>Unidades possíveis: ${data.units.toFixed(2)}</p>
    <p>Receita bruta mensal: R$ ${data.grossMonthly.toFixed(2)}</p>
    <p>Lucro líquido mensal: R$ ${data.profitMonthly.toFixed(2)}</p>
    <p>Rentabilidade anual: ${data.annualReturnPct.toFixed(2)}%</p>
  `;
});

document.getElementById('leadBtn').addEventListener('click', async () => {
  const name = prompt('Nome completo:');
  const whatsapp = prompt('WhatsApp:');
  const email = prompt('E-mail:');

  const res = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, whatsapp, email })
  });

  const data = await res.json();
  if (data.success) alert('Obrigado! Entraremos em contato.');
});
