import { Box } from "@mui/material";
import { useState } from "react";

function Logos() {
    const images = [
        { normal: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/clents/clents-4.png', hover: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/clents/clents-4-hover.png' },
        { normal: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/clents/clents-5.png', hover: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/clents/clents-5-hover.png' },
        { normal: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/clents/clents-3.png', hover: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/clents/clents-3-hover.png' },
        { normal: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/clents/clents-2.png', hover: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/clents/clents-2-hover.png' },
        { normal: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/clents/clents-1.png', hover: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/clents/clents-1-hover.png' },
    ];

    const [hoverImage, setHoverImage] = useState(null);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, my: 10 , mt:25 }}>
            {images.map((img, i) => (
                <Box sx={{ width: 150 }}>
                    <img
                        src={hoverImage === i ? img.hover : img.normal}
                        alt={`image-${i}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            cursor:'pointer'
                        }}
                        onMouseEnter={() => setHoverImage(i)}
                        onMouseLeave={() => setHoverImage(null)}
                    />
                </Box>
            ))}
        </Box>
    );
}

export default Logos;
