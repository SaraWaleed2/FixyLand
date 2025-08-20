import { Box, Container, Typography } from "@mui/material"
import Btn from "../Btn/Btn"
import Reveal from "../FramerMotion/Reveal "

function HeroSection() {
    return (
        <Container
            maxWidth={false} disableGutters
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '105vh',
                backgroundImage: 'url("/banner-1.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
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
            }}>
            <Box sx={{
                position: 'absolute',
                top: '60%',
                left: '50%',
                transform: ' translate(-50%, -50%)',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
            }}>
                {/* /////////////hero-info////////////// */}
                {/* /////////,otion animation for header content ////////////////// */}
                <Reveal type="fade-up">
                    <Typography variant="h2" sx={{ color: 'white', fontSize: { xs: 45, md: 70 }, fontWeight: 800, letterSpacing: 5 }}>
                        Book With Best
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: { xs: 45, md: 70 }, fontWeight: 800, letterSpacing: 5, color: 'var(--secondary-color)' }}>
                        Luxury Hotel
                    </Typography>
                </Reveal>

                <Typography variant="body1" sx={{ mt: 2, color: 'white', fontWeight: 300, fontSize: 16.5, maxWidth: { xs: 400, md: 720 }, letterSpacing: 0.5 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus nunc Duis egestas ac ante sed tincidunt.                </Typography>
                <Box sx={{ mt: 5, display: "flex", gap: 2 }}>
                    <Btn btnContent='explore more' />

                    {/* /////////motion animation for btn ////////////////// */}
                    <Reveal type="slide-right">
                        <Btn btnContent='our services' bgColor='white' hoverBgColor='var(--secondary-color)' />
                    </Reveal>
                </Box>
            </Box>

        </Container>
    )
}

export default HeroSection
