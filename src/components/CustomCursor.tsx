import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only activate custom cursor if not on touch device
        if (window.matchMedia("(pointer: fine)").matches) {
            const handleMouseMove = (e: MouseEvent) => {
                const posX = e.clientX;
                const posY = e.clientY;
                
                if (cursorDotRef.current) {
                    cursorDotRef.current.style.left = `${posX}px`;
                    cursorDotRef.current.style.top = `${posY}px`;
                }
                
                // Add slight delay to outline for smooth trailing effect
                if (cursorOutlineRef.current) {
                    cursorOutlineRef.current.animate({
                        left: `${posX}px`,
                        top: `${posY}px`
                    }, { duration: 150, fill: "forwards" });
                }
            };

            window.addEventListener('mousemove', handleMouseMove);

            // Add hover states for interactive elements (using mutation observer or event delegation)
            const handleMouseOver = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                if (target.closest('.interactive-element') || target.closest('a') || target.closest('button')) {
                    cursorOutlineRef.current?.classList.add('hover');
                }
            };

            const handleMouseOut = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                if (target.closest('.interactive-element') || target.closest('a') || target.closest('button')) {
                    cursorOutlineRef.current?.classList.remove('hover');
                }
            };

            document.addEventListener('mouseover', handleMouseOver);
            document.addEventListener('mouseout', handleMouseOut);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseover', handleMouseOver);
                document.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={cursorDotRef} id="cursor-dot"></div>
            <div className="cursor-outline" ref={cursorOutlineRef} id="cursor-outline"></div>
        </>
    );
};

export default CustomCursor;
