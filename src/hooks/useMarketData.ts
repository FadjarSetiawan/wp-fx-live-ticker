import { useState, useEffect } from 'react';

// Tipe data untuk response API CoinGecko
interface CoinData {
    usd: number;
    usd_24h_change: number;
}

interface MarketData {
    bitcoin: CoinData;
    ethereum: CoinData;
}

export const useMarketData = () => {
    const [data, setData] = useState<MarketData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPrices = async () => {
        try {
            // Kita minta harga USD dan perubahan 24 jam untuk warna indikator
            const response = await fetch(
                'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true'
            );
            
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }

            const result = await response.json();
            setData(result);
            setError(null);
        } catch (err) {
            setError('Error loading data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPrices(); // Fetch pertama kali

        // Auto-refresh setiap 10 detik
        const interval = setInterval(() => {
            fetchPrices();
        }, 10000);

        // Bersihkan interval saat komponen di-unmount (mencegah memory leak)
        return () => clearInterval(interval);
    }, []);

    return { data, loading, error };
};