import React, { useState } from 'react';

const Stock: React.FC = () => {
    const [stockPrice, setStockPrice] = useState<number>(100); // Initial stock price
    const [quantity, setQuantity] = useState<number>(1); // Default quantity for buy/sell

    const buyStock = () => {
        alert(`Bought ${quantity} shares at $${stockPrice} each.`);
    };

    const sellStock = () => {
        alert(`Sold ${quantity} shares at $${stockPrice} each.`);
    };

    const updateStockPrice = () => {
        const newPrice = Math.floor(Math.random() * 200) + 1; // Random price between 1 and 200
        setStockPrice(newPrice);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Stock Tracker</h1>
            <p>Current Stock Price: ${stockPrice}</p>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                style={{ width: '60px', marginRight: '10px' }}
            />
            <button onClick={buyStock}>Buy Stock</button>
            <button onClick={sellStock} style={{ marginLeft: '10px' }}>Sell Stock</button>
            <button onClick={updateStockPrice} style={{ marginLeft: '10px' }}>Update Price</button>
        </div>
    );
};

export default Stock;
