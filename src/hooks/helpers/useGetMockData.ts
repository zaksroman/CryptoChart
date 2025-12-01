import {useCurrentPriceStore, useSelectTimeFrameStore} from "../store/store.ts";
import {useCallback, useEffect, useState} from "react";

export const useGetMockData = () => {

    const updatePrice = useCurrentPriceStore(state => state.updatePrice);
    const timeFrame = useSelectTimeFrameStore(state => state.timeFrame);

    const formatDate = useCallback((tf: typeof timeFrame, d: Date) => {
        const pad = (n: number) => String(n).padStart(2, '0');

        const MM = pad(d.getMonth() + 1);
        const DD = pad(d.getDate());
        const hh = pad(d.getHours());
        const mm = pad(d.getMinutes());
        const ss = pad(d.getSeconds());

        if (tf === '15S') return `${hh}:${mm}:${ss}`;
        if (tf === '1M') return `${hh}:${mm}`;
        if (tf === '1H') return `${MM}/${DD} ${hh}:${mm}`;
        return `${MM}/${DD}`;
    }, [timeFrame]);

    const [dataPoints, setDataPoints] = useState<{price: number, date: string}[]>([]);

    useEffect(() => {
        const arr = [];
        let value = 90000;
        const now = new Date();

        for (let i = 0; i < 50; i++) {
            const date = new Date(now.getTime() - (50 - i) * 1000);

            arr.push({
                price: value,
                date: formatDate(timeFrame, date)
            });

            const changeMockData = Math.random() * 0.10 - 0.05;
            value = +(value * (1 + changeMockData)).toFixed(2);
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDataPoints(arr);
    }, [timeFrame, formatDate]);


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
                        date: formatDate(timeFrame, new Date())
                    }
                ];
            });
        };

        const timer = setInterval(generateNext, 3000);
        return () => clearInterval(timer);
    }, [formatDate]);

    const getPercentDiff = (arr: {price: number, date: string}[]) => {
        if (!arr || arr.length < 2) return '0'

        const prev = arr[arr.length - 2].price
        const last = arr[arr.length - 1].price

        const diff = ((last - prev) / prev) * 100


        return diff > 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1)
    }

    useEffect(() => {
        if (dataPoints && dataPoints.length > 1) {
            const percent = getPercentDiff(dataPoints)
            updatePrice(`${dataPoints[dataPoints.length - 1].price}`, percent)
        }
    }, [dataPoints, updatePrice])

    return { dataPoints }
}