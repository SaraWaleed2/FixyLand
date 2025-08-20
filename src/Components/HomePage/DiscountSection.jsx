import { Box, Container, Typography, Grid } from "@mui/material";
import Btn from "../Btn/Btn";

const offers = [
    {
        title: "Get 30% Off on Hotel Booking",
        discount: "30% Off",
        image: "/src/assets/Images/image-offer-1.png",
    },
    {
        title: "Get 35% Off on Resort Booking",
        discount: "35% Off",
        image: "/src/assets/Images/image-offer-2.png",
    },
];

function DiscountSection() {
    return (
        <Box sx={{ py: 15, backgroundColor: "#f0f8f4" }}>
            <Container>
                <Box sx={{ textAlign: "center", mb: 5 }}>
                    <span className="about-span">Special Offers</span>

                    <h2 className='about-title' style={{ fontWeight: 800 }}>
                        Special Discount for Hotel & <br />
                        Resort Booking
                    </h2>
                </Box>
                
                {/*/////////////////////////////// Content//////////////////// */}
                <Grid container spacing={3}>
                    {offers.map((offer, i) => (
                        <Grid size={{ xs: 12, md: 6 }} key={i} sx={{ overflow: "hidden", borderRadius: 4 }}>
                            <Box className='discount-box'
                                sx={{
                                    position: "relative",
                                    height: 350,
                                    width: "100%",
                                    m: 'auto',
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    backgroundImage: `url(${offer.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    p: 3,
                                    color: "#fff",
                                    transition: "0.5s all ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        overflow: "hidden"
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0,0,0,0.4)",
                                        zIndex: 1,
                                    }}
                                />

                                <Box sx={{ zIndex: 2, px: 3 }}>
                                    <span className="span-outline">{offer.discount}</span>
                                    <Typography variant="h3" fontWeight={800} sx={{ my: 3, fontSize: 35, lineHeight: 1.4 }}>
                                        {offer.title}
                                    </Typography>

                                    <Btn btnContent='Book now' bgColor='white' hoverBgColor='var(--secondary-color)' />
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default DiscountSection;
