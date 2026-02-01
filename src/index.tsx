import { createRoot } from '@wordpress/element';
import React from 'react';
import { useMarketData } from './hooks/useMarketData';
import TickerCard from './components/TickerCard';

const App = () => {
    const { data, loading, error } = useMarketData();

   // Ganti bagian containerStyle di src/index.tsx dengan ini:
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Sedikit lebih lebar
        gap: '24px',
        padding: '30px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#111827', // Dark Background (Mirip Dashboard FXGT)
        borderRadius: '16px',
        color: 'white'
    };

    if (loading && !data) return <div style={{ padding: 20 }}>Loading Market Data...</div>;
    if (error) return <div style={{ color: 'red', padding: 20 }}>Error: {error}</div>;

    return (
        <div style={containerStyle}>
            {data && (
                <>
                    <TickerCard 
                        symbol="BTC" 
                        name="Bitcoin" 
                        price={data.bitcoin.usd} 
                        change={data.bitcoin.usd_24h_change} 
                    />
                    <TickerCard 
                        symbol="ETH" 
                        name="Ethereum" 
                        price={data.ethereum.usd} 
                        change={data.ethereum.usd_24h_change} 
                    />
                </>
            )}
        </div>
    );
};

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('fx-market-root');
    if (container) {
        const root = createRoot(container);
        root.render(<App />);
    }
});