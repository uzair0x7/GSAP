import { useRef } from "react";
import gsap from "gsap";
import "../styles/Fly.css";
import Patrick from "../assets/patrick.png";

export default function Fly() {
    const patrickRef = useRef(null);

    const handleMouseEnter = () => {
        const patrick = patrickRef.current;

        const randomX = gsap.utils.random(-500, 500);
        const randomY = gsap.utils.random(-400, 400);

        gsap.to(patrick, {
            x: randomX,
            y: randomY,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    return (
        <div className="container">
            <img
                ref={patrickRef}
                className="patrick"
                onMouseEnter={handleMouseEnter}
                src={Patrick}
                alt="Patrick"
            />
        </div>
    );
}