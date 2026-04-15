const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1"

const lista = document.getElementById("lista");

async function loadCoins() {
  const res = await fetch(URL);
  const data = await res.json();

  lista.innerHTML = "";

  data.forEach(coin => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${coin.name}</h3>
      <p>$${coin.current_price}</p>
    `;

    lista.appendChild(div);
  });
}

loadCoins();