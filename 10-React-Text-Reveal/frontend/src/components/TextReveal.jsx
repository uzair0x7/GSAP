import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "../styles/TextReveal.css";

gsap.registerPlugin(ScrollTrigger);

function TextReveal() {
    const triggerRef = useRef(null);

    const text =
    "Trust me you will like this animation, try scrolling through the section and watch the text reveal itself one letter at a time with a smooth and subtle effect.";

    useEffect(() => {
        const letters = triggerRef.current.children;

        const animation = gsap.to(letters, {
            scrollTrigger: {
                trigger: triggerRef.current,
                scrub: true,
                start: "top center",
                end: "bottom 85%",
            },
            color: "#2A1B3D",
            duration: 5,
            stagger: 1,
        });

        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        };
    }, []);

    return (
        <>
            <div className="text-reveal-spacing-small" />

            <section className="text-reveal">
                <div
                    className="text-reveal-content"
                    ref={triggerRef}
                >
                    {text.split("").map((letter, index) => (
                        <span
                            className="text-reveal-letter"
                            key={index}
                        >
                            {letter}
                        </span>
                    ))}
                </div>
            </section>

            <div className="text-reveal-spacing" />
        </>
    );
}

export default TextReveal;