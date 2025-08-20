import { Avatar, Container, Box } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function VideoSection() {
    return (
        <Container
            maxWidth='xl'
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                backgroundImage: 'url("/Images/video-background.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.64)',
                    zIndex: 1
                }
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        transform: 'translate(-50%, -50%)',
                        animation: 'videoAnim 2s ease infinite',
                    }}
                />
                <Avatar
                    sx={{
                        width: 80,
                        height: 80,
                        backgroundColor: "white",
                        cursor:'pointer'
                    }}
                >
                    <PlayArrowIcon sx={{ fontSize: 50, color: "black" }} />
                </Avatar>
            </Box>
        </Container>
    );
}

export default VideoSection;
