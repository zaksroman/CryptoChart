
interface TimeFrameButtonProps {
    logo: string;
    onClick: () => void;
    isSelected: boolean;
}

const TimeFrameButton = ({ logo, onClick, isSelected }: TimeFrameButtonProps) => (
        <button
            onClick={onClick}
            style={{
                flex: 1,
                height: '28px',
                color: isSelected ? 'rgba(244, 164, 44, 1)' : 'white',
                fontWeight: 400,
                fontSize: '12px',
                fontFamily: 'Geist',
                backgroundColor: isSelected ? 'rgba(244, 164, 44, 0.05)' : 'rgba(34, 34, 34, 1)',
                border: isSelected ? '1px solid rgba(236, 189, 117, 1)' : 'none',
                borderRadius: '8px',
                width: '100%',
            }}>
            {logo}
        </button>
    );

export default TimeFrameButton;