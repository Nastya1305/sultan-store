import { useState, useEffect } from 'react';
import {
    MEDIA_1, MEDIA_2, MEDIA_3, MEDIA_4, MEDIA_5, MEDIA_6, MEDIA_7
} from '../styles/const-breakpoints';

export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event: Event) => {
            const target = event.target as Window;
            setWidth(target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        isMedia7: width <= MEDIA_7,
        isMedia6: width <= MEDIA_6,
        isMedia5: width <= MEDIA_5,
        isMedia4: width <= MEDIA_4,
        isMedia3: width <= MEDIA_3,
        isMedia2: width <= MEDIA_2,
        isMedia1: width <= MEDIA_1,
    };
};