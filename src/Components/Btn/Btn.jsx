import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Btn({ btnContent, bgColor, hoverBgColor, hoverTextColor, btnColor,btnWidth,btnHight }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                position: 'relative',
                textTransform: "capitalize",
                height:btnHight|| 55,
                width:btnWidth|| 200,
                borderRadius: 2,
                backgroundColor: bgColor || 'var(--secondary-color)',
                color: btnColor || '#212121ff',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                transition: 'color 0.3s ease',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: 0,
                    backgroundColor: hoverBgColor || 'white',
                    zIndex: 1,
                    transition: 'width 0.3s ease',
                    borderRadius: 2,
                },
                '&:hover': {
                    color: hoverTextColor || 'black',
                },
                '&:hover::after': {
                    width: '100%',
                },
                '& .btn-content': {
                    position: 'relative',
                    zIndex: 2,
                },
            }}
        >
            <span className="btn-content" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Typography sx={{ fontWeight: 500, textTransform: 'capitalize' }}>{btnContent}</Typography>
                {hovered ? <ArrowForwardIcon /> : <ArrowOutwardIcon />}
            </span>
        </Button>
    );
}

export default Btn;
