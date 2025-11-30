
import { useState } from "react";
import ServiceButton from "./ServiceButton";

interface HeartIconProps {
    liked: boolean;
    animate: boolean;
}

const HeartIcon = ({ liked, animate }: HeartIconProps) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 16 15"
            style={{
                fill: liked ? "#FF4F4F" : "white",
                opacity:  liked ? 1 : 0.3,
                transition: "fill 0.2s ease, transform 0.2s ease",
                transform: animate ? "scale(1.5)" : "scale(1)",
                cursor: "pointer",
            }}
        >
            <path d="M15.9998 4.83831C15.9721 2.96329 14.9106 1.11677 13.2773 0.35571C12.4473 -0.0310697 11.4847 -0.1274 10.4809 0.191243C9.6448 0.45664 8.8074 1.00058 7.99993 1.85578C7.19246 1.00058 6.35507 0.45664 5.51896 0.191243C4.51513 -0.1274 3.55254 -0.0310697 2.72252 0.35571C1.0893 1.11677 0.0277817 2.96329 6.51743e-05 4.83831L0 4.84707C0 7.58184 1.62641 10.0047 3.34887 11.7052C4.21835 12.5635 5.13615 13.2621 5.93675 13.75C6.33681 13.9936 6.71557 14.1897 7.05115 14.3265C7.37174 14.4574 7.70622 14.5568 7.99993 14.5568C8.29364 14.5568 8.62812 14.4574 8.94871 14.3265C9.28429 14.1897 9.66305 13.9936 10.0631 13.75C10.8637 13.2621 11.7815 12.5635 12.651 11.7052C14.3735 10.0047 15.9999 7.58184 15.9999 4.84707L15.9998 4.83831Z" />
        </svg>
    );
};


const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const [animate, setAnimate] = useState(false);

    const toggleLike = () => {
        if (!liked) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 200);
        }
        setLiked(!liked);
    };

    return (
        <ServiceButton onClick={toggleLike}>
            <HeartIcon liked={liked} animate={animate} />
        </ServiceButton>
    );
};

export default LikeButton;
