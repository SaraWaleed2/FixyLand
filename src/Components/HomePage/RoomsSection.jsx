import { Box, Container } from "@mui/material";
import RoomSlider from "../Slider/RoomSlider";
import Reveal from "../FramerMotion/Reveal ";

function RoomsSection() {
    return (
        <Container maxWidth='xl' sx={{ pt: { xs: 2, md: 7 }, pb: 10, backgroundColor: "var(--bg-color)" }}>
            <Box sx={{ px: { xs: 0, md: 10 } }}>
                <Box sx={{ textAlign: "center", mb: 5 }}>
                    {/* /////////////////motion animation////////////// */}
                    <Reveal>
                        <span className='about-span'>Room Type</span>
                        <h2 className='about-title' style={{ fontWeight: 800 }}>
                            The Best Luxury Rooms And <br />
                            Suites
                        </h2>
                    </Reveal>
                </Box>
                <RoomSlider />
            </Box>

        </Container>
    )
}

export default RoomsSection;
