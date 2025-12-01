import { create } from 'zustand'
import type {TimeFrame} from "../../components/timeFrames/TimeFrames.tsx";

interface CurrentPriceState {
    price: string
    difference: string
    updatePrice: (price: string, difference: string) => void
}

interface SelectTimeFrameState {
    timeFrame: TimeFrame
    selectTimeFrame: (timeFrame: '15S' | '1M' | '1H' | '1D' ) => void
}

export const useCurrentPriceStore = create<CurrentPriceState>(set => ({
    price: '0',
    difference: '0',

    updatePrice: (price, difference) =>
        set(() => ({
            price,
            difference
        }))
}))

export const useSelectTimeFrameStore = create<SelectTimeFrameState>(set => ({
    timeFrame: '15S',

    selectTimeFrame: timeFrame =>
        set(() => ({
            timeFrame
        }))
}))