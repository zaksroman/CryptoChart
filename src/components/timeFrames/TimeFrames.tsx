import TimeFrameButton from "../buttons/timeFrameButton/TimeFrameButton.tsx";
import {useSelectTimeFrameStore} from "../../hooks/store/store.ts";
import {ButtonsRow, ButtonsRoot} from "./TimeFrames.styled.ts";


const timeFramesConfig = ['15S', '1M', '1H', '1D'] as const;
export type TimeFrame = typeof timeFramesConfig[number];

const TimeFrames = () => {

    const selectTimeFrame = useSelectTimeFrameStore(state => state.selectTimeFrame)
    const timeFrame  = useSelectTimeFrameStore(state => state.timeFrame)

    const handleSelectTimeFrame = (timeFrame: TimeFrame) => {
        selectTimeFrame(timeFrame)
    }

    return (
        <ButtonsRoot>
            <ButtonsRow>
                {timeFramesConfig.map(item => (
                    <TimeFrameButton
                        key={item}
                        logo={item}
                        onClick={() => handleSelectTimeFrame(item)}
                        isSelected={item === timeFrame}
                    />
                ))}
            </ButtonsRow>
        </ButtonsRoot>
    )
};

export default TimeFrames;