const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const cryptoContainer = document.getElementById('crypto-container');
        data.forEach(coin => {
            const cryptoCard = document.createElement('div');
            cryptoCard.className = 'crypto-card';

            const img = document.createElement('img');
            img.src = coin.image;
            img.alt = coin.name;

            const name = document.createElement('h2');
            name.textContent = coin.name;

            const price = document.createElement('p');
            price.textContent = `Current Price: $${coin.current_price}`;

            const change = document.createElement('p');
            change.textContent = `24h Change: ${coin.price_change_percentage_24h.toFixed(2)}%`;
            change.style.color = coin.price_change_percentage_24h < 0 ? 'red' : 'green';

            cryptoCard.appendChild(img);
            cryptoCard.appendChild(name);
            cryptoCard.appendChild(price);
            cryptoCard.appendChild(change);

            cryptoContainer.appendChild(cryptoCard);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
