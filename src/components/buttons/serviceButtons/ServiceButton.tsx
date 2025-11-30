

interface ServiceButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const ServiceButton = ({ children, onClick }: ServiceButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '39.2px',
                height: '36px',
                backgroundColor: '#222222',
                borderRadius: '8px',
                cursor: 'pointer'
            }}
        >
            {children}
        </button>
    );
};

export default ServiceButton;