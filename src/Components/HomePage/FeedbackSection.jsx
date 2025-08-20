import { Box, Container, Grid } from "@mui/material"
import FeedbackSlider from "../Slider/FeedbackSlider"
import Reveal from "../FramerMotion/Reveal "

function FeedbackSection() {
    return (
        <Container maxWidth='xl' sx={{ my: 2 }}>
            <Grid container>

                {/* ////////////////grid-content////////////// */}

                <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: 'center' }}>
                    <Box sx={{ position: "relative" }}>
                        <Box
                            component="img"
                            src="/Images/feedback-1.jpg"
                            alt="Hotel"
                            sx={{
                                width: "80%",
                                borderRadius: 5
                            }}
                        />
                        {/* /////////motion animation////////////////// */}
                        <Reveal type="slide-right">
                            <Box
                                component="img"
                                src="/Images/feedback-2.jpg"
                                alt="Hotel"
                                sx={{
                                    width: "30%",
                                    borderRadius: 4,
                                    objectFit: "cover",
                                    position: "absolute",
                                    bottom: 120,
                                    right: 5,
                                    border: "3px solid white",
                                    animation: 'animatedimg 3s linear infinite'
                                }}
                            />
                        </Reveal>
                    </Box>
                </Grid>

                {/* ////////////////grid-content////////////// */}

                <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'flex-start', mt: { xs: 10, md: 0 } }}>
                    <Box sx={{ width: "75%", margin: "auto" }}>
                        <span className="about-span">Testimonial</span>
                        <h2 className='about-title' style={{ fontWeight: 800, fontSize: 35 }}>
                            Amazing Feedback Say <br /> About Services
                        </h2>

                        {/* ////////////////FeedbackSlider////////////// */}

                        <FeedbackSlider />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FeedbackSection
