
import { useEffect } from 'react';

export function useViewportHeight() {
    useEffect(() => {
        function updateVH() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        updateVH();
        window.addEventListener('resize', updateVH);

        return () => window.removeEventListener('resize', updateVH);
    }, []);
}
