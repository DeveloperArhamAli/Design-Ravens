import { useState, useEffect } from "react";

export default function CursorFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed w-64 h-64 rounded-full bg-cyan-500/20 blur-[80px] pointer-events-none z-0 transition-transform duration-300 ease-out hidden md:block" style={{transform: `translate(${mousePosition.x - 128}px, ${mousePosition.y - 128}px)`,}}/>
    );
}