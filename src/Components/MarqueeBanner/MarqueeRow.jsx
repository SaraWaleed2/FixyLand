import Marquee from "react-fast-marquee";
import { Typography, Box } from "@mui/material";

function MarqueeRow({ direction, bgColor, skew, zIndex, top = 0 }) {

const items = ["Holiday Booking", "Enjoy", "Luxury Hotel", "USUI LS", "Hotel & Resort", "Relax"];

    return (
        <Box
            sx={{
                backgroundColor: bgColor,
                py: 4,
                transform: `skewY(${skew}deg)`,
                position: "relative",
                zIndex,
                top,
            }}
        >
            <Marquee speed={50} gradient={false} direction={direction}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {items.map((text, i) => (
                        <Box
                            key={i}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mx: 4,
                                gap: 2,
                            }}
                        >
                            <img src='/Images/shape-2.svg' alt="star-banner-icon" className="banner-icon" />
                            <Typography
                                sx={{
                                    fontSize: "2.2rem",
                                    fontWeight: 700,
                                    color: "transparent",
                                    WebkitTextStroke: "1px white",
                                    textShadow: "2px 1px 4px rgba(254, 254, 254, 0.9)",
                                    transition: "all 0.5s ease",
                                    whiteSpace: "nowrap",
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: "#ffffff",
                                        WebkitTextStroke: "0px",
                                        textShadow: "2px 1px 4px rgba(254, 254, 254, 0.36)",
                                    },
                                }}
                            >
                                {text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Marquee>
        </Box>
    )
}

export default MarqueeRow
