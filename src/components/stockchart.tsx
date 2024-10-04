import React, { useRef, useEffect } from 'react';

// Define the type for stock data
type StockData = {
    date: string;
    price: number;
};

// Props for StockChart component
interface StockChartProps {
    data: StockData[];
}

const StockChart: React.FC<StockChartProps> = ({ data }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear previous drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dimensions
        const width = canvas.width;
        const height = canvas.height;
        const padding = 50;

        // Get min and max values
        const minPrice = Math.min(...data.map(d => d.price));
        const maxPrice = Math.max(...data.map(d => d.price));

        // Calculate scales for x and y axes
        const xScale = (width - 2 * padding) / (data.length - 1);
        const yScale = (height - 2 * padding) / (maxPrice - minPrice);

        // Draw axes
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.strokeStyle = '#000';
        ctx.stroke();

        // Draw stock price line
        ctx.beginPath();
        data.forEach((point, index) => {
            const x = padding + index * xScale;
            const y = height - padding - (point.price - minPrice) * yScale;

            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw circles at data points
        data.forEach((point, index) => {
            const x = padding + index * xScale;
            const y = height - padding - (point.price - minPrice) * yScale;

            ctx.beginPath();
            ctx.arc(x, y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = '#007bff';
            ctx.fill();
        });
    }, [data]);

    return <canvas ref={canvasRef} width={600} height={400}></canvas>;
};

export default StockChart;
