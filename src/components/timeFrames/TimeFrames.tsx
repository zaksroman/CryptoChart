import Box from "@mui/material/Box";
import TimeFrameButton from "../buttons/timeFrameButton/TimeFrameButton.tsx";
import {useSelectTimeFrameStore} from "../../hooks/store/store.ts";


const timeFramesConfig = ['15S', '1M', '1H', '1D'] as const;
export type TimeFrame = typeof timeFramesConfig[number];

const TimeFrames = () => {

    const selectTimeFrame = useSelectTimeFrameStore(state => state.selectTimeFrame)
    const timeFrame  = useSelectTimeFrameStore(state => state.timeFrame)

    const handleSelectTimeFrame = (timeFrame: TimeFrame) => {
        selectTimeFrame(timeFrame)
    }

    return (
        <Box sx={{
            display: "flex",
            width: '100%',
            padding: '5px 12px',
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: 1,
            }}>
                {timeFramesConfig.map((item) => (
                    <TimeFrameButton
                        key={item}
                        logo={item}
                        onClick={() => handleSelectTimeFrame(item)}
                        isSelected = { item === timeFrame }
                    />
                ))}
            </Box>
        </Box>
    );
};

export default TimeFrames;