import React from 'react';

interface TickerCardProps {
    symbol: string; // Misal: BTC
    name: string;   // Misal: Bitcoin
    price: number;
    change: number; // Persentase perubahan 24 jam
}

const TickerCard: React.FC<TickerCardProps> = ({ symbol, name, price, change }) => {
    // Logika Warna: Hijau jika naik (>=0), Merah jika turun
    const isUp = change >= 0;
    const colorClass = isUp ? '#10B981' : '#EF4444'; // Tailwind Green-500 & Red-500
    
    // Format mata uang USD
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    // Ganti bagian cardStyle di src/components/TickerCard.tsx dengan ini:
    const cardStyle = {
        background: '#1F2937', // Abu-abu gelap (Dark Surface)
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'space-between',
        minWidth: '200px',
        borderLeft: `4px solid ${colorClass}`,
        color: '#F3F4F6' // Teks putih terang
    };

    // Dan pastikan teks symbol/name di dalam return juga warnanya pas:
    // Ganti bagian <span> symbol dan name dengan ini:
    /*
    <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#F9FAFB' }}>{symbol}</span>
    <span style={{ fontSize: '0.8rem', color: '#9CA3AF', marginLeft: '8px' }}>{name}</span>
    */
    
    // Ganti bagian harga besar dengan ini:
    /*
    <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#F3F4F6', letterSpacing: '-0.025em' }}>
        {formattedPrice}
    </div>
    */

    return (
        <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#1F2937' }}>{symbol}</span>
                    <span style={{ fontSize: '0.8rem', color: '#6B7280', marginLeft: '8px' }}>{name}</span>
                </div>
                <div style={{ 
                    backgroundColor: isUp ? '#D1FAE5' : '#FEE2E2', 
                    color: colorClass, 
                    padding: '2px 8px', 
                    borderRadius: '9999px', 
                    fontSize: '0.75rem', 
                    fontWeight: 'bold' 
                }}>
                    {change.toFixed(2)}%
                </div>
            </div>
            
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111827' }}>
                {formattedPrice}
            </div>
        </div>
    );
};

export default TickerCard;