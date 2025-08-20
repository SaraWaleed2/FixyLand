import { Box, Container } from "@mui/material"
import HotelCard from "./HotelCard"

function HotelNews() {
    return (
        <Container maxWidth='xl' sx={{ pt: 7, pb: 10, backgroundColor: "var(--bg-color)" }}>
            <Box sx={{ textAlign: "center", mb: 5 }}>
                <span className='about-span'>Room Type</span>
                <h2 className='about-title' style={{ fontWeight: 800 }}>
                    The Best Luxury Rooms And <br />
                    Suites
                </h2>
            </Box>

            <HotelCard />

        </Container>
    )
}

export default HotelNews
