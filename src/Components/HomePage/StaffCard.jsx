import { Card, CardMedia, CardContent, Typography, Box, Button, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function StaffCard({ name, role, imageSrc }) {

    const actions = [
        { icon: <FacebookIcon />, name: 'Facebook' },
        { icon: <InstagramIcon />, name: 'Instagram' },
        { icon: <XIcon />, name: 'X' },
        { icon: <YouTubeIcon />, name: 'YouTube' },
    ];
    return (
        <Card sx={{ maxWidth: 345, margin: '0 auto', borderRadius: 2 }}>
            <Box sx={{ position: "relative" }}>

                {/* //////////////////card-image///////////////////// */}
                <CardMedia
                    sx={{
                        height: 321.5,
                        objectFit: 'cover',
                    }}
                    image={imageSrc}
                    title={name}
                />
                {/* //////////////////social-button///////////////////// */}

                <SpeedDial
                    ariaLabel="SpeedDial"
                    sx={{
                        position: 'absolute',
                        bottom: 16,
                        right: 16,
                        '& .MuiFab-primary': {
                            backgroundColor: 'var(--primary-color)',
                            width: 40,
                            height: 40,
                            '&:hover': {
                                backgroundColor: 'var(--secondary-color)',
                            },
                        },
                    }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            slotProps={{
                                tooltip: {
                                    title: action.name,
                                },
                            }}
                            sx={{
                                '& .MuiFab-primary': {
                                    backgroundColor: 'var(--primary-color)',
                                    width: 50,
                                    height: 50,
                                    '&:hover': {
                                        backgroundColor: 'var(--secondary-color)',
                                    },
                                },
                            }}
                        />
                    ))}
                </SpeedDial>

            </Box>
                {/* //////////////////card-content///////////////////// */}

            <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {name}
                </Typography>
                <Typography variant="body2" sx={{
                    color: 'var(--gray-color)',
                    position: 'relative',
                    left: 50,
                    "&::before": {
                        content: "''",
                        position: "absolute",
                        height: 1.5,
                        width: 30,
                        backgroundColor: "var(--primary-color)",
                        transform: 'translate(-170% ,600%)'
                    }
                }}>
                    {role}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default StaffCard
