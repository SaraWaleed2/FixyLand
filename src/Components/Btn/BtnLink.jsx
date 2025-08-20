import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function BtnLink({ btnContent }) {
    const [hovered, setHovered] = useState(false);

    return (
            <Button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                    position: 'relative',
                    textTransform: "capitalize",
                    height: 45,
                    width: 150,
                    color: 'var(--primary-color)',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    transition: 'all 0.3s ease',
                    borderRadius: 0,
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "80%",
                        height: "1.5px",
                        backgroundColor: "var(--primary-color)",
                        transition: "all 0.3s ease",
                    },

                    "&:hover::after": {
                        width: "60%",
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

export default BtnLink;
