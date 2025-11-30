
interface CustomButtonProps {
    logo: string;
    onClick: ()=>void;
}

const CustomButton = ({logo, onClick}:CustomButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{
                color: 'rgba(255, 255, 255, 1)',
                backgroundColor: 'rgba(38, 38, 38, 1)',
                borderRadius: '8px',
                padding: '0 16px',
                height: '28px',
                fontSize: '12px',
                fontWeight: 400,
                fontFamily: 'Geist',
            }}>
                {logo}
        </button>
    );
};

export default CustomButton;