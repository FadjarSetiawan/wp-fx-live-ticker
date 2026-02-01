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