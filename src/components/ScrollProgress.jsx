import { useEffect, useRef } from "react";

// Thin gradient bar at the top of the viewport that tracks page scroll.
const ScrollProgress = () => {
    const barRef = useRef(null);

    useEffect(() => {
        let frame = 0;

        const update = () => {
            frame = 0;
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const max = scrollHeight - clientHeight;
            const progress = max > 0 ? scrollTop / max : 0;
            if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 pointer-events-none">
            <div ref={barRef} className="scroll-progress-bar h-full origin-left" />
        </div>
    );
};

export default ScrollProgress;
