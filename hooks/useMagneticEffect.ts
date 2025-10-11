import { useRef, useEffect } from 'react';

const useMagneticEffect = <T extends HTMLElement>() => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { top, left, width, height } = element.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            element.style.transition = `transform 0.1s ease-out`;
            element.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
        };

        const handleMouseLeave = () => {
            element.style.transition = `transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)`;
            element.style.transform = `translate(0,0)`;
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return ref;
};

export default useMagneticEffect;
