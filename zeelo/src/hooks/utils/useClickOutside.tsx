import { useEffect } from "react";
const useOutsideClick = (ref: any, callback: Function) => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
        if (!ref.current || ref.current.contains(e.target)) {
            return;
        }

        callback(e);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('touchstart', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('touchstart', handleClick);
        };
    });
};

export default useOutsideClick;