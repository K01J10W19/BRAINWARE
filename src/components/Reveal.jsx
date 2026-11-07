import { useEffect, useRef, useState } from "react";

// Fades/slides its content in once it scrolls into view.
// variant: "up" | "down" | "left" | "right" | "zoom" | "fade"
const Reveal = ({
    as: Tag = "div",
    variant = "up",
    delay = 0,
    once = true,
    className,
    style,
    children,
    ...rest
}) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(
        () => typeof IntersectionObserver === "undefined"
    );

    useEffect(() => {
        const node = ref.current;
        if (!node || typeof IntersectionObserver === "undefined") return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setVisible(false);
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [once]);

    return (
        <Tag
            ref={ref}
            className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${
                className || ""
            }`}
            style={{ ...style, "--reveal-delay": `${delay}ms` }}
            {...rest}
        >
            {children}
        </Tag>
    );
};

export default Reveal;
