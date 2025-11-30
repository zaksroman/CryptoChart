import {useCallback, useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    Tooltip,
} from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip);


export default function CryptoChart() {
    const timeframe: '15s' | '1m' | '1h' | '1d' = '15s';

    const formatDate = useCallback((tf: typeof timeframe, d: Date) => {
        const pad = (n: number) => String(n).padStart(2, '0');

        const MM = pad(d.getMonth() + 1);
        const DD = pad(d.getDate());
        const hh = pad(d.getHours());
        const mm = pad(d.getMinutes());
        const ss = pad(d.getSeconds());

        if (tf === '15s') return `${hh}:${mm}:${ss}`;
        if (tf === '1m') return `${hh}:${mm}`;
        if (tf === '1h') return `${MM}/${DD} ${hh}:${mm}`;
        return `${MM}/${DD}`;
    }, [timeframe]);

    const [dataPoints, setDataPoints] = useState(() => {
        const arr = [];
        let value = 90000;
        const now = new Date();

        for (let i = 0; i < 50; i++) {
            const date = new Date(now.getTime() - (50 - i) * 1000);

            arr.push({
                price: value,
                date: formatDate(timeframe, date)
            });

            const changeMockData = Math.random() * 0.10 - 0.05
            value +=Number((value * changeMockData).toFixed(2));
        }
        return arr;
    });

    useEffect(() => {
        const generateNext = () => {
            setDataPoints(prev => {
                const lastPrice = prev[prev.length - 1].price;
                const change = Math.random() * 0.10 - 0.05;
                const nextPrice = +(lastPrice + lastPrice * change).toFixed(2);

                return [
                    ...prev.slice(1),
                    {
                        price: nextPrice,
                        date: formatDate(timeframe, new Date())
                    }
                ];
            });
        };

        const timer = setInterval(generateNext, 3000);
        return () => clearInterval(timer);
    }, [formatDate]);

    const arrPrices = dataPoints.map(i => i.price);

    const chartData = {
        labels: dataPoints.map(i => i.date),
        datasets: [
            {
                data: arrPrices,
                borderColor: 'rgba(236, 189, 117, 1)',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.2,
                fill: true,
                backgroundColor: (ctx: { chart: Chart }) => {
                    const chart = ctx.chart;
                    const { ctx: canvas, chartArea } = chart;

                    if (!chartArea) return null;

                    const gradient = canvas.createLinearGradient(
                        0,
                        chartArea.top,
                        0,
                        chartArea.bottom
                    );

                    gradient.addColorStop(0, 'rgba(236, 189, 117,0.35)');
                    gradient.addColorStop(0.3, 'rgba(236, 189, 117, 0.1)');
                    gradient.addColorStop(1, 'rgba(236, 189, 117,0)');

                    return gradient;
                }
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        interaction: { mode: false },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        layout: {
            padding: {
                right: 15
            }
        },
        scales: {
            x: {
                drawBorder: true,
                border: { color: 'rgba(129, 139, 166, 0.2)' },
                ticks: {
                    display: true,
                    color: 'rgba(129, 139, 166, 0.2)',
                    maxTicksLimit: 6
                },
                grid: {
                    drawTicks: true,
                    drawOnChartArea: false,
                    tickLength: 6,
                    color: 'rgba(129, 139, 166, 0.2)'
                },
            },
            y: {
                drawBorder: true,
                border: { color: 'rgba(129, 139, 166, 0.2)' },
                position: 'right',
                grid: {
                    drawTicks: true,
                    drawOnChartArea: false,
                    tickLength: 6,
                    color: 'rgba(129, 139, 166, 0.2)',
                },
                ticks: {
                    display: true,
                    color: 'rgba(129, 139, 166, 0.2)',
                    maxTicksLimit: 10,
                },
            },
        },
        maintainAspectRatio: false,
        animations: false,
    };

    const lastPointPlugin = {
        id: 'lastPointPlugin',
        afterDatasetsDraw(chart: Chart) {
            const { ctx } = chart;
            const dataset = chart.data.datasets[0];
            const meta = chart.getDatasetMeta(0);

            if (!meta?.data?.length) return;

            const lastPoint = meta.data[meta.data.length - 1];
            const y = lastPoint.y;
            const x = lastPoint.x;
            const value = dataset.data[dataset.data.length - 1]?.toString() ?? '';

            // Линия от правой оси до левого края
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(151, 252, 166, 1)';
            ctx.lineWidth = 1;
            ctx.setLineDash([2, 0.5]);

            ctx.moveTo(chart.chartArea.left, y);
            ctx.lineTo(chart.chartArea.right, y);
            ctx.stroke();

            // Текст рядом с точкой
            const paddingX = 6;
            const radius = 4;

            ctx.font = '10px Roboto';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'left';

            // вычисляем ширину текста
            const textWidth = ctx.measureText(value).width;
            const boxX = x + 6;
            const boxY = y - 8;
            const boxWidth = textWidth + paddingX * 2;
            const boxHeight = 16;

            // рисуем закруглённый фон
            ctx.beginPath();
            ctx.fillStyle = 'rgba(151, 252, 166, 1)';
            ctx.strokeStyle = 'rgba(151, 252, 166, 1)';

            ctx.moveTo(boxX + radius, boxY);
            ctx.lineTo(boxX + boxWidth - radius, boxY);
            ctx.quadraticCurveTo(boxX + boxWidth, boxY, boxX + boxWidth, boxY + radius);
            ctx.lineTo(boxX + boxWidth, boxY + boxHeight - radius);
            ctx.quadraticCurveTo(boxX + boxWidth, boxY + boxHeight, boxX + boxWidth - radius, boxY + boxHeight);
            ctx.lineTo(boxX + radius, boxY + boxHeight);
            ctx.quadraticCurveTo(boxX, boxY + boxHeight, boxX, boxY + boxHeight - radius);
            ctx.lineTo(boxX, boxY + radius);
            ctx.quadraticCurveTo(boxX, boxY, boxX + radius, boxY);
            ctx.fill();

            // текст поверх фона
            ctx.fillStyle = 'rgba(33, 33, 33, 1)';
            ctx.fillText(value, boxX + paddingX, y);

            ctx.restore();
        }
    };



    return (
        <div style={{ width: '100%', height: '55%', background: 'transparent', overflow: 'visible' }}>
            <Line data={chartData} options={chartOptions} plugins={[lastPointPlugin]} />
        </div>
);
}

