import { Line } from 'react-chartjs-2';
import {
    Chart,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    Tooltip,
    type ScriptableContext,
    type ChartOptions
} from 'chart.js';
import {useGetMockData} from "../../hooks/helpers/useGetMockData.ts";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip);


export default function CryptoChart() {

    const {dataPoints} = useGetMockData()

    const arrPrices = dataPoints.map(item => item.price);

    const chartData = {
        labels: dataPoints.map(item => item.date),
        datasets: [
            {
                data: arrPrices,
                borderColor: 'rgba(236, 189, 117, 1)',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.2,
                fill: true,
                backgroundColor: (ctx: ScriptableContext<"line">) => {
                    const chart = ctx.chart;
                    const ctx2 = chart.ctx;

                    const gradient = ctx2.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, 'rgba(236, 189, 117, 0.35)');
                    gradient.addColorStop(0.3, 'rgba(236, 189, 117, 0.15)');
                    gradient.addColorStop(1, 'rgba(236, 189, 117,0)');

                    return gradient;
                }
            }
        ]
    };

    const chartOptions: ChartOptions<'line'> = {
        responsive: true,
        interaction: {
            mode: 'nearest',
            intersect: false
        },
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
                border: { color: 'rgba(129, 139, 166, 0.2)' },
                ticks: {
                    display: true,
                    color: 'rgba(129, 139, 166, 0.2)',
                    maxTicksLimit: 4
                },
                grid: {
                    drawTicks: true,
                    drawOnChartArea: false,
                    tickLength: 6,
                    color: 'rgba(129, 139, 166, 0.2)'
                },
            },
            y: {
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
        animation: false,
        maintainAspectRatio: false,
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


            const paddingX = 6;
            const radius = 4;

            ctx.font = '10px Roboto';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'left';


            const textWidth = ctx.measureText(value).width;
            const boxX = x + 6;
            const boxY = y - 8;
            const boxWidth = textWidth + paddingX * 2;
            const boxHeight = 16;


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

