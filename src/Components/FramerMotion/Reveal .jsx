import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Reveal({ children, type = "fade-up" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const animations = {
        "fade-up": { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
        "slide-left": { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
        "slide-right": { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    };

    const variants = animations[type] || animations["fade-up"];

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

export default Reveal;
