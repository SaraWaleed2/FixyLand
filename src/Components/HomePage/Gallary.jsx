import { Box, Container, Grid, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';

function Gallary() {
    const gallary = [
        { img: "/src/assets/Images/room1.jpg" },
        { img: "/src/assets/Images/room2.jpg" },
        { img: "/src/assets/Images/room3.jpg" },
        { img: "/src/assets/Images/room4.jpg" },
        { img: "/src/assets/Images/room5.jpg" },
    ];

    return (
        <Container maxWidth={false} disableGutters style={{backgroundColor:"black"}}>
            <Grid container>
                {gallary.map((img, i) => (
                    <Grid size={{xs:6,md:2.4}} key={i}>
                        <Box sx={{ position: "relative", overflow: "hidden" }}>
                            <img
                                src={img.img}
                                alt="gallary-images"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />

                            {i === 2 ? (
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                                        py: 7,
                                        px: 5,
                                        width: '80%',
                                        borderRadius: 3,
                                        textAlign: "center",
                                    }}
                                >
                                    <InstagramIcon sx={{ fontSize: "40px", color: 'var(--primary-color)', mb: 2 }} />
                                    <Typography variant="h5" sx={{ fontWeight: "700", color: 'var(--primary-color)' }}>
                                        Follow Our Instagram
                                    </Typography>
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "98%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#1f8f6a8c",
                                        opacity: 0,
                                        cursor:"pointer",
                                        transition: "opacity 0.3s ease",
                                        "&:hover": {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <InstagramIcon sx={{ fontSize: "40px", color: 'white' }} />
                                </Box>
                            )}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Gallary;
